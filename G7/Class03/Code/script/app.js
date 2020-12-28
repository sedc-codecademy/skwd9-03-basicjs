// let wouldLikeDrink = prompt('Hi, would you like a drink?');

// if (wouldLikeDrink === 'yes') {
//     let age = prompt('Please enter your age');

//     let parsedAge = parseInt(age);

//     if (parsedAge >= 18) {
        
//         alert(`Hey, since you ${age} years old, you can have have a drink.`);

//         let drink = prompt('What type of drink would you like to have?');

//         if (drink === 'beer' || drink === 'wine' || drink === 'whiskey') {
//             alert(`OK, we have that, here is your ${drink}.`)
//         } else {
//             alert(`Sorry we don't have ${drink}`)
//         }

//         // if (drink === 'beer') {
//         //     alert('OK, we have that, here is your beer.')
//         // } else if (drink === 'wine') {
//         //     alert('OK, we have that, here is your wine.')
//         // } else if (drink === 'whiskey') {
//         //     alert('OK, we have that, here is your whiskey.')
//         // } else {
//         //     alert(`Sorry we don't have ${drink}`)
//         // }

//     } else {
//         alert('Sorry, we only serve adults.')
//     }

// } else {
//     alert('OK, take care.');
// }

// [SWITCH STATEMENT]

// let animal = prompt('Hi, welcome to our animal shelter. What type of animal would you like to adopt?');

// switch(animal) {
//     case 'dog':
//         alert('Amazing, here is your dog');
//         break;
//     case 'cat':
//         alert('Amazing, here is your cat');
//         break;
//     default:
//         alert(`Sorry, we don't have a ${animal}`);
// }

// [FUNCTION]

// printHello(); do not call a func before definition

// Function definition
// function printHello() {
//     console.log('Hello world!');
// }

// Call the function
// printHello();
// printHello();
// printHello();

// function printInfo(name, age, city = 'Skopje') {
//     console.log(`Hi, my name is ${name}, I'm ${age} years old, and I'm from ${city}`);
// }

// printInfo('Ivo', 31, 'Skopje');
// printInfo('Ivan', 29, 'Skopje');
// printInfo('Nenad', 40);
// printInfo('Petar', 'Skopje', 30);
// printInfo('Nikola', 50, 'Tetovo', 'dog');

// Returning values

// function calculateAge(currentYear, yearOfBirth) {
//     // let age = currentYear - yearOfBirth;
//     // console.log('age has been calculated');
//     // return age;

//     return currentYear - yearOfBirth;
// }

// let ageCalculated = calculateAge(2020, 1989);
// console.log(ageCalculated);

// console.log(calculateAge(2020, 1989));

// let printInfo = function(name) {
//     console.log(`Hi, my name is ${name}`)
// }

// printInfo('Ivo');

// let age = '20';
// let parsedAge = Number(age);
// console.log(age, parsedAge);

// [SCOPE]

// let color = 'red';

// function printColor() {
//     console.log(color);
// }

// printColor();

// ex.2

// function printColor() {
//     let color = 'red';
//     console.log('inside', color)
// }

// printColor();

// console.log('outside', color);

// ex. 3

// let color = 'red';
// function printColor() {
//     color = 'blue';
//     console.log('inside', color)
// }

// printColor();
// console.log('outside', color);

// ex. 4

// let color = 'red';

// function printColor() {
//     let color = 'green';
//     console.log('inside', color);
// }

// printColor();

// console.log('outside', color);

// ex. 5

// let color = 'red';

// function printColor(color) {
//     console.log('inside', color);
// }

// printColor('green');

// console.log('outside', color);

// ex. 6

let color = 'red';

function printColor(color, shouldChangeColor) {

    if (shouldChangeColor) {
        let color = 'orange';

        console.log('inside if', color)
    }
    
    console.log('inside func', color);
}

printColor('green', true);

console.log('outside', color);