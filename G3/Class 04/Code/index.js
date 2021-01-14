// Simple and mixed array declaration and initialization
let simpleArray = ["element2", "element3"];
let mixedArray = ["element1", "element2", 3, 3.5, true, 5, "element7", undefined, NaN, null];

// console.error("Simple Array", simpleArray);
// console.error("Mixed Array", mixedArray);

// Index of array start from 0 till the end of the array
// console.error("Which element it will be?", mixedArray[5]);
// Lenght of array
// console.error("Lenght of the array is", mixedArray.length);

// Last element of the array
// console.error("Last element of the mixed array is", mixedArray[mixedArray.length - 1]);

// How to change value of an element from mixed array for specific index
// mixedArray[0] = 1; // correct
// let changedValueOfFirstElementOfTheMixedArray = mixedArray[0];

// mixedArray[mixedArray.length] = "Test";

// mixedArray[mixedArray.length + 1] = "What is my index";
// console.error("Mixed array", mixedArray);

// Is there any easier way of adding element to the list?
// To add element at the end of the array use .push()
// Adding one element at the end of the array
simpleArray.push("element4");
// Adding multiple elements at the end of the array
simpleArray.push("element5", "element6");
// To add element at the beginning of the array use .unshift()
simpleArray.unshift("element0", "element1");

// console.error("Simple array", simpleArray);

// If you want to remove element at the end use .pop()
mixedArray.pop();
mixedArray.pop();
mixedArray.pop();

// For home try .slice(); and .splice();

// If you ant to remove element at the beginning use .shift()
mixedArray.shift();

// console.error("Mixed Array after pop and shift", mixedArray);

// Loops
let numberArray = [1, 2, 3, 10, 9, 23, 21, 11, 20, 15, 16.1];
// While loop
let counter = 0;
let biggestNumber = 0;

// while(counter < numberArray.length) {
//     // debugger;

//     if (numberArray[counter] > biggestNumber) {
//         biggestNumber = numberArray[counter];
//     }
//     else {
//         counter++;
//         continue;
//     }

//     counter++;
// }

// console.error("Biggest number", biggestNumber);

// While (check the condition before entering the loop) vs Do-While (enter the loop, then check the condition)

let falseStatment = false;

// debugger;
// do {
//     debugger;
//     console.error("Is inside do-while loop");
// } while (falseStatment)

// debugger;
// while (falseStatment) {
//   debugger;
//   console.error("Is inside while loop") ; 
// }

// Don't use do-while!!!

// for and foreach loop
// This for loop is same with while loop on 54 line
// for (let index = 0; index < numberArray.length; index++) {
//     if (numberArray[index] > biggestNumber)
//         biggestNumber = numberArray[index];
// }

// console.error("for from 0 to numberArray.length biggest number", biggestNumber);

// Same for loop but diffrent iteration
for (let index = numberArray.length; index > 0; index--) {
    debugger;
    if (numberArray[index - 1] > biggestNumber)
        biggestNumber = numberArray[index - 1];
}

// console.error("for from numberArray.length - 1 to 0 biggest number", biggestNumber);

// ES6 different type of for
// for(let element of mixedArray) {
//     if (element === mixedArray[mixedArray.length - 1]) {
//         document.write(element);
//     } 
//     else {
//         document.write(element + ", ");
//     }
// }

// Also 
// index is optional
// mixedArray.forEach((element, index) => {
//     console.error(`The element is ${element} and it is on ${index} index of the array`);
// })

// Continue and break
let namesArray = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6", "Name7", "Name8"];

for(const name of namesArray) {
    if (name === "Name3") {
        continue;
    }
    else if (name !== "Name7") {
        console.error(name);
    }
    else {
        break;
    }
}