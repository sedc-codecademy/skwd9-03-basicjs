console.log("Hello"+" "+"World!"); //concatenation of strings

var helloGreeting ="Hello";
var loc = "from SEDC";

var greeting = helloGreeting + " " + loc;
console.log(greeting);

var firstNumber = 5;
var secondNumber = "123";

var concatenatedString = firstNumber+secondNumber; //Number is converted to string

console.log("firstNumber + secondNumber: "+ concatenatedString);

var a = true;
var b = "Hello";
var c = a+b;
console.log("a+b: "+c); // with operator + result is of type string

//Interpolation
var sedc = "SEDC";
var greetingFromSedc = `Greeting from ${sedc}`;
console.log("Interpolation");
console.log(greetingFromSedc);

//Quotes
var message = "It's really nice to be a programmer";
var anotherExample = 'It is really "nice" to be a programmer';
console.log(message);
console.log(anotherExample);

var solution = 'It\'s really "nice" to be a programmer'; //escaping the quote 
console.log(solution);

//Undefined vs null
var firstName; //undefined at the beginning
firstName="Ana";

var secondName = "Petrovska";
console.log(firstName + " "+secondName);

secondName = null; //clean the value
console.log("After cleaning");
console.log(firstName + " "+secondName); //null is converted to string


