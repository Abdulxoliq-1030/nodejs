const http = require("http");

const server = http
  .createServer((req, res) => res.end("Hello from nodejs"))
  .listen(4000);
