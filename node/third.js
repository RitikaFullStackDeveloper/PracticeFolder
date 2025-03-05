function twonumberArithmatic(x, y, action){
    if (action == "add") {
        return x + y;
    } else if(action == "sub"){
        return x - y;
    }else if (action == "div") {
        return x / y;
    } else if(action == "mult"){
        return x * y;
    }
}
let z = twonumberArithmatic(2, 10, "mult");
console.log("the value of z " + z);