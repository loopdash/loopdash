import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, '_site');
const CDN_BASE = 'https://cdn.loopdash.com';
const FILE_EXTENSIONS = ['.html', '.js'];

function replaceUrlsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace only image URLs in src attributes pointing to relative paths
    const regex = /(src)=["'](\.\.\/[^"']+\.(png|jpg|jpeg|gif|svg|webp))["']/g;
    content = content.replace(regex, (match, attr, url) => {
        // Normalize URL
        const newUrl = `${CDN_BASE}${url.replace(/^\.\.\//, '/')}`;
        return `${attr}="${newUrl}"`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
}

function traverseDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else if (FILE_EXTENSIONS.includes(path.extname(fullPath))) {
            replaceUrlsInFile(fullPath);
        }
    });
}

traverseDirectory(BASE_DIR);
console.log('URL replacement complete.');