console.log("======Example 1======")
function example(){
    let message = "Hello World";
    console.log(message); //Hello World
}

example();
//console.log(message); //error

console.log("======Example 2======")
let greeting = "Hello from SEDC"; //global scope

function printGreeting(){
    let greeting = "Merry Christmas";
    console.log(greeting); //Merry Christmas
}

printGreeting();
console.log(greeting); //Hello from SEDC

console.log("======Example 3======")
let result = 10;
function printResult(){
    result = 20;
    console.log(result); //20
}

printResult();
console.log(result); //20

console.log("======Example 4======")
function myFunction(){
    text = "Happy New Year!"; //Bad example
    console.log(text);
}
myFunction();
console.log(text);

function myFunction2(){
    console.log(text);
}
myFunction2();


console.log("=====Example 5=====")
let message = "Outside the function"; //global						
function warning(){ //function scope
	console.log(message);	
}


warning();
console.log(message);