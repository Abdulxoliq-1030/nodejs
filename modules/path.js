const path = require("path");

// Basename  (this return filename)
console.log(path.basename(__filename)); // path.js

// Foldername  (this return until file way)
console.log(path.dirname(__filename)); // /Users/abdulxoliqodiljonov/Desktop/nodejs/modules

// Extname (this return extension name)
console.log(path.extname(__filename)); // .js

// Parse (this return below all of them)
const pathObj = path.parse(__filename); // return object
console.log(pathObj);

// String concat
// database/mongodb/db.js
console.log(path.join(__dirname, "database", "mongodb", "db.js"));
