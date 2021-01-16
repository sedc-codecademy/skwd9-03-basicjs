// let number = 0;
// while(number < 50) {
//     console.log(number);
//     number += 2;
// }

// console.log('FINISHED')

// let array = [1, 5, 10, 15, 20, 25, 30];
// let index = 0;
// while(index < array.length) {
//     alert(array[index]);
//     index++;
// }

let numbers = [44, 22, 56, 24, 77, 74, 1, 99, 156, 8];

// let index = 0;


// while(index < numbers.length) {
//     let max = 0
//     if (numbers[index] > max) {
//         max = numbers[index];
//     };
//     index++;
// }

// alert(max);

//let number = Math.pow(10, 2)

// Firts way of implementation
let number = 456;
let digits = []; // 1 => [6], 2 => [5, 6], 3 => [4, 5, 6] 
while (number > 0) {
    digits.unshift(number % 10);
    console.log(digits)
    number = parseInt(number / 10);
}
console.log(digits);

// Second way of implementation - not so good, just to know you can use boolean variable ascondition
// let number = 45612;
// let pass  = true;
// while(pass) {
//     console.log(number % 10);
//     number = parseInt(number / 10);
//     if (number === 0) {
//         pass = false;
//     }
// }

function convertYears(years, type) {
    if (type === "DOG") {
        return years * 7
    } else {
        return years / 7
    }
}

let years = parseInt(prompt("insert years"));

// let pass = true;
let type;

while (true) {
    type = prompt("Please insert 'DOG' to convert in dog years, or 'HUMAN' to convert in human years");
    if (type === "DOG" || type === "HUMAN") {
        break;
    }
}

const convertedYears = convertYears(years, type);
alert(convertedYears);





