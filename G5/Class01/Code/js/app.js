// alert("Hello! This is my first alert!");

// console.log("Hello from JavaScript!");


// ************************ VARIABLES - DECLARATION AND INITIALIZATION *******************************

let randomNumber;
randomNumber = 15;

let myName = "Martin";
let secondName = 'Angela'; // string variables can be stored in single quotations as well!
let someSentence = "Hello! I am learning JS!\n And it is really awesome!";


let number1 = 5;
let number2 = 10;

let notDefined;

let isRaining = false;
let nullValue = null;


console.log(secondName);
console.log(myName);
console.log(number1);
console.log(someSentence);
console.log(notDefined);

console.log("----------------------------------------------");

// ************************ VARIABLE TYPES *******************************

// Multiple line comment
/*
console.log(typeof randomNumber);
console.log(typeof myName);
console.log(typeof isRaining);
console.log(typeof notDefined);
console.log(typeof nullValue);
*/

//Pascal case naming convention
let PascalCaseNotation;

//Kebab notation
let my_first_variable = 10;


// Cannot declare a variable name by using keyword from the language itself
// let break = "test";


// ************************ ARITHMETIC OPERATORS **************************
console.log("---------------------- ARITHMETIC OPERATORS ------------------------");

//BAD PRACTICE
// console.log(3 + 2);


let num1 = 50;
let num2 = 25;
let num3 = 25.5;

let addition = num1 + num2;
console.log(addition);

let subtraction = num2 - num3;
console.log(subtraction);

let multiplication = num2 * num3;
console.log(multiplication);

let division = num1 / num2;
console.log(division);

let remainder1 = num1 % num2;
console.log("Reminder 1 ", remainder1);

let remainder2 = num1 % num3;
console.log("Reminder 2 ", remainder2);

let a = 10;
a++;
console.log(a);
a--;
console.log(a);

a += num1;
console.log(a);


let isGreaterThan = num1 > num2;
let isEqualWith = num1 == num2;

console.log(isGreaterThan);
console.log(isEqualWith);



// Class exercise #1

let feetValue = 328;
let conversionRate = 0.3048;
let metersValue = 100;

let feetToMeter = feetValue * conversionRate;
let meetersToFeet = metersValue / conversionRate;

console.log("Feet to meter ", feetToMeter);
console.log("Meters to feet ", meetersToFeet);

