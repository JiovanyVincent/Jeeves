const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const routes = require('./src/routes');
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

app.use('/', routes);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on('chat-message', msg => {
    console.log(msg);
  })
//  socket.on('chat message', (author, msg) => {
//   io.emit('chat message', author, msg);
//  });
});

io.listen(3000, () => {
  console.log('listening on *:3000');
});