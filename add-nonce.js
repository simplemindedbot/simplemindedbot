const fs = require('fs');
const path = require("path");

const nonce = '{{nonce}}'; // Placeholder for Netlify to replace
const directory = process.argv[2]; // Get the directory from the command-line arguments

if (!directory) {
  console.error('Please provide a directory to process.');
  process.exit(1);
}

function addNonceToFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add the nonce to <script> tags
    content = content.replace(/<script(.*?)>/g, `<script nonce="${nonce}"$1>`);
    
    // Add the nonce to <link> tags (stylesheets)
    content = content.replace(/<link(.*?)rel="stylesheet"(.*?)>/g, `<link nonce="${nonce}"$1rel="stylesheet"$2>`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
}

function processDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            processDirectory(fullPath); // Recursively process directories
        } else if (file.endsWith('.html')) {
            addNonceToFile(fullPath);
        }
    });
}

processDirectory(directory);
