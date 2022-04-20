// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(message);
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: BN");
  });

  return conn;
};

module.exports = { connect };
