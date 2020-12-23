console.log("Hello from SEDC");

//Variable declaration
var firstName;
//This displays undeined as data type in javascript because the variable is declared and not initialized
console.log(firstName);
//variable initialization
firstName = "Damjan";
console.log(firstName);
// Declaration and initialization
var lastName = "Stojanovski";
console.log(lastName);
console.log(firstName + ' ' + lastName);

var age = 28.0;
console.log("My name is " + firstName+' ' + lastName + ' ' + "and my age is " + age);

// Bad way to start declaration of a variable. Throws an errror! Variables must start with letter or _ or $
//var 3doorsDown;

//Age is different variable then age
var Age = 4;
console.log("*****************")
var car = 'Renault';
console.log(typeof(car));

// function getMiddleName(){
//     var middleName = "";
// };

//Throws an error: middleName is not defined. middleName is not global variable
//console.log(middleName);

var skill = null;
//NULL is always an object and is something. Undefined is nothing is not initialized.
console.log(typeof(skill));

var isAttentdingBasicJavaScript = true;
console.log(firstName + ' ' + lastName + " is " + isAttentdingBasicJavaScript + ' attending');

/*
null === undefined // false comparation value and type
null == undefined //  true  comparation just value
null === null // true 
*/

console.log(2 === "2"); // this returns false 
console.log(2 == "2"); // this returns true

var decimalNumber = 2.47;

//We can not use keywords for declaring variables
//var break = "break here";
//keywordsInCombination is ok
var breakMyCode = "";

var num1 = 10;
var num2 = 4;
console.log(num1 % num2);

//This is the same
/*
num1++;
num1 = num1 + 1;
*/
console.log(num1);


var result = num1 += num2;
console.log(result);

var feets = 478;
var feetsToMetersConstant = 0.3048;
var meters = feets * feetsToMetersConstant;
console.log("Total feets given "+ feets + " is equal to " + meters + "meters");


var sideA = 5;
var sideB = 7;

console.log("Area of the given rectangle is " + sideA*sideB);


var radius = 5;
var pi = 3.14159265359;

var area = pi * radius * radius;
console.log(area);