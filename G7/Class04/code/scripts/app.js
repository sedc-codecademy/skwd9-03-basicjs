// let fName = prompt('Please enter your name');
// console.log(fName);

// Positive first
// if (fName) {
//     console.log(`Hello ${fName}, nice to meet you.`)
// } else {
//     console.log(`Sorry, I didn't get the name.`)
// }

// Negative first
// if (!fName) {
//     console.log(`Sorry, I didn't get the name.`)
// } else {
//     console.log(`Hello ${fName}, nice to meet you.`)
// }

// [ARRAYS]

// let red = 'red';
// let blue = 'blue';
// let green = 'green';

// console.log(red, blue, green);

// let colors = ['red', 'blue', 'green'];
//             //  0       1        2
// console.log(colors);

// let red = colors[0]
// console.log(red);

// let crazyJS = ['dog', 12, true, ['cat'], null]
// console.log(crazyJS[3][0]);

// let animals = ['dog', 'cat', 'fish', 'shark'];
// console.log(animals);

// animals[1] = 'tiger';
// console.log(animals);

// // console.log(typeof animals) //returns object, NOT array

// // Add item at the end
// animals.push('lion');
// console.log(animals);
// // console.log(animals[0]);

// animals.push('penguin', 'elephant');
// console.log(animals);

// // Add item at the beginning
// animals.unshift('mouse');
// console.log(animals);
// // console.log(animals[0]);

// // Remove an item from the end
// animals.pop();
// console.log(animals);

// // Remove an item from the start
// animals.shift();
// console.log(animals);

// // Length
// const animalsLength = animals.length;
// console.log(animalsLength)

// // Accessing the last item of the array
// console.log(animals[animalsLength - 1])
// console.log(animals[6])

// ** [LOOPS] **

// [WHILE]

// let colors = ['red', 'blue', 'green'];
// let counter = 0;

// while (counter < colors.length) {
//     console.log(colors[counter])
//     counter++;
// }

// console.log('after the while loop')

// Example 1

// function largestValueCalculator(array) {
//     let largestNumber = 0;
//     let counter = 0;

//     while(counter < array.length) {
//         let currentNumber = array[counter];
//         if (currentNumber > largestNumber) {
//             largestNumber = currentNumber;
//         }
//         counter++;
//     }
//     console.log(largestNumber);
// }

// let numbers = [1, 4, 5, 80, 14, 23, 99, 0, 7, 10];

// largestValueCalculator(numbers);

// Strings can work same as arrays
// let year = 2021;
// function numberToDigits(number) {
//     let digits = String(number);
//     let counter = 0;
    
//     while(counter < digits.length) {
//         console.log(digits[counter]);
//         counter++;
//     }
// }

// numberToDigits(year);

// let colors = ['red', 'blue', 'green'];
// let counter = 0;

// while(counter > colors.length) {
//     console.log(colors[counter]);
//     counter++;
// }

// [DO WHILE]
// do {
//     console.log(colors[counter])
//     counter++;
// } while (counter > colors.length)

// [FOR LOOP]

// let colors = ['red', 'blue', 'green'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// for (let i = 1; i <= 30; i++) {
//     console.log(i);
// }

// for (let i = 30; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(i, colors[i]);
// }

// let colors = ['red', 'blue', 'green'];

// [FOR OF]
// for (let color of colors) {
//     console.log(color);
// }

// console.log('-----')

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// [Break]
// let colors = ['red', 'blue', 'green'];

// for (let color of colors) {
//     if (color === 'blue') {
//         break;
//     }
//     console.log(color);
// }

// function printColors(colorsArray) {
//     for (let color of colorsArray) {
//         if (color === 'blue') {
//             return;
//         }
//         console.log(color);
//     }
// }

// printColors(colors);

// [Continue]

// let colors = ['red', 'blue', 'green'];

// for (let color of colors) {
//     if (color === 'blue') {
//         continue;
//     }
//     console.log(color);
//     console.log('other console log')
// }

