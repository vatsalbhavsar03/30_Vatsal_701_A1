const fs = require('fs');
const unzipper = require('unzipper');
const path = require('path');

function unzipFile(zipFilePath, outputDir) {
  fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: outputDir }))
    .on('close', () => {
      console.log(` Extraction complete! Files extracted to: ${outputDir}`);
    })
    .on('error', (err) => {
      console.error('Error during extraction:', err);
    });
}

const zipPath = path.join(__dirname, 'public.zip');   
const extractTo = path.join(__dirname, 'public'); 

unzipFile(zipPath, extractTo);
