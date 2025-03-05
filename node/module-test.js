function add(a,b){
    console.log(a+b);
    return 1;
}

function sub(a,b){
    console.log(a-b);
    return 2;
}


function sayhello(){
    console.log("hello");
    return 9;
}
function studentHandler(request, res){
     
        res.setHeader("Content-Type", "text/html");
        if(request.url ==="/students") {
         res.write("<html>");
         res. write ("<head><title>students</title></head>")
         res. write ("<h2>Students Name</h2>")
         res.write( "<ul><li>Ritika</li><li>Aadhya</li><li>Navya</li></ul>" );
         res.write("</html>")
         return res;
        }
     
     
     else{
         res.setHeader("Content-Type", "text/html");
         if(request.url ==="/form") {
             res.write("<html>");
             res. write ("<head><title>form</title></head>")
             res. write ("<h2>User Detail</h2>")
             res.write("<input type='text' placeholder='Enter your name'/>");
             res.write("<input type='password' placeholder='Enter your password'/>");
             res.write("<button type='button' style='color:#6256CA; width=25px '>Submit</button>");
             res.write("</html>")
             res.write("</form>")
             return res;
            }
     }
     
     
     
}
module.exports ={
    add,
    sub,
    sayhello,
    studentHandler
};