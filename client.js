// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const name = 'Name: AST'
  const up = "Move: up";
  const down = "Move: down";
  const left = "Move: left";
  const right = "Move: right";

  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.write(`${name}`);

  setInterval(() => { conn.write(`${up}`)}, 500);
  setInterval(() => { conn.write(`${down}`)}, 500);
  setInterval(() => { conn.write(`${left}`)}, 500);
  setInterval(() => { conn.write(`${right}`)}, 500);

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