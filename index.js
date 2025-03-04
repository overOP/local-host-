const http = require('http');
//whane we create a server we need to create a request and a response
//req comes from the client and res is the response we send back to the client
const server = http.createServer((req, res) => {
    // status code is a code that tells the client what is the status of the request
    // set the status code to 100 (informational)
    // Set the status code to 200 (OK)
    // set the status code to 300 (Redirection)
    // set the status code to 400 (Client error)
    // set the status code to 500 (Server error)
  res.statusCode = 200;

  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!');
});

server.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
});