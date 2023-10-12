const os = require("os");

// platform
console.log(os.platform()); // darwin || win32

// Arch
console.log(os.arch()); // arm64 || x64

// CPU Core
console.log(os.cpus()); // about laptop processor

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Uptime
console.log(os.uptime());
