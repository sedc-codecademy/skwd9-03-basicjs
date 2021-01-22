// DO WHILE

// sum all numbers from user input until he enters zero

// let sum = 0;
// let number = 0;

// do {
//     number = parseInt(prompt("Please enter positive number or zero to exit:"));
//     sum +=number;
// } while (number > 0)

// alert(sum);

let array = [1,2,3,4,5];

// //WHILE
// let index = 0;
// while(index < array.length) {
//     console.log(array[index]);
//     index++;
// }

// //FOR
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for(let j = array.length-1; j >=0; j--){
//     console.log(array[j]);
// }

//FOR OF
// let sum = 0;
// for(item of array) {
//     sum += item;
// }

// BREAK AND CONTINUE
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// for(number of numbers) {
//     if(number % 2 !== 0) {
//         continue;
//     }
//     console.log(number);
// }

// for(number of numbers) {
//     if(number === 7) {
//         break;
//     }
//     console.log(number);
// }

let groceries = ["Apple", "Orange", "Bread", "Cigarets"];

function addProduct(product) {
    groceries.push(product);
    console.log(`Product ${product} was successfully added to the groceries`);
}

function deleteProduct(product) {
    for(let i = 0; i < groceries.length; i++) {
        if(groceries[i] === product) {
            groceries[i] = null;
            console.log(`Product ${product} was successfully deleted from groceries`);
            return true;
        }
    }
    return false;
}

function findProduct(product) {
    for(grocery of groceries) {
        if (product === grocery) {
            return grocery;
        } 
    }
    return null;
}
addProduct("Coca Cola");
let product = "Orange"
let hasDeleted = deleteProduct(product);
if (hasDeleted){
    alert(`${product} SUCCESSFULLY DELETED`);
} else {
    alert(`THERE IS NO ${product} in groceries`);
}


let counter = 0;
for(product of groceries){
    if (product === null) {
        counter ++;
    }
}
console.log(counter);





