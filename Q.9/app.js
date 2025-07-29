const fs = require("fs");
const fileName = "example.txt";

//1. Create :-
fs.writeFileSync(fileName, "Create a File \n", (err) => {
  if (err) {
    return console.error(`Error Writing a File:`, err);
  }
  console.log(`File Created Successfully`);

  //2. Read :-
  fs.readFileSync(fileName, "utf-8", (err, data) => {
    if (err) {
      return console.error(`Error for ReadFile:`, err);
    }
    console.log(`File :`, data);

    //3.Append :-
    fs.appendFile(fileName, "This is some appended text.\n", (err) => {
      if (err) {
        return console.error("Error appending file:", err);
      }
      console.log("Data appended.");

      // 4. Read again after append
      fs.readFile(fileName, 'utf8', (err, updatedData) => {
        if (err) {
          return console.error('Error reading file:', err);
        }
        console.log('Updated file :', updatedData);

         // 5. Delete the file
        fs.unlink(fileName, (err) => {
          if (err) {
            return console.error('Error deleting file:', err);
          }
          console.log('File deleted.');
        });
    })
    });
  });
});
