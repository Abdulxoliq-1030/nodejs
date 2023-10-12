const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Logging`, data);
});

logger.log("GET", "/admin/dashboard");
logger.log("POST", "/product/add");
logger.log("DELETE", "/users/23456");
