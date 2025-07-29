const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filepath) {
  try {
    await unlinkAsync(filepath);
    console.log(`Successfully Deleted: ${filepath}`);
  } catch (err) {
    console.log(`Error Deleting File: ${err.message}`);
  }
}

deleteFile('temp.html');
