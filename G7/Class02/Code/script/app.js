// [STRINGS]

// Concatenating strings

let firstAnimal = 'dog';
let secondAnimal = 'cat';

let allAnimals = firstAnimal + ' ' + secondAnimal;
// console.log(allAnimals);

// Older option
let sentence = 'I have a ' + firstAnimal + ', which loves chasing the ' + secondAnimal + '.';
// console.log(sentence);

// Using backticks, ES6 feature
let sentence2 = `I have a ${firstAnimal}, which loves chasing the ${secondAnimal}.`;
// console.log(sentence2);

// Numbers concatenated with strings, get stringified
let currentYear = 2020;
let sentence3 = currentYear + ' is the best year!';
// console.log(sentence3);

let number0 = 10;
let number1 = 20;
let number2 = "20";
let result1 = number0 + number2 + number1 + number1;           
// console.log(result1);

// let sentence4 = 'It's fun to be a programmer!';
// let sentence4 = "It's fun to be a programmer!";
// let sentence4 = "It's "fun to be a programmer!";
// let sentence4 = 'It\'s fun to be a programmer!' // "/" is being used to escape characters
// let sentence4 = `It's "fun" to be a programmer!`;
// console.log(sentence4);

// [NO VALUE TYPES] Undefined and Null

// let lion;
// console.log(lion);

// let tiger = null;
// console.log(tiger);

// tiger = undefined;
// console.log(tiger);


// Not a Number - NaN

let a = 1;
let b = 'testing';
let result2 = a / b;
// console.log(result2);
// console.log(typeof result2);

// console.log(a == NaN)
// console.log(a === NaN)

// console.log(isNaN(a));

// console.log(b === NaN);
// console.log(isNaN(b));
// console.log(typeof b);
// console.log(Number.isNaN(b));

// Infinity and -Infinity

let w = 1 / 0;
// console.log(w);

let q = -1 / 0;
// console.log(q);

// [NAMING VARIABLES]
// camelCase
let newDog;
// PascalCase
let NewCat;
// kebap_case
let i_love_kebaps;

// [OPERATORS]
let pass = 50;
let score = 90;
let hasPassed = score >= pass;
// console.log(hasPassed);

let score1 = 10;
let score2 = 20;
let hightScore1 = 5;
let hightScore2 = 15;

let result7 = ((score1 + score2) > (hightScore1 + hightScore2));
// console.log(result7); 

// console.log(!!score1);
let elephant;
// console.log(!!elephant)

// Using the Logical AND operator
// let a1 = true && true;
// let a2 = true && false;
// let a3 = false && true;
// let a4 = false && (3 === 4);
// let a5 = 'Cat' && 'Dog';
// let a6 = false && 'Cat';
// let a7 = 'Cat' && false;
// let a8 = '' && false;
// let a9 = false && '';
// console.log(a9);

// Using the Logical OR operator
// let a1 = true || true;
// let a2 = true || false;
// let a3 = false || true;
// let a4 = false || (3 === 4);
// let a5 = 'Cat' || 'Dog';
// let a6 = false || 'Cat';
// let a7 = 'Cat' || false;
// let a8 = '' || false;
// let a9 = false || '';
// console.log(a9);

// Comparing values from different types
let a3 = 41;
let b3 = '42';
let c3 = '43';
let d3 = 'ivo';

// console.log(a3 < b3);
// console.log(b3 < c3);
// console.log(a3 > d3);


// [IF STATEMENT]

// let animal2 = 'dog';

// if(animal2 === 'cat') {
//     console.log(`It's a cat`);
// }


// [IF ELSE STATEMENT]

// let animal2 = 'dog';

// if(animal2 === 'dog') {
//     console.log(`It's a cat`);
// } else {
//     console.log(`it's definitely not a cat`)
// }

// console.log('After if')

// [ELSE IF]

let money = 75;
let animal9 = 'dog';

// Correct way of writing an else if statement
if (money > 100) {
    console.log('You can buy a laptop');
} else if (money > 70) {
    console.log('you can buy a monitor');
} else if (money > 50) {
    console.log('You can buy a keyboard');
} else if (money > 20) {
    console.log('you can buy a mouse');
} else {
    console.log('You can buy USB');
}

// Incorrect way of writing an else if statement
if (money > 20) {
    console.log('You can buy USB');
} else if (money > 50) {
    console.log('you can buy a mouse');
} else if (money > 70) {
    console.log('You can buy a keyboard');
} else if (money > 100) {
    console.log('you can buy a monitor');
} else {
    console.log('You can buy a laptop');
}

// VERY BAD! Combining different comparisons in a single else if statement
// else if (animal9 === 'cat') {
//     console.log('You have a cat');
// }