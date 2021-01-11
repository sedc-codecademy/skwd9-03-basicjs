console.log('The script is working!');

// Functions revision
function multiplyTwoNumbers(number01, number02){
    let result = number01 * number02;
    return result;
    // return number01 * number02;
    // return console.log(result);
}
let result01 = multiplyTwoNumbers(2, 5)
// console.log(result01);
// console.log(multiplyTwoNumbers(2, 5));
// console.log(multiplyTwoNumbers(7, 14));
// console.log(multiplyTwoNumbers(9, 65));

// -------------- ARRAYS -------------------
console.log('-------------- ARRAYS ---------------');
let myFirstArray = ['Maja', 'Petar', 'Bojana'];
let emptyArray = []; // empty array
let mixedArray = [3, 'string', null, false, undefined]; // mixed array - element are of various types

// Access elements in array
let firstElementOfArray = myFirstArray[0]; //arrays in JS are zero-indexed!!!
console.log(firstElementOfArray);

// Change value of an element in an array
myFirstArray[0] = 'Natasha';
console.log(myFirstArray[0]);

// Getting the length of an array
console.log(`Length of myFirstArray is: ${myFirstArray.length}`); //3
let lastElement = myFirstArray[myFirstArray.length - 1];
console.log(`Last element is: ${lastElement}`);

// Adding and removing items
myFirstArray[myFirstArray.length] = 'Marko';
console.log(myFirstArray[myFirstArray.length - 1]);

// .push() used for adding element(s) at the end of the array
// we can add multiple items at once
myFirstArray.push('Pero', 'Blazo');
console.log(myFirstArray);

// .unshift() used for adding element(s) at the beginning of an array
// we can add multiple items at once
myFirstArray.unshift('Marija', 'Jelena');
console.log(myFirstArray);

// .pop() used for removing element at the end of the array
let removedFromEnd = myFirstArray.pop();
console.log(`Item removed: ${removedFromEnd}`);
console.log(myFirstArray);

// .shift() used for removing element on the first index of an array
let removedFromStart = myFirstArray.shift();
console.log(`Item removed: ${removedFromStart}`);
console.log(myFirstArray);

// ------------- LOOPING STRUCTURES ----------------

// ---------- WHILE LOOP -----------------
console.log('----------- LOOPS -----------')
let sumOfSquares = 0;
let whileCounter = 101;

// while loop
while(whileCounter <= 150) {
    // console.log(`Number ${whileCounter}`);
    sumOfSquares += Math.pow(whileCounter,2);
    whileCounter++; // whileCounter += 1;
}
console.log(`Result is: ${sumOfSquares}`);

// do/while loop
let secretNumber = 9;
let userNumber = 0;


// do {
//     userNumber = parseInt(prompt('Guess my number! Pick one from 1 -10.'));
//     console.log(`User guess: ${userNumber}`);
// } while(userNumber !== secretNumber)

// infinite loop (BE CAREFUL WITH THESE!!!!)
// while(true) {
//     let anotherUserInput = parseInt(prompt('Guess my number! Pick one from 1 -10.'));
//     if(anotherUserInput === secretNumber) {
//         console.log('Right guess!');
//         break;
//     }
// }

// for loop
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

let anotherWhileCounter = 1;
// lines of code
while(anotherWhileCounter <= 100) {
    console.log(anotherWhileCounter);
    //lines of code
    anotherWhileCounter += 2;
}

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days);
for(let i = 0; i < days.length; i += 1){
    console.log(`Counter value: ${i}`);
    console.log(days[i]);
    console.log('End of circle');
    console.log('====================');
}
console.log('End to start array');
// naopacki
for(let i = days.length - 1; i >= 0; i--){
    console.log(days[i])
}
console.log('For of loop');
// for-of loop
// lists ALL the elements in an array
for(let element of days){
    if(element === "Thursday"){
        // break; // "Monday", "Tuesday", "Wednesday"
        continue; // "Monday", "Tuesday", "Wednesday", "Friday", "Saturday", "Sunday"
    } 
    console.log(element);
}

