//import UIKit
//////
////var greeting = "Hiii"
//let a = 10;
//let b = 20;
//print("hello world",a);
//print(a+b);
//print(a-b);
//print(a*b);
//print(a/b);
//
//var string = "hello world"
//var name = "ritika "
//var profession = "full stack developer "
////print(string)
//print(name,profession)

//var string = "ritu"
//print(string.uppercased())
//print(String(string.reversed()))

//var a = 10;
//var b = 20;
//print(a>b);

//print("enter a number :")
//if let input = readLine(),let number = Int(input){
//    print("you entered a number is \(number)")
//}

//import Foundation  // Ensures String formatting functions are available
//
//let radius: Double = 5.0  // Correct type
//let area = 3.14 * radius * radius  // Calculate area
//
//// Correct way to format the output
//print("Area of circle: \(String(format: "%.2f", area))")

//print("Enter a number:") 
//let radius: Double = 5.0
//let area = 3.14 * radius * radius
//
//print("Area of circle: \(area)")  // Prints full precision


// new
//let a = 10
//let b = 20
//let greaterThan = a > b  // This checks if 'a' is greater than 'b'
//
//print("Is", a, "greater than", b, "?", greaterThan)

//var name = "Ritika"
//var age = 25
//print(name , age)
//print(age)
//
//
//print("Enter your name:")
//if let name = readLine(){
//    print("Hello",(name))
//}

import Foundation

print("Enter your first name: ", terminator: "")
let firstName = readLine() ?? ""

print("Enter your last name: ", terminator: "")
let lastName = readLine() ?? ""

print("Your name is \(firstName) \(lastName)")
