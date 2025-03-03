const http = require('http');
//whane we create a server we need to create a request and a response
//req comes from the client and res is the response we send back to the client
const server = http.createServer((req, res) => {
    // Set the status code to 200 (OK)
  res.statusCode = 200;

  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!');
});

server.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
});