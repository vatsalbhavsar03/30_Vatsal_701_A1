// zipFolder.js

const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

function zipDirectory(sourceDir, outPath) {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', {
    zlib: { level: 9 }, // Maximum compression
  });

  output.on('close', () => {
    console.log(`✅ Zipped ${archive.pointer()} total bytes`);
    console.log(`✅ Zip file created at ${outPath}`);
  });

  archive.on('error', err => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(sourceDir, false); // false = no root folder inside zip
  archive.finalize();
}

// Example: Zip the "my-folder" directory into "my-folder.zip"
const sourceFolder = path.join(__dirname, 'public'); // change to your folder
const outputZip = path.join(__dirname, 'my-folder.zip');

zipDirectory(sourceFolder, outputZip);
