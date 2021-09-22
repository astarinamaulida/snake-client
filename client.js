// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const name = 'Name: Astalavistabeybeh'
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.write(`${name}`);

  conn.on("connect", () => {
    console.log('You are connected! Enjoy the game!')
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  });

  conn.on('end', () => {
    console.log('disconnected from server');
  });

  return conn;
};

module.exports = connect;