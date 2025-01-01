const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }).catch(error => {
    // Error handling is missing, so the server crashes
    console.error('An error occurred:', error);
    // No response sent to the client
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail randomly
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Success';
}