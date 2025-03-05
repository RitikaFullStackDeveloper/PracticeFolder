function myFunction(a, b) {
    let x = a.split(""); // Split the string into an array
    let y = x.reverse(); // Reverse the array
    let z = y.join("");  // Join the array back into a string
    console.log(z);      // Log the reversed string
    if (b) {             // Check if the second argument is a function
        b(z);            // Call the function `b` with the reversed string `z`
    }
}

function ritz(z) {
    let a = 100;
    let b = 200;
    console.log("The value of z is " + z);
}

myFunction("ritu", ritz); // Call `myFunction` with "ritu" and the `ritz` function



// function callbackFunction(x){
// x(100)
// }

// callbackFunction((y)=>{
//     console.log(y);

// })