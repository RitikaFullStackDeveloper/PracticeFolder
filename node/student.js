const { write } = require("fs");
const http = require("http");
const {studentHandler} = require("./module-test")

const server = http.createServer(studentHandler);
const address = "127.0.0.1";
const port = 60000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});