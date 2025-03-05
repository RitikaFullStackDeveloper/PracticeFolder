// const { write } = require("fs");
const http = require("http");
// const { format } = require("path");

const server = http.createServer((request, res) => {
    res.setHeader("Content-Type", "text/html");
    if(request.url ==="/iframe") {
     res.write("<html>");
     res. write ("<head><title>form</title></head>")
     res. write (" <iframe src='https://en.wikipedia.org/wiki/Shivaji' height='700' width='100%'></iframe></iframe>")
     res.write("</html>")
     return res;
    }
    
 else if(request.url === "/create-student" && request.method === "post"){
    let body = "";
    request.on("data",(chunk)=>{
        body = body + chunk.toString();
        console.log(body);
    });
    request.on("end",()=>{
        body = body + chunk.toString();
        console.log(body);
    });
    request.on("error",(err)=>{});
      
}else{
    res.write("<html>");
    res. write ("<head><title>students</title></head>")
    res. write ("<h2>404</h2>")
    res.write("</html>")
    return res;
   
}

    
})
const address = "127.0.0.1";
const port = 60000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});