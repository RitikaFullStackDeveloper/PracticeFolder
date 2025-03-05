// import http module
const ramu = require("http");

// create server 
let shamu = ramu.createServer((request, response) => {
    response.write("<h1>Hello World Node and HTML hjhuikghjkg</h1>");
    response.end();
});
// specify address and port 
const address = "127.0.0.1";
const port = 4000;

// listening to port
shamu.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});
