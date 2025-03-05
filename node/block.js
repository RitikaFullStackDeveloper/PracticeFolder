const fs = require('fs');
console.log("step one....");

// Blocking code -sync code
const data = fs.readFileSync("demo.txt");
console.log(data.toString());

// // Non blocking code -asynk code
// fs.readFile("demo.text", function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// create a text file and write some text in it
fs.writeFile("demo1.text", "By understanding the fundamentals of HTTP messages, you can effectively interact with web servers and build robust web applications.Sources and related content",() => {
    console.log("file creating...");
});

// read the text file
const data1 = fs.readFileSync("demo1.text");
console.log(data.toString());

// fs.readFile("demo1.text", function (err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });




