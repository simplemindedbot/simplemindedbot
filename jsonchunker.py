import json
import math

# Define the constant
max_words_per_chunk = 40000  # You can adjust this number based on your needs

def split_content_into_chunks(filename):
    with open(filename, 'r') as file:
        data = json.load(file)
        
        # Extract only the text parts from the JSON structure
        text_parts = []
        for item in data:
            for mapping in item.get('mapping', {}).values():
                message = mapping.get('message', {})
                if message and message.get('content', {}).get('content_type') == 'text':
                    parts = message.get('content', {}).get('parts', [])
                    text_parts.extend(parts)
        
        # Join all text parts and split into words
        all_words = ' '.join(text_parts).split()
        total_words = len(all_words)
    
    # Calculate number of chunks needed
    num_chunks = math.ceil(total_words / max_words_per_chunk)
    
    # Split into chunks
    chunks = []
    for i in range(num_chunks):
        start_idx = i * max_words_per_chunk
        end_idx = min((i + 1) * max_words_per_chunk, total_words)
        chunk = ' '.join(all_words[start_idx:end_idx])
        chunks.append(chunk)
        
        # Write chunk to file
        with open(f'chunk_{i+1}.txt', 'w', encoding='utf-8') as f:
            f.write(chunk)
    
    return chunks

# Usage
filename = 'conversations.json'
chunks = split_content_into_chunks(filename)
print(f"Split content into {len(chunks)} chunks")