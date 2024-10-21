import os
import toml
from pathlib import Path

def update_front_matter(file_path, changefreq, priority):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Parse the front matter (assumes TOML format)
    front_matter_start = content.find('+++')
    front_matter_end = content.find('+++', front_matter_start + 3)
    front_matter_str = content[front_matter_start + 3:front_matter_end].strip()
    front_matter = toml.loads(front_matter_str)

    # Check if we should skip the file
    if front_matter.get('draft', False) or front_matter.get('render', True) == False:
        return None

    # Update extra fields for changefreq and priority
    if 'extra' not in front_matter:
        front_matter['extra'] = {}
    
    front_matter['extra']['changefreq'] = changefreq
    front_matter['extra']['priority'] = priority

    # Convert the updated front matter back to TOML format
    new_front_matter_str = toml.dumps(front_matter)

    # Reconstruct the file content with the updated front matter
    new_content = '+++\n' + new_front_matter_str + '+++\n' + content[front_matter_end + 3:]

    return new_content

def process_files(content_dir, pages_dir):
    files_to_modify = []

    # Walk through the directories and process markdown files
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith(".md") and file != "_index.md":
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, content_dir)
                
                # Determine the changefreq and priority based on directory
                if relative_path.startswith(pages_dir):
                    changefreq = "monthly"
                    priority = 0.5
                else:
                    changefreq = "weekly"
                    priority = 0.8
                
                # Preview changes before modifying
                new_content = update_front_matter(file_path, changefreq, priority)
                if new_content:
                    files_to_modify.append((file_path, changefreq, priority, new_content))

    # Preview the files to be modified
    for file_path, changefreq, priority, _ in files_to_modify:
        print(f"File: {file_path}")
        print(f"  Adding: extra.changefreq = \"{changefreq}\", extra.priority = {priority}")
        print("-" * 40)

    # Confirm changes
    confirmation = input("\nDo you want to apply these changes? (yes/no): ").strip().lower()
    
    if confirmation == 'yes':
        for file_path, _, _, new_content in files_to_modify:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
        print("Changes applied to all files.")
    else:
        print("No changes were made.")

# Set content directories
content_dir = "content/"
pages_dir = "pages/"

# Process markdown files
process_files(content_dir, pages_dir)

print("Processing complete.")
