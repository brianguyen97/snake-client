// Stores the active TCP connection object.
let connection;

// constants
const {
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  messages,
} = require("./constants");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (messages[key]) {
    connection.write(`Say: ${messages[key]}`);
  }
  if (key === "w") {
    connection.write(MOVE_UP);
  }
  if (key === "a") {
    connection.write(MOVE_LEFT);
  }
  if (key === "s") {
    connection.write(MOVE_DOWN);
  }
  if (key === "d") {
    connection.write(MOVE_RIGHT);
  }
};

module.exports = { setupInput };
