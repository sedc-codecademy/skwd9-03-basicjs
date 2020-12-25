// [C++, C#, Java etc]
// They work like this (Statically typed languages, data types must be declared)
// var myNumber int = 5;

// Javascript works like this (Dynamically typed language, data type is inferred from useage)
// let myMymber = 5;
// Javascript doesn't need to know the type of the
// variable

console.log("Hello, World!");
// alert("Hello from the alert!");
// confirm('Would you like to continue?');

console.log("");
console.log("~~~~~[[Variables]]~~~~~");

// [Variables]
// let is used for variable data
let pi = 3.141592653589793;
console.log(typeof pi);

// Declaration
let number;

// Initialization
number = 5;
console.log(number);

// Declaration & Initialization
let myVariable = 5;

console.log("");
console.log("~~~~~[[Rules]]~~~~~");
// [Rules]
let myAuth = "Test!";
let _auth = "Authentication";

// Case Sensitive, capital letters matter
// myvar != myVar -- these are NOT equal

// [Variable Scope LOCAL vs GLOBAL]
// Variables declared inside a function cannot be used outside the function
// [Don't worry about this too much right now!]
function myfunc() {
  // stuff happens here
  let funcvar = "my func var";
}
console.log(
  "funcvar is undefined because it is declared within a function, but we are trying to log it outside of that function!"
);
// console.log(funcvar); // This is undefined!

console.log("");
console.log("~~~~~[[Primitive Data Types]]~~~~~");
// [Primitive Data Types]
// Strings
let myString = "Just a string!";
console.log(myString);
console.log(typeof myString);

// Number
let intNum = 17;
let decNum = 10.13;
console.log(intNum, decNum);

// Undefined
let undefVar;
console.log(undefVar);
console.log(typeof undefVar);

// Boolean
let yesVal = true;
let noVal = false;

console.log(yesVal, noVal);
console.log(typeof yesVal, typeof noVal);

// NULL
let nonValueVar = null;
console.log(nonValueVar, typeof nonValueVar);

// New line character

let myNewText = "This is my text.\n This is a text in a new line.";
console.log(myNewText);

// [Operators]
console.log("");
console.log("~~~~~[[Operators]]~~~~~");

// [Arithmetic]
console.log("");
console.log("~~~~~[[Arithmetic]]~~~~~");

let firstNumber = 17;
let secondNumber = 7;

let result;
result = firstNumber + secondNumber;
console.log("Sum:", result);
result = firstNumber - secondNumber;
console.log("Subtract:", result);

// [Divison]
let divResult = firstNumber / secondNumber;
console.log("Division:", divResult);

// [Modulus]
// Useful when you want to check whether a
// number is even or odd
let modResult = firstNumber % secondNumber;
console.log("Modulus:", modResult);

let incVar = 5;
console.log("This is pre-increment:", incVar);
incVar++;
incVar++;
incVar++;
console.log("This is post-increment:", incVar);

// [Comparison]
console.log("");
console.log("~~~~[[Comparison]]~~~~~");

let comparisonResult = firstNumber > secondNumber;
console.log(comparisonResult);

// [Comparison is weird]
console.log("");
console.log("~~~~[[Comparison is weird]]~~~~~");
let exampleNumber = 22;
let anotherExample = "22";
let compared = exampleNumber == anotherExample;
let typeCompared = exampleNumber === anotherExample;

console.log(compared);
console.log(typeCompared);

// [Assignment operators]
console.log("");
console.log("~~~~[[Assignment]]~~~~~");
let firstAssign = 13;
let secondAssign = 9;

console.log("first assign:", firstAssign);
firstAssign += secondAssign;
console.log("first assign:", firstAssign);

/* 

DONT DO IT LIKE THIS
let br1 = 5, br2 = 7, br3 = 17;
 
DO IT LIKE THIS
let br1 = 5; 
let br2 = 7; 
let br3 = 17;
*/
console.log("");
console.log("~~~~[[Example Exercise]]~~~~~");
let feetValue = 3;
let feetToMeter = 0.3048;

// Prompt can be used to input values.
// let promptInput = prompt("Please enter a number!");
let meterValue = feetValue * feetToMeter;

console.log("Meter Value: ", meterValue);
