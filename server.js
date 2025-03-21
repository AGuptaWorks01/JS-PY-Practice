// const http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');


const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Fine server!')
}).listen(5000)
console.log('Server running on 5000')




