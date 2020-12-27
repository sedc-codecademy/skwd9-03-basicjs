// alert('this works');

// [STRINGS]

let firstAnimal = 'dog';
let secondAnimal = 'cat';

let allAnimals = firstAnimal + ' ' + secondAnimal;

// console.log(allAnimals);

let sentence = 'I have a ' + firstAnimal + ', which loves chasing the ' + secondAnimal + '.';
// console.log(sentence);

let sentence2 = `I have a ${firstAnimal}, which loves chasing the ${secondAnimal}.`;
// console.log(sentence2);

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
// let sentence4 = 'It\'s fun to be a programmer!'
// let sentence4 = `It's "fun" to be a programmer!`;
// console.log(sentence4);

// let lion;
// console.log(lion);

// let tiger = null;
// console.log(tiger);

// tiger = undefined;
// console.log(tiger);

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

let w = 1 / 0;
// console.log(w);

let q = -1 / 0;
// console.log(q);

// NAMING VARIABLES
// camelCase
let newDog;
// PascalCase
let NewCat;
// kebap_case
let i_love_kebaps;

// OPERATORS

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

// prompt();

let a3 = 41;
let b3 = '42';
let c3 = '43';
let d3 = 'ivo';

// console.log(a3 < b3);
// console.log(b3 < c3);
// console.log(a3 > d3);

// IF STATEMENTS

// let animal2 = 'dog';

// if(animal2 === 'cat') {
//     console.log(`It's a cat`);
// }

// let animal2 = 'dog';

// if(animal2 === 'dog') {
//     console.log(`It's a cat`);
// } else {
//     console.log(`it's definitely not a cat`)
// }

// console.log('After if')

let money = 30;
let animal9 = 'dog';

if (money < 10) {
    console.log('You can buy milk');
} else if (money < 20) {
    console.log('you can buy fine wine');
} else if (money < 30) {
    console.log('you can buy a lot of things');
} else if (money < 50) {
    console.log('You can buy a SDD');
} else {
    console.log('You can buy everything');
}

// VERY BAD!
// else if (animal9 === 'cat') {
//     console.log('You have a cat');
// }