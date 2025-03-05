const arith = require("../node/module-test");
const http = require("http");

let x = 0
const server = http.createServer((req, res)=>{
    x+=1;

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<h1>hello world</h1>");
    res.write(`${x}`);
    res.end();
     console.log(
        arith.sayhello(),
        arith.add(1,2),
        arith.sub(1,2),

    );
})
server.listen(3100);

