const fs = require('fs');
const path = require('path');

function extractFrontmatter(content) {
    if (content.startsWith('+++')) {
        const parts = content.slice(3).split('+++', 2);
        if (parts.length >= 2) {
            return [parts[0].trim(), parts[1].trim()];
        }
    }
    return [null, content];
}

function parseFrontmatter(frontmatter) {
    const result = {};
    let currentSection = result;
    
    frontmatter.split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;
        
        // Handle section headers [section] or [section.subsection]
        if (line.startsWith('[') && line.endsWith(']')) {
            const sectionName = line.slice(1, -1);
            if (sectionName.includes('.')) {
                const sections = sectionName.split('.');
                currentSection = result;
                sections.forEach(section => {
                    currentSection[section] = currentSection[section] || {};
                    currentSection = currentSection[section];
                });
            } else {
                result[sectionName] = result[sectionName] || {};
                currentSection = result[sectionName];
            }
            return;
        }
        
        // Handle key-value pairs
        if (line.includes('=')) {
            const [key, value] = line.split('=').map(s => s.trim());
            
            // Handle arrays
            if (value.startsWith('[') && value.endsWith(']')) {
                currentSection[key] = value.slice(1, -1)
                    .split(',')
                    .map(v => v.trim().replace(/^"(.*)"$/, '$1'))
                    .filter(Boolean);
            } else {
                // Preserve original value format
                currentSection[key] = value;
            }
        }
    });
    
    return result;
}

function generateFrontmatter(data, originalFrontmatter) {
    const lines = ['+++'];
    const originalLines = originalFrontmatter.split('\n');
    let inTaxonomies = false;
    let skipLine = false;
    
    // Process the original frontmatter line by line
    originalLines.forEach(line => {
        line = line.trim();
        
        // Skip the opening and closing +++
        if (line === '+++') return;
        
        if (!line) {
            lines.push('');
            return;
        }
        
        // Check if we're entering or leaving the taxonomies section
        if (line === '[taxonomies]') {
            inTaxonomies = true;
            lines.push(line);
            
            // Add our modified taxonomies
            if (data.taxonomies) {
                if (data.taxonomies.series) {
                    // Remove any existing quotes before adding new ones
                    const cleanSeries = data.taxonomies.series.map(s => s.replace(/^"(.*)"$/, '$1'));
                    lines.push(`series = [${cleanSeries.map(s => `"${s}"`).join(', ')}]`);
                }
                if (data.taxonomies.tags) {
                    // Remove any existing quotes before adding new ones
                    const cleanTags = data.taxonomies.tags.map(t => t.replace(/^"(.*)"$/, '$1'));
                    lines.push(`tags = [${cleanTags.map(t => `"${t}"`).join(', ')}]`);
                }
            }
            skipLine = true;
            return;
        }
        
        // Check if we're leaving a section
        if (line.startsWith('[') && inTaxonomies) {
            inTaxonomies = false;
        }
        
        // Skip original taxonomy lines but keep everything else
        if (!inTaxonomies && !skipLine) {
            lines.push(line);
        }
        skipLine = false;
    });
    
    // Add the closing +++
    lines.push('+++');
    
    return lines.join('\n');
}

function processFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const [frontmatter, body] = extractFrontmatter(content);
    
    if (!frontmatter) {
        console.log(`No frontmatter found in ${filepath}`);
        return;
    }
    
    const data = parseFrontmatter(frontmatter);
    
    // Check for series in extra
    if (data.extra?.series) {
        const seriesName = data.extra.series.replace(/^"(.*)"$/, '$1');
        let modified = false;
        
        // Ensure taxonomies section exists
        data.taxonomies = data.taxonomies || {};
        
        // Check and add series to taxonomies.series if needed
        if (!data.taxonomies.series) {
            data.taxonomies.series = [seriesName];
            modified = true;
            console.log(`Added series "${seriesName}" to ${filepath}`);
        } else {
            // Clean existing series values of quotes for comparison
            const cleanExistingSeries = data.taxonomies.series.map(s => s.replace(/^"(.*)"$/, '$1'));
            if (!cleanExistingSeries.includes(seriesName)) {
                data.taxonomies.series = [...cleanExistingSeries, seriesName];
                modified = true;
                console.log(`Added series "${seriesName}" to ${filepath}`);
            }
        }
        
        // Check and add series to taxonomies.tags if needed
        if (!data.taxonomies.tags) {
            data.taxonomies.tags = [seriesName];
            modified = true;
            console.log(`Added tag "${seriesName}" to ${filepath}`);
        } else {
            // Clean existing tags values of quotes for comparison
            const cleanExistingTags = data.taxonomies.tags.map(t => t.replace(/^"(.*)"$/, '$1'));
            if (!cleanExistingTags.includes(seriesName)) {
                data.taxonomies.tags = [...cleanExistingTags, seriesName];
                modified = true;
                console.log(`Added tag "${seriesName}" to ${filepath}`);
            }
        }
        
        if (modified) {
            // Generate new frontmatter preserving original formats
            const newFrontmatter = generateFrontmatter(data, frontmatter);
            fs.writeFileSync(filepath, `${newFrontmatter}\n\n${body}`);
            console.log(`Updated ${filepath}`);
        } else {
            console.log(`No changes needed for ${filepath}`);
        }
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        
        if (stat.isDirectory()) {
            processDirectory(filepath);
        } else if (file.endsWith('.md')) {
            processFile(filepath);
        }
    });
}

// Main execution
const contentDir = path.join(__dirname, '..', 'content');
if (!fs.existsSync(contentDir)) {
    console.error('Error: content directory not found');
    process.exit(1);
}

processDirectory(contentDir);
