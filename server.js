// const http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);
// console.log('Server running at http://127.0.0.1:8081/');


// const http = require('http')
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'text/plain' })
//     res.end('Fine server!')
// }).listen(5000)
// console.log('Server running on 5000')




class Database {
    constructor() {
        if (!Database.instance) {
            console.log("Naya Database connection banaya");
            this.connection = "connected"
            Database.instance = this
        }
        return Database.instance
    }
}

const db1 = new Database()
const db2 = new Database()

console.log(db1)
console.log(db1 == db2)