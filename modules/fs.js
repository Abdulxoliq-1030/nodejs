const fs = require("fs");
const path = require("path");

// Create Folder
// fs.mkdir(path.join(__dirname, "/folder"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// Create Folder
fs.writeFile(
  path.join(__dirname, "/folder", "new.js"),
  "console.log('Hello world');",
  (err) => {
    if (err) throw err;
    console.log("File created...");
  }
);

// fs.writeFile(
//   path.join(__dirname, "/folder", "new.js"),
//   "console.log('Hello worldlarsad')",
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// ); // if it is runned top text change at under text

// Add new content
fs.appendFile(
  path.join(__dirname, "/folder", "new.js"),
  " console.log('Hi barbie');",
  (err) => {
    if (err) throw err;
    console.log("File added..");
  }
); // add new content near to old content

// Read file
fs.readFile(path.join(__dirname, "/folder", "new.js"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.rename(
  path.join(__dirname, "/folder", "new.js"),
  path.join(__dirname, "/folder", "old.js"),
  (err) => {
    if (err) throw err;
  }
);
