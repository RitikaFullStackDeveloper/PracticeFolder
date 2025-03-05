const http = require("http");

const server = http.createServer((req, res)=>{

    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write("<html>");
    
    res. write ( <input type="text" id="name" placeholder="first name"/>)
   res.write(<button type="button">submit</button>)


res.write("</html>")
return res;
res.end();
})

const address = "127.0.0.1";
const port = 60000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});