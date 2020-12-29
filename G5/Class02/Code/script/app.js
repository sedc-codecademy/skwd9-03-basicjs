// let dog = 'dog';
// let cat = 'cat';

// let animals = dog + cat;
// let animals = dog + ', ' + cat;
// let animals = `${dog}, ${cat}`;
// console.log(animals);

// let sentence = "It's really fun being a web developer";
// let sentence = 'It\"s really fun being a web developer';
// let sentence = `It's really "fun" being a web developer`;
// let sentence = `
// multi
// line
// code`;

// console.log(sentence);

// let year = 2020;
// let word = 'year';
// let result = year + word;

// console.log(typeof result);

// let a = 1;
// let b = "2";

// let result = a + b; // "1" + "2"
// console.log(result);

// Non value values
// let dog;
// let cat = null;
// console.log(dog);
// console.log(cat);

// let a = 2 / "foo";

// // console.log(a);
// // console.log(typeof a);
// console.log(a);
// console.log(isNaN('ivo'))
// console.log(Number.isNaN('ivo'))

// let a = 1 / 0;
// console.log(a);

// let b = -1 / 0;
// console.log(b);

// console.log(5 == "5") // true / checks value
// console.log(5 === "5") // false / checks value + type

// let score1 = 10;
// let score2 = 20;
// let hightScore1 = 5;
// let hightScore2 = 10;

// let result = ((score1 + score2) > (hightScore1 + hightScore2));
// console.log(result);

// let result = (5 < 2) && (2 >= 3);
//             //false  &&  false
// console.log(result);

// !! - converts values to a boolean;

// let fName = '';

// let res = fName === '' || fName === undefined || fName === null; <-- this is falsy
// let res = fName = 'Ivo' <-- this is truthy
// let res = !!fName;

// let dog = 'dog';
// console.log('dasdsad', dog)

// let a = 41;
// let b = '42';
// let c = '43';
// let d = 'foo';

// // console.log(a < b)
// console.log(b > d);

// [IF STATEMENT]

// let animal = 'cat';

// if (animal === 'dog') {
//     console.log('Great, we have a dog!');
// } else {
//     console.log('Definitely not a dog');
// }

// console.log('After the if statement');

// let money = 75;

// Not the proper way of chaining if else
// if (money > 20) {
//     console.log('You can buy a USB');
// } else if (money > 50) {
//     console.log('You can buy a mouse');
// } else if (money > 70) {
//     console.log('You can buy a keyboard');
// } else if (money > 100) {
//     console.log('You can buy a monitor');
// } else {
//     console.log('You can buy a laptop');
// }

// let fName = 'Ivo';

// if (money > 100) {
//     console.log('You can buy a laptop');
// } else if (money > 70) {
//     console.log('You can buy a monitor');
// } else if (money > 50) {
//     console.log('You can buy a keyboard');
// } else if (money > 20) {
//     console.log('You can buy a mouse');
// } else {
//     console.log('You can buy a USB');
// }

// Do not mix different values in if else statements
//  else if (fName === 'Petar') {
//     console.log('Hi Petar');
// }


// let wouldLikeDrink = prompt('Hi, would you like a drink?');

// if (wouldLikeDrink === 'yes') {
//     let age = prompt('Please enter you age');
//     let parsedAge = parseInt(age);
//     // console.log(age, parsedAge);
//     // console.log(typeof age, typeof parsedAge);
//     if (parsedAge >= 18) {
//         alert(`Hey, since you are ${parsedAge} years old, you can have a drink.`);
//         let drink = prompt('What type of drink would you like to have?');
//         // if (drink === 'beer') {
//         //     alert('OK we have that, here is your beer!');
//         // } else if (drink === 'wine') {
//         //     alert('OK we have that, here is your wine');
//         // } else if (drink === 'whiskey') {
//         //     alert('OK we have that, here is your whiskey');
//         // } else {
//         //     alert(`Sorry we don't have ${drink}`)
//         // }

//         if (drink === 'beer' || drink === 'wine' || drink === 'whiskey') {
//             alert(`OK we have that, here is your ${drink}`);
//         } else {
//             alert(`Sorry we don't have ${drink}`);
//         }
//     } else {
//         alert('Sorry, we only serve adults.');
//     }
// } else {
//     alert('OK, take care.')
// }

let fName = prompt("Please enter your name");

console.log(fName);
console.log(!!fName);

// if (fName) {
//     console.log(`Your name is ${fName}`);
// } else {
//     console.log('There has been an error, no name entered.')
// }

if (!fName) {
    console.log('There has been an error, no name entered');
} else {
    console.log(`Your name is ${fName}`)
}
