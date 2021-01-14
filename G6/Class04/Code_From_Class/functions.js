
function sayHelloWorld() {
    // dozens lines of code...
    alert("HELLO WORLD!");
}

// sayHelloWorld();
// alert("Do something else");
// sayHelloWorld();

function printMessage(message) {
    console.log(`G6 said: ${message}`);
}


function printSumOfTwoNumbers(number1 = 0, number2 = 0) {
    let sum = number1 + number2;
    alert(sum);
}

function sumOfThreeNumber(first, second, third) {
    let result = first + second + third;
    return result;
}

// let firstNumber = parseInt(prompt("Insert first number"));
// let secondNumber = parseInt(prompt("Insert second number"));

// printSumOfTwoNumbers(firstNumber, secondNumber);

//....

let side1 = 20;
let side2 = 40;

// printSumOfTwoNumbers(side1, side2);

///......

// printSumOfTwoNumbers(100, 150);

printMessage("Functions are awesome!");
let sumThreeNumbers = sumOfThreeNumber(1,2,3);
alert(sumThreeNumbers);


// setting default values

function printFullName(lastName, firstName = "Goce") {
    alert(`Hi my name is ${firstName} ${lastName}`)
}

printFullName("Kabov2")

let numberString = "asdasdasd";
let number = Number(numberString);
// console.log(number);
// console.log(typeof(number));

let number1 = 1000;
let numberInString = String(number1);
console.log(numberInString);
console.log(typeof(numberInString));

let lastName = "Kabov";

function firstFunction() {
    let firstName = "Goce";
    //console.log(firstName, 'FROM THE FUNCTION')
    // console.log(lastName, "LAST NAME FROM THE FUNCTION") - BAD PRACTICE
    function nestedFunction() {
        console.log(firstName);
        let midleName = "Midle"
    }
    //console.log(midleName)
    nestedFunction();
}


firstFunction();


function sayHi() {
    firstName = "Goce";
}
sayHi();
console.log(firstName);