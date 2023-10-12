const EventEmitter = require("events");

// EventEmitterdan meros olish
class NewEmitter extends EventEmitter {}

// instance object
const newEmitter = new NewEmitter();

// Event Listener
newEmitter.on("hello", () => {
  console.log("Hello world");
});

// Receive
newEmitter.emit("hello");
