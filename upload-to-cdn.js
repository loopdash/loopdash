import 'dotenv/config'; // Load .env variables
import fs from 'fs';
import path from 'path';
import { S3 } from '@aws-sdk/client-s3';

// Load environment variables
const { R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET, R2_ENDPOINT } = process.env;

if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET || !R2_ENDPOINT) {
    console.error("❌ Missing R2 credentials in .env");
    process.exit(1);
}

// Configure AWS SDK for Cloudflare R2
const s3 = new S3({
    region: 'auto', // R2 does not use traditional AWS regions
    endpoint: R2_ENDPOINT,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

// Function to upload a file
const uploadFile = async (filePath, remotePath) => {
    const fileStream = fs.createReadStream(filePath);
    const params = {
        Bucket: R2_BUCKET,
        Key: remotePath,
        Body: fileStream,
        ACL: 'public-read',
    };

    try {
        await s3.putObject(params);
        console.log(`✅ Uploaded: ${remotePath}`);
    } catch (error) {
        console.error(`❌ Error uploading ${remotePath}:`, error);
    }
};

// Function to upload all files from a directory
const uploadDirectory = async (localDir, remoteDir) => {
    if (!fs.existsSync(localDir)) {
        console.warn(`⚠️ Directory not found: ${localDir}, skipping...`);
        return;
    }

    const files = fs.readdirSync(localDir);
    for (const file of files) {
        const localPath = path.join(localDir, file);
        const remotePath = `${remoteDir}/${file}`;
        if (fs.lstatSync(localPath).isFile()) {
            console.log(`📤 Uploading: ${remotePath}`);
            await uploadFile(localPath, remotePath);
        }
    }
};

// Main function to sync assets
const syncAssets = async () => {
    console.log("🚀 Uploading assets to Cloudflare R2...");

    await uploadDirectory(path.join(process.cwd(), '_site', 'img'), 'img');
    // await uploadDirectory(path.join(process.cwd(), '_site', 'video'), 'video');

    console.log("🎉 All assets uploaded successfully!");
};

// Run the sync process
syncAssets().catch(err => console.error("❌ Upload failed:", err));
