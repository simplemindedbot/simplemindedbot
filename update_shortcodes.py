import os
import re

def update_shortcode(content):
    # Regular expression to match the old Hugo shortcode
    pattern = r'\{\{<\s*responsive-image\s+src="([^"]+)"\s+alt="([^"]+)"\s*>\}\}'
    
    # Replacement function
    def replace(match):
        src = match.group(1)
        alt = match.group(2)
        # Add 'images/' to the src path if it's not already there
        if not src.startswith('images/'):
            src = f'images/{src}'
        return f'{{{{ responsive_image(src="{src}", alt="{alt}") }}}}'
    
    # Replace all occurrences of the old shortcode with the new one
    updated_content = re.sub(pattern, replace, content)
    return updated_content

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    updated_content = update_shortcode(content)
    
    if content != updated_content:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print(f"Updated: {file_path}")

def process_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                process_file(file_path)

# Run the script
if __name__ == "__main__":
    content_dir = 'content'
    process_directory(content_dir)
    print("Shortcode update complete.")
