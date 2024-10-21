import os
import re
import subprocess
from datetime import datetime
import pytz

# Define timezones for conversion
UTC = pytz.utc
EASTERN = pytz.timezone("America/New_York")

# Function to get the last commit date from git log
def get_git_last_commit_date(file_path):
    result = subprocess.run(
        ["git", "log", "-1", "--format=%cI", file_path],
        capture_output=True,
        text=True
    )
    if result.returncode == 0:
        last_commit_date_str = result.stdout.strip()
        return datetime.strptime(last_commit_date_str, "%Y-%m-%dT%H:%M:%S%z")
    else:
        raise Exception(f"Could not get git log for {file_path}: {result.stderr}")

# Function to convert date to midnight Eastern Time with seconds included
def set_to_midnight_eastern(date_str):
    try:
        if 'T' in date_str:  # If the date has time information
            dt = datetime.strptime(date_str, "%Y-%m-%dT%H:%M:%S")
        else:
            dt = datetime.strptime(date_str, "%Y-%m-%d")
        
        # Set time to midnight and convert to Eastern Time
        dt = dt.replace(hour=0, minute=0, second=0, microsecond=0)
        dt_utc = UTC.localize(dt) if dt.tzinfo is None else dt.astimezone(UTC)
        dt_et = dt_utc.astimezone(EASTERN)
        # Format with seconds and with TOML-compatible timezone offset, enclosed in quotes
        return '"' + dt_et.strftime("%Y-%m-%dT%H:%M:%S") + dt_et.strftime("%z").replace("-0400", "-04:00").replace("-0500", "-05:00") + '"'
    except ValueError:
        return None  # In case of parsing errors

# Function to update front matter of a markdown file
def update_front_matter(file_path, date, lastmod):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove the 'updated' key if present
    new_content = re.sub(r"^updated\s*=\s*['\"]?([\d\-T:Z\.]+)['\"]?\n?", '', content, flags=re.MULTILINE)

    # Replace or add 'date' and 'lastmod' keys, ensuring they are enclosed in quotes
    new_content = re.sub(r"^date\s*=\s*['\"]?([\d\-T:Z\.]+)['\"]?", f'date = {date}', new_content, flags=re.MULTILINE)
    if 'lastmod' in content:
        new_content = re.sub(r"^lastmod\s*=\s*['\"]?([\d\-T:Z\.]+)['\"]?", f'lastmod = {lastmod}', new_content, flags=re.MULTILINE)
    else:
        # Add 'lastmod' after the 'date' field if not present
        new_content = re.sub(r"(date\s*=\s*['\"]?[\d\-T:Z]+['\"]?)", f'\\1\nlastmod = {lastmod}', new_content, flags=re.MULTILINE)

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Function to preview the changes
def preview_changes(file_path, date, lastmod):
    print(f"File: {file_path}")
    print(f"  Proposed changes:")
    print(f"  - date: {date}")
    print(f"  - lastmod: {lastmod}")
    print("-" * 40)

# Walk through content directory and process markdown files
def process_markdown_files(content_dir):
    files_to_modify = []
    
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith(".md") and file != "_index.md":
                file_path = os.path.join(root, file)
                
                # Read front matter
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Extract date and draft status
                date_match = re.search(r"^date\s*=\s*['\"]?([\d\-T:Z]+)['\"]?", content, re.MULTILINE)
                draft_match = re.search(r"^draft\s*=\s*(true|false)", content, re.MULTILINE)
                
                date = date_match.group(1) if date_match else None
                draft = draft_match.group(1).lower() == 'true' if draft_match else False
                
                # Skip drafts and files without date
                if draft or not date:
                    continue

                # Update date to midnight Eastern Time with seconds
                new_date = set_to_midnight_eastern(date)
                
                # Get last commit date from git for 'lastmod'
                lastmod = get_git_last_commit_date(file_path)
                lastmod_formatted = '"' + lastmod.strftime("%Y-%m-%dT%H:%M:%S") + lastmod.strftime("%z").replace("-0400", "-04:00").replace("-0500", "-05:00") + '"'
                
                # Add to the list of files to modify, but don't apply yet
                files_to_modify.append((file_path, new_date, lastmod_formatted))

    # Preview the proposed changes
    for file_path, new_date, lastmod in files_to_modify:
        preview_changes(file_path, new_date, lastmod)

    # Ask for confirmation
    confirmation = input("\nDo you want to apply these changes? (yes/no): ").strip().lower()
    
    if confirmation == 'yes':
        for file_path, new_date, lastmod in files_to_modify:
            update_front_matter(file_path, new_date, lastmod)
        print("All changes have been applied.")
    else:
        print("No changes were made.")

# Set the content directory path
content_dir = "content/"

# Process the markdown files
process_markdown_files(content_dir)

print("Processing complete.")
