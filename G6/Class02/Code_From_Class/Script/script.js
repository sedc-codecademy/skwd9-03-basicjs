
// concatanation example 1
let fullName = "Gordon" + " " + "Jovanovski";

// concatanation example 2
let fullName1 = "Goce " + "Kabov";

// concatanation example 3

// let firstName = "Goce";
// let secondName = "Kabov";
// let fullName2 = firstName + " " + secondName;

// concatanation example 4
let number = 40;
let street = "some street";
let address = street + ", number: " + number;

// interpolation

let age = 40;
let firstName = "Gordon";
let lastName = "Jovanovski";

let personInfo = `Person ${firstName} ${lastName} is ${age} years old`;

// NAN examples

let result = "4gsaf" - 4; // NaN
let result1 = "string" / 2; // NaN
let result3 = null * 20; // 0

//infinity

let result4 = 2 / 0; // infinity
let result5 = Infinity; // infinity

let result6 = -2/0 // -infinity
let result7 = -Infinity; // -infinity



// console.log(typeof(result1)) => number
let isNan = isNaN(result1);
let checkIsNan = Number.isNaN(result1) // type of result1 === number, isNan()
//console.log(checkIsNan);

// Logical && (AND) operator
let something = "";
let something1 = 20;

let resultFromSomething = something && something1;
// console.log(resultFromSomething);

// Logical OR || operator
let expresion1 = true;
let expression2 = null;

let resultFromExpresion = expresion1 || expression2;
// console.log(resultFromExpresion);

// Logical ! Not operator

let value = "a";
let value1 = !value;
console.log(value1)

