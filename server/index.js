const http = require('http');
const fs = require('fs');

const PORT = 3000;
const server = http.createServer();
server.on('request', (req, res) => {
  res.sendFile('../client/index.html');
});


server.listen(PORT);
console.log('Server started at port', PORT);
