


// function giveMeNumber(num) {
//     return num;
// }

// function printMessageInConsole(message) {
//     console.log(message);
// }

// let myNumber = giveMeNumber(10);

// console.log(myNumber);
// // console.log(giveMeNumber(10));

// printMessageInConsole("Hi there!");



let arr = [5, 10, 200, 100]

function findMax(array) {
    let max = -Infinity;
    let min = +Infinity;
    for (let i = 0; i < array.length; i++) {
        // let num = array[i];
        if (array[i] > max) {
            max = array[i];
        }
        if(array[i] < min){
            min = array[i];
        }
    }
    return [max, min];
}

console.log(findMax(arr));
// alert(findMax(arr));

let max = findMax(arr);


let endCount = 150;
let i = 101;
let sum = 0;

while(i <= endCount) {
    // sum += Math.pow(i, 2); => same as the next line
    sum = sum + Math.pow(i, 2);
    i++;
}
console.log(sum);