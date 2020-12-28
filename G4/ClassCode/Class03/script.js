console.log('Hello from JS console');

// ----------- SWITCH -----------------
console.log('--------------- Switch --------------');
// let userInput = parseInt(prompt('Enter number from 1 - 7'));

// switch(userInput){
//     case 1:
//         console.log('You have classes at SEDC!');
//         break;
//     case 2:
//         console.log("You're free!");
//         break;
//     case 3:
//         console.log('You have classes at SEDC!');
//         break;
//     case 4:
//         console.log("You're free!");
//         break;
//     case 5:
//         console.log("It's KAFANA time!!!");
//         break;
//     case 6:
//         console.log("Relax, it's weekend!");
//         break;
//     case 7:
//         console.log("Relax, it's weekend!");
//         break;
//     default:
//         console.log("No such day!");
//         break;
// }

// fall out scenario
// switch(userInput){
//     case 1:
//     case 3:
//         console.log('You have classes at SEDC!');
//         break;
//     case 2:
//     case 4:
//         console.log("You're free!");
//         break;
//     case 5:
//         console.log("It's KAFANA time!!!");
//         break;
//     case 6:
//     case 7:
//         console.log("Relax, it's weekend!");
//         break;
//     default:
//         console.log("No such day!");
//         break;
// }

// --------------- FUNCTION --------------
console.log('------------ Functions --------------');

// function without argument, with no return
function sayHello(){
    console.log('Hello');
}

sayHello();
sayHello();
sayHello();

// Good practice: first declare the function, then use it!

// function with arguments
function sumOfNumbers(number1, number2){
    let result = number1 + number2;
    console.log(`Result is ${result}`);
}
// we don't have access to the result variable inside the function
// console.log(`Result is ${result}`);

sumOfNumbers(5, 76);
sumOfNumbers(3, 100);

// functions with return value
function sumNumbersWithReturn(number1, number2){
    let result = number1 + number2;
    console.log(`Result is ${result}`);
    return result;
}

let resultSum = sumNumbersWithReturn(100, 200);
console.log(resultSum);

// Exercise 01
function sumTwoNumbers(number1, number2){
    return number1 + number2;
}
console.log(`Result hopefully is: ${sumTwoNumbers(3, 55)}`);

function subtractTwoNumbers(number1, number2){
    return number1 - number2;
}
console.log(`Result hopefully is: ${subtractTwoNumbers(100, 25)}`);

function multiplyTwoNumbers(number1, number2){
    return number1 * number2;
}
console.log(`Result hopefully is: ${multiplyTwoNumbers(6, 5)}`);

function divideTwoNumbers(number1, number2){
    return number1 / number2;
}
console.log(`Result hopefully is: ${divideTwoNumbers(48, 8)}`);

// ------------------ SCOPE -----------------
console.log('---------------- Scope ----------------');
let input = 5; // this lives in the global scope

function scopeTestFunction(number1, number2) { // This is function scope. Everything inside the {} is in its function scope
    let result = number1 + number2 + input;
    console.log("first:" + result);

    if(input === 5){
        let result2 = number1 + number2 - input; // let is contained inside the block scope. This means it only lives in the block scope
        var someNumber = 55; // var is contained in the function scope that it is contained in ( in this case the sumTwoNumbers function { } )
        console.log("second:" + result2);
    }
    // console.log("third:" + result2); // We can't access the result1 variable here because it is declared with let and it is locked in the if {}
    console.log("some number:" + someNumber); // We can access someNumber because it is a var variable and it is contained in the whole function sumTwoNumbers
}

scopeTestFunction(2, 5);
// console.log(result);  // We can't access something in the function scope from the outside ( let and var included )
// console.log("some number:" + someNumber);

// Exercise 2 - Degrees converter
function convertDegrees(type, number){
    if(type === 'C'){
        return number * 1.8 + 32;
    } else if(type === 'F'){
        return (5 / 9) * (number - 32);
    } else {
        return 'Invalid input';
    }
}

let userTypeInput = prompt("Enter F for Fahrenheit or C for Celzius degrees:");
let userNumberInput = parseInt(prompt("Enter number:"));
alert(convertDegrees(userTypeInput, userNumberInput));
