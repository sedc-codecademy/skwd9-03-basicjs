
// // concatanation example 1
// let fullName = "Gordon" + " " + "Jovanovski";

// // concatanation example 2
// let fullName1 = "Goce " + "Kabov";

// // concatanation example 3

// // let firstName = "Goce";
// // let secondName = "Kabov";
// // let fullName2 = firstName + " " + secondName;

// // concatanation example 4
// let number = 40;
// let street = "some street";
// let address = street + ", number: " + number;

// // interpolation

// let age = 40;
// let firstName = "Gordon";
// let lastName = "Jovanovski";

// let personInfo = `Person ${firstName} ${lastName} is ${age} years old`;

// // NAN examples

// //let result = "4gsaf" - 4; // NaN
// let result1 = "string" / 2; // NaN
// let result3 = null * 20; // 0

// //infinity

// let result4 = 2 / 0; // infinity
// let result5 = Infinity; // infinity

// let result6 = -2/0 // -infinity
// let result7 = -Infinity; // -infinity



// // console.log(typeof(result1)) => number
// let isNan = isNaN(result1);
// let checkIsNan = Number.isNaN(result1) // type of result1 === number, isNan()
// //console.log(checkIsNan);

// // Logical && (AND) operator
// let something = '';
// let something1 = '20';

// let resultFromSomething = something && something1;
// // console.log(resultFromSomething);

// // Logical OR || operator
// let expresion1 = true;
// let expression2 = null;

// let resultFromExpresion = expresion1 || expression2;
// // console.log(resultFromExpresion);

// // Logical ! Not operator

// let value = true;
// let value1 = !value;
// //console.log(value1)

// let evenOne = 20;
// let evenTwo = 18;

// let oddOne = 21;
// let oddTwo = 17;

// // Check if the sum of the even numbers is greater then the sum of the odd numbers

// // First solution

// let sumOfEvenNumbers = evenOne + evenTwo;
// let sumOfOddNumbers = oddOne + oddTwo;

// let result = sumOfEvenNumbers > sumOfOddNumbers; // 38 > 38

// // Second solution

// let result1 = (evenOne + evenTwo) > (oddOne + oddTwo); // 20 + 18 > 21 + 17

// // Check if evenOne is greater than evenTwo AND oddOne is greater than oddTwo

// let result2 = (evenOne > evenTwo) && (oddOne > oddTwo);

let score = 60;
let passingScore = 70;

if(score > passingScore) {
    alert("You Won!");
} else {
    alert("You Lost!");
}

// // hardcoded numbers

// // let number1 = 10;
// // let number2 = 8;
// // let number3 = 11;

// numbers from user inputs
let number1 = prompt("Insert first number: ");
console.log(typeof(number1), 'INPUT FROM USER');

let parsedNumber1 = parseInt(number1);
console.log(typeof(parsedNumber1), 'PARSED INPUT FROM USER');

let number2 = parseInt(prompt("Insert second number"));
let number3 = parseInt(prompt("Insert third number:"));

// find the greatest number
if (parsedNumber1 && number2 && number3) {

    if (parsedNumber1 > number2 && parsedNumber1 > number3) {
        alert(`${parsedNumber1} is the bigest!`);
    } else if (number2 > parsedNumber1 && number2 > number3) {
        alert(`${number2} is the bigest!`);
    } else {
        alert(`${number3} is the bigest!`);
    }

}
else {
    alert("You have inserted invalid number!");
}

// check if number is odd or even

let number = parseInt(prompt("Insert number:"));

if (number % 2 === 0) {
    alert(`${number} is even`)
} else {
    alert(`${number} is odd`)
}

