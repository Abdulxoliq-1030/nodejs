const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.end("<h1> Page</h1>");
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
