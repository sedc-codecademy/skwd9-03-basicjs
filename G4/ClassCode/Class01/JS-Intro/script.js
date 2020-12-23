// alert("Hello from external JS file!");
console.log("Hello from console!");

// VARIABLES
console.log("---------- Variables ----------");
// declaration
var trainer;

// initialization
trainer = "Kristina";

// 100 lines later
trainer = "Dejan";

// Declaration and initialization
var assistant = 'Natasha \nPaneva         ----';

// First declare, then initialize!

console.log(trainer);
console.log(assistant);

// undefined vs. null
console.log("---------- undefined vs null ----------");

var testvar01;
console.log(testvar01);

testvar01 = 1;
// undefined - the variables does NOT have any value yet

var testvar02;
testvar02 = null;
console.log(testvar02);
// null - we deliberately put null as value
testvar02 = 2;
console.log(testvar02);

// naming convention types
// camel case: userInputNumber  -> we use this for variables in JS
// pascal case: UserInputNumber
// kebab-case: user-input-number

// equality in JS
console.log("---------- equality in JS ----------");
//  = assigning value to a variable
var three = 3;

// == checks if sides are equal by value only
console.log(5 == '5') // true

// === checksif sides are equal by value and type
console.log(5 === '5') // false

console.log(4 !== 1);


var boolExample = true;

console.log("---------- assignment operators ----------");
var a = 1;
var b = 5;
a += b; // a = a + b
console.log(a)

// Exercise 3

var feet = 100;
var feetToMeters = feet * 0.3048;
console.log(feet + " feet are equal to " + feetToMeters + " meters.");

// Exercise 4
var sideA = 15;
var sideB = 6;
var area = sideA * sideB;
console.log("Rectangle are is: " + area + " m2.");

// Exercise 5
var radius = 10;
var areaCircle = (radius * radius) * Math.PI;
console.log("Circle surface area is: " + areaCircle + " m2.");
