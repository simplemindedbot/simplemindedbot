import os
import re
import toml
import shutil
from pathlib import Path

# Mapping of old tags to consolidated tags
TAG_MAPPING = {
    "acceptance criteria": "agile",
    "agentic": "AI",
    "AGI": "AI",
    "agile development": "agile",
    "agile frameworks": "agile",
    "artificial intelligence": "AI",
    "workplace AI": "AI",
    "AI alignment strategies": "AI",
    "AI Anthropologist": "AI in project management",
    "AI-assisted analysis": "AI",
    "AI bias reduction techniques": "AI ethics",
    "AI ethical impact assessment": "AI ethics",
    "AI ethical principles": "AI ethics",
    "AI fairness in decision-making": "AI ethics",
    "AI human rights compliance": "AI ethics",
    "AI in project management": "AI in project management",
    "AI-project-management": "AI in project management",
    "AI limitations": "AI",
    "AI risk mitigation strategies": "AI",
    "anomaly detection": "AI",
    "autonomous systems": "AI",
    "bias detection": "AI ethics",
    "chatgpt": "AI",
    "claude AI": "AI",
    "claude AI guidelines": "AI ethics",
    "collaboration": "team collaboration",
    "completeness checks": "quality assurance",
    "constitutional AI": "AI ethics",
    "critical evaluation": "strategic thinking",
    "decision-making": "strategic thinking",
    "deep learning": "machine learning",
    "definition of done": "agile",
    "digital transformation": "technology",
    "emotion detection": "AI",
    "emotion recognition": "AI",
    "ethical ai": "AI ethics",
    "ethical AI development": "AI ethics",
    "ethical hacking": "cybersecurity",
    "ethics": "AI ethics",
    "fact-checking": "quality assurance",
    "future of AI": "AI",
    "future of work": "workplace",
    "future trends": "technology",
    "goodput": "quality assurance",
    "hiring": "workplace",
    "HR": "workplace",
    "human-AI collaboration": "AI",
    "human-computer interaction": "AI",
    "LLMs": "machine learning",
    "media literacy": "quality assurance",
    "narrow AI": "AI",
    "organizational culture": "workplace",
    "remote collaboration": "team collaboration",
    "remote work": "workplace",
    "responsible AI": "AI ethics",
    "retrospectives": "agile",
    "strategic decision making": "strategic thinking",
    "tech trends": "technology",
    "threat detection": "cybersecurity",
    "turing test": "AI philosophy",
    "velocity": "agile",
    "work ethics": "workplace",
    "workplace culture": "workplace",
    "workplace dynamics": "workplace",
}

def parse_front_matter(content):
    """Extract and parse TOML front matter from Markdown content."""
    front_matter = re.match(r'\+\+\+\n(.*?)\n\+\+\+', content, re.DOTALL)
    if front_matter:
        return toml.loads(front_matter.group(1)), front_matter.span()
    else:
        raise ValueError("Invalid TOML front matter format.")

def update_tags(tags):
    """Update tags based on the mapping and return new tags list."""
    return list(set(TAG_MAPPING.get(tag, tag) for tag in tags))

def process_markdown_file(file_path):
    """Process a single markdown file to update tags in the front matter."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Parse TOML front matter
    front_matter, fm_span = parse_front_matter(content)
    old_tags = front_matter.get('taxonomies', {}).get('tags', [])
    new_tags = update_tags(old_tags)

    if old_tags == new_tags:
        print(f"No changes required in: {file_path}")
        return

    # Display proposed changes
    print(f"\nFile: {file_path}")
    print(f"Old tags: {old_tags}")
    print(f"New tags: {new_tags}")
    confirm = input("Proceed with changes to this file? (y/n): ").strip().lower()
    if confirm != 'y':
        print("Skipping changes for this file.")
        return

    # Backup the original file
    shutil.copy(file_path, f"{file_path}.bak")

    # Modify front matter with updated tags
    front_matter['taxonomies']['tags'] = new_tags
    updated_front_matter = toml.dumps(front_matter)

    # Replace front matter in content
    updated_content = f"+++\n{updated_front_matter}+++\n" + content[fm_span[1]:]

    # Write the modified content back to the file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print(f"Changes saved to: {file_path}")

def main(directory="."):
    """Process all markdown files in the specified directory."""
    directory = Path(directory)
    if not directory.is_dir():
        print(f"Error: {directory} is not a valid directory.")
        return

    for file_path in directory.glob("*.md"):
        try:
            process_markdown_file(file_path)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    import sys
    directory = sys.argv[1] if len(sys.argv) > 1 else "."
    main(directory)
