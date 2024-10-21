import os
import re
import datetime
from pathlib import Path
import subprocess

def get_markdown_files(directory):
    return [f for f in Path(directory).rglob('*.md')]

def has_key(content, key):
    return re.search(rf'^{key}\s*=', content, re.MULTILINE) is not None

def get_last_commit_date(file_path):
    try:
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%cd', '--date=short', file_path],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError:
        return None

def add_keys_to_content(content, updated_date):
    # Find the position of the date key
    date_match = re.search(r'^date\s*=\s*".*"$', content, re.MULTILINE)
    new_keys = f'updated = "{updated_date}"\nlastmod = "{updated_date}"\n'
    
    if date_match:
        # Insert new keys right after the date key
        date_end = date_match.end()
        return content[:date_end] + '\n' + new_keys + content[date_end:]
    else:
        # If no date key, add the keys at the end of the front matter
        front_matter_end = content.find('+++', content.find('+++') + 1)
        return content[:front_matter_end] + new_keys + content[front_matter_end:]

def main():
    directory = 'content/'
    markdown_files = get_markdown_files(directory)
    files_to_update = []

    for file_path in markdown_files:
        with open(file_path, 'r') as file:
            content = file.read()
            if not has_key(content, 'updated') and not has_key(content, 'lastmod'):
                last_commit_date = get_last_commit_date(file_path)
                if last_commit_date:
                    files_to_update.append((file_path, last_commit_date))

    if not files_to_update:
        print("No files need updating.")
        return

    print("The following files will be updated:")
    for file_path, last_commit_date in files_to_update:
        print(f"{file_path}: updated = {last_commit_date}, lastmod = {last_commit_date}")

    proceed = input("Do you want to proceed with these changes? (yes/no): ").strip().lower()
    if proceed != 'yes':
        print("Aborting changes.")
        return

    for file_path, last_commit_date in files_to_update:
        with open(file_path, 'r') as file:
            content = file.read()
        new_content = add_keys_to_content(content, last_commit_date)
        with open(file_path, 'w') as file:
            file.write(new_content)

    print("Files have been updated.")

if __name__ == "__main__":
    main()
