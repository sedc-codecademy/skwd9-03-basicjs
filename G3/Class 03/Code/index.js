// let numberInserted = prompt("Insert a number", "Default string");
// let numberConverted = Number(numberInserted);

// console.error(numberConverted);

// Switch
// Simple switch statement
// switch (numberConverted) {
//     case 1:
//         console.error("1");
//         break;
//     case 2:
//         console.error("2");
//         break;
//     case 3:
//         console.error("3");
//         break;
//     default:
//         console.error("No matching case scenario value");
//         break;
// }

// Multiple same case scenarios (switch statement)
// switch (numberConverted) {
//     case 1:
//     case 2:
//         console.error("1 or 2");
//         break;
//     case 3:
//         console.error("3");
//         break;
//     default:
//         console.error("No matching case scenario value");
//         break; 
// }

// Functions
// Regular function
function squareNum(x) {
    console.error("This is the result from regular function", x * x);
}

// Arrow function
const squareNumArrowFunction = (x) => {
    console.error("This is the result from arrow function", x * x);
}

// Arrow function in one line
const sumOfXandYOneLineArrowFunction = (x, y) => console.error("This is one line arrow function result", x * y);

// squareNum(5);
// squareNumArrowFunction(10);
// sumOfXandYOneLineArrowFunction(5, 8);

// How to debug? TRY THIS AT HOME!!!
function sum(x, y) {
    debugger; // Key word to stop when the function is call
    let result = x + y;
    return result;
}

// let sum1 = sum(23, 23);
// console.error("First sum", sum1);

// let sum2 = sum(15, 35);
// console.error("Second sum", sum2);

// let sum3 = sum(567, 123213);
// console.error("Third sum", sum3);

// F8 - Resume with execution of the script (until next debugger; or brakepoint)
// F10 - Step over line and execute the line
// F11 - Step into the function

// Different call to the function
// let withOneLessArgument = sum(2);
// console.error("Call of the .sum() with one less parametar result", withOneLessArgument);

// let withOneMoreArgument = sum(2, 2, 10);
// console.error("Call of the .sum() with one or many parametars result", withOneMoreArgument);

// Predefind value
function printMessage(message = "SEDC 2021 - G3") {
    document.write(message);
}

// printMessage();
// printMessage("This will be the result");

// Scope
let globalVariable = 10;

function doSomething() {
    let localVariable = 50;

    console.error("Inisde .doSomething() globalVariable - ", globalVariable);
    console.error("Inside .doSomething localVariable - ", localVariable);

    globalVariable = 100;
    console.error("Inisde .doSomething() globalVariable after change of the value - ", globalVariable);
}

// doSomething();
// console.error("Outside .doSomething() globalVariable - ", globalVariable);
// console.error("Outside .doSomething localVariable - ", localVariable);

// Fastest results without and with functions
let insertedCNumber = Number(prompt("Insert C number"));
console.error(insertedCNumber*1.8 + 32);

let insertedFNumber = Number(prompt("Insert F number"));
console.error((5/9)*(insertedFNumber-32));

function CtoF (insertedCNumber) {
    return console.error(insertedCNumber*1.8 + 32);
}

CtoF(insertedCNumber);

const FtoC = insertedFNumber => console.error((5/9)*(insertedFNumber-32));

FtoC(insertedFNumber);