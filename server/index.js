const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const routes = require('./src/routes');

app.use('/', routes);

server.listen(3000, () => {
  console.log('listening on *:3000');
});