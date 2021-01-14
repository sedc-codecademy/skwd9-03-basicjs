// alert("We are live");
// let maxNumber = 5;
 let i = 0;

// while(i <= maxNumber){
//     console.log(i);
//     i++;
// }

let dogs = ["Rex","Bob","Alex","Kiara"];

let ii = 0;

while(ii < dogs.length){
    console.log(dogs[ii]);
    ii++;
}
//This is infinite loop in javascript
// It will make your browser loop infinitly and it will eventually crash
// while(true){
//     console.log("This is an infinite loop");
//     console.log("NOOOOO");
// }

//Find the max number in array
// let numbers = [2,5,1,9,7,0];
// let maxNumber = numbers[0];
// let iii = 0;
// while(iii < numbers.length) {
//     if(numbers[iii] > maxNumber){
//         maxNumber = numbers[iii];
//     }
//     iii++;
// }
// console.log(maxNumber);

let iii = 101;
let res = 0;
while(iii <= 150){
    //res = res + Math.pow(iii,2);
     res += Math.pow(iii,2)
    iii++;
}
console.log(res);

function printNumberDigits(num){
    let result = [];
    let i = 0;
    while(i < num.toString().length){
        result.push(num.toString()[i]);
        i++;
    }
    return result;
}

let printResult = printNumberDigits(36721);
console.log(printResult);

//console.log('3567'.length); // This returns 4. Number of characters in a string
//console.log(3567.length); // This throws an error. We can not use .length with data type number


//DO - WHILE Loop
// In do while loop we always will have at least one iteration that will be fulfilled.
// It still executes multiple times if the condition is met.
do {
    console.log("I have executed");
} while(3 < 2)

// Use case for validation. If we are not sure the user input is correct.
// let userInput;
// do{
//     userInput = prompt("Please enter y");
// }while(userInput !== "y")

// For loop
// incrementing
for(let i = 0; i < 5; i++){
    console.log(`The iterator value is ${i}`)
}

//Decreasing for loop
for(let i = 10; i > 0; i--){
    console.log(`The value of ${i}`)
}
console.log(`////////////////////////////`);
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 10; j++){
//         console.log(i)
//         console.log(j)
//     }
// }

let carsMakes = ["Audi","BMW","Citroen","Dacia","Benz"]
//Take the car from an array that first letter is "A"
// for(let i =0; i < carsMakes.length; i++){
//     if(carsMakes[i][0] === "A"){
//         console.log(carsMakes[i])
//     }
// }
// This loop takes the values from the last one till the first one. Reverse order
// let example = ['first','second','third','last']; 
// for (let j = example.length ; j > 0; j--) {    
// 	document.write(example[j-1] + '<br>'); 
// }

//For of loop

//Difference is that we can not use indexes with for of loop.
// If we need the index to do further calculations then we need to use regular for loop 
// let computerComponents = ["MB","PSU","CPU","GPU","SSD"];
// for(let component of computerComponents){
//     console.log(component)
// }

//We use continue and break to control the loop.
// With break the loop stops and exits the loop.
// With continue we continue to loop although the loop has met some condition.
let firstNames = ["Leonardo","Mathew","Indira","Ena"];
for(let name of firstNames){
    console.log(name)
    if(name === "Indira"){
        break;
    }
}

let lastNames = ["Dicaprio","McConory","Kastratovic","James"];

for(let lastName of lastNames){
    console.log(lastName);
    if(lastName === "McConory"){
        continue;
    }
}

