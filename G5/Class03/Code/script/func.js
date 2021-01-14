// ********* Function declarations ************
function sayHello() {
    console.log("Hello there!");
}

// ********* Function execution (Function call) ************
sayHello();
sayHello();

function greetMartin() {
    let person = "Martin";
    console.log(`Hi ${person}! How are you today?`);
}
greetMartin();



function weatherForecast() {
    let isRaining = false;
    if (isRaining) {
        console.log("The weather is rainy! Take umbrella with you!");
    } else {
        console.log("It's not raining! Probably the sun is shining!");
    }
}
weatherForecast();


function add() {
    let firstNum = 50;
    let secondNum = 70;
    let result = firstNum + secondNum;
    console.log(result);
}
add();

// Built in function examples in JS
// alert("hi");
// console.log("Something")
// prompt("Enter number")
// parseInt("4");


// ********* Functions with input parameters (Arguments) ************
console.log("=================================================================")
function greetPerson(person) {
    console.log(`Hi there ${person}! How are you today?`);
}
greetPerson("Martin");
greetPerson("Angela");
greetPerson("Slavko");
greetPerson("Robert");

// Different variables than the input parameters of the function. Even though they share same name
let firstNum = 5;
let secondNum = 10;

function addTwo(firstNum, secondNum) {
    let result = firstNum + secondNum;
    console.log(result);
}

console.log(firstNum);
console.log(secondNum);

addTwo(10,20);
addTwo(100,202);
addTwo(120,240);
addTwo(12120,212120);
// addTwo("Martin", "Angela");


// ********* Returning value functions ************

function addTwoNumbers(x, y) {
    let result = x + y;
    return result;
}

// The following two lines does the same thing. They assign value od 10 to the functionCallResult variable
let functionCallResult = addTwoNumbers(5, 5);
// let functionCallResult = 10;


console.log(functionCallResult);
// console.log(addTwoNumbers(5, 5));

// alert(addTwoNumbers(5, 5));

// document.write(addTwoNumbers(5,5));


// ********* Parameter mismatch ************
console.log("=================================================================")
function saySomething(person, message = "something", when = "Monday") {
    console.log(`${person} says that ${message} on ${when}`);
}

saySomething("Martin", "JS is awesome!", "last Tuesday");
saySomething("Angela", "C# is better", "Monday", 2000, null, false);
saySomething("Angela");
saySomething("Dejan", "React is the best framework!", 10);


// Some additional built in functions

let myNumber = Number("22");
console.log(myNumber);
console.log(typeof myNumber);

let myString = String(12342);
console.log(myString);
console.log(typeof myString);


// ********* Scopes ************

// Golobal scope. And globalVar belongs to the global scope.

let globalVar = 50;

function scopeA() {
    // ...code...

    let scopeAVar = 10;
    console.log("Inside scopeA function " + globalVar);

    function scopeB() {
        //...code...
        let scopeBVar = 15;

        function scopeC() {
            //...code...
            let scopeCVar = 20;
        }
    }
}

console.log("Outside functions " + globalVar);
// console.log("Outside functions " + scopeAVar);
// console.log("Outside functions " + scopeBVar);
// console.log("Outside functions " + scopeCVar);

scopeA();

let fname = "Angela";

function test() {
    // let fname = "Martin";
    console.log(fname);
    fname = "Bob";
    console.log(fname);
}

console.log(fname);
test();



function someNumber() {
    let number = 12;
    if(number >= 0 && number <= 50){
        console.log(number);
    }
    else {
        console.log("Try again!");
    }
}

// someNumber();
// console.log(number);

testNum = 5;
console.log(testNum);