// CREATING AN ARRAY

let emptyArray = [];

let daysOfWeek = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

console.log(daysOfWeek);
console.log(emptyArray);

// let thursday = daysOfWeek[3];

console.log(`Today is ${ daysOfWeek[3] }`);

let colors = ['red', 'green', 'blue'];

console.log(colors);

colors[0] = 'Martin';

console.log(colors);

console.log(`My colors array has length of ${colors.length} elements`);

console.log(`The last element of the days array is on ${daysOfWeek.length - 1}nd position`);

// print the last element of the array
console.log(`${colors[colors.length - 1]} is the last element of the colors array`);



//ADDING NEW ELEMENT AT THE END OF THE ARRAY - THE HARD WAY
console.log("====================== ADD ELEMENTS AT THE END OF THE ARRAY ===================")
daysOfWeek[daysOfWeek.length] = 'New day of the week';
console.log(daysOfWeek);


// EASIER WAY OF ADDING ELEMENT AT THE END OF THE ARRAY
daysOfWeek.push('Another day');
console.log(daysOfWeek);

daysOfWeek.push('New day', 'Again new day', 'Enough days');
console.log(daysOfWeek);


// ADD ELEMENT AT THE BEGINNING OF THE ARRAY
console.log("====================== ADD ELEMENTS AT THE BEGINNING OF THE ARRAY ===================")

let fruits = ['orange', 'apple', 'grapes'];
console.log(fruits);

fruits.unshift('banana', 'pineapple');
console.log(fruits);


console.log("====================== DELETE ELEMENTS FROM THE END OF THE ARRAY ===================")
fruits.pop();
console.log(fruits);

let removedItem = fruits.shift();

console.log(removedItem);
console.log(fruits);


// SEND ARRAY AS AN ARGUMENT TO A FUNCTION

function printArr(array) {
    console.log(array);
}

printArr(1);
printArr(['Martin', 'Angela', 'Anja']);
printArr([1, 2, 3]);
printArr(['Martin', 'Happy', 'Programming']);
