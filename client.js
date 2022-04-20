// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(message);
  });

  conn.on("connect", () => {
    // message when connect to server
    console.log("Succesfully connected to game server");
    // name for snake
    conn.write("Name: BN");
  });

  /*
  Move up as soon as connected to server
  conn.on("connect", () => {
    conn.write("Move: up");
  });
  */

  return conn;
};

// Export

module.exports = { connect };
