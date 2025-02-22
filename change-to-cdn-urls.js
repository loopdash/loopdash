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

    // Replace all image URLs in src attributes (relative and absolute paths)
    const srcRegex = /(src)=\"(["']?)(\/[^"'>]+\.(png|jpg|jpeg|gif|svg|webp|avif))\2/g;
    content = content.replace(srcRegex, (match, attr, quote, url) => {
        const newUrl = `${CDN_BASE}${url}`;
        return `${attr}=${quote}${newUrl}${quote}`;
    });

    // Replace all image URLs in srcset attributes (relative and absolute paths)
    const srcsetRegex = /(srcset)=\"([^"']+)\"/g;
    content = content.replace(srcsetRegex, (match, attr, urls) => {
        const newUrls = urls
            .split(',')
            .map(url => url.trim().replace(/^(\/[^"'>]+)/, `${CDN_BASE}$1`))
            .join(', ');
        return `${attr}="${newUrls}"`;
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
