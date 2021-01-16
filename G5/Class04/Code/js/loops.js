// // LOPPS - WHILE

// let x = 3;

// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// console.log("While loop finished");

// while (x > 0) {
//     console.log(x);
//     x--;
// }

// console.log("While loop finished;");

// //DON'T TRY THIS AT HOME!
// // while(true) {
// //     console.log(1);
// // }

// let playing = true;
// while (playing) {
//     console.log(playing);
//     playing = false;
// }



// let numbers = [1, 22, 3, 24, 15, 10];
// console.log(numbers);

// let i = 0;
// console.log("Printing the array elements")
// while (i <= numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }

// let index = 1;
// let numbersArr = [];
// while (index <= 50) {
//     numbersArr.push(index);
//     index++;
// }

// let count = 0;
// console.log("Print the values from numbersArr");
// while (count < numbersArr.length) {
//     console.log(numbersArr[count]);
//     count++;
// }


// // EXAMPLE from class

// let numArray = [10, 22, 102, 15, 300, 1, 25, 9];

// function printArray(arr) {
//     let i = 0;
//     while (i < arr.length) {
//         console.log(arr[i]);
//         i++;
//     }
// }

// printArray(numArray);

// function findMax(arr) {
//     let max = -Infinity;
//     let c = 0;
//     while (c < arr.length) {
//         if (arr[c] > max) {
//             max = arr[c];
//         }
//         c++;
//     }
//     return max;
// }


// console.log(`The max value in the array is ${findMax(numArray)}`);



// let number = "1250";
// let counter = 0;
// console.log("The number " + number + " is consisted of the following numbers");
// while (counter <= number.length - 1) {
//     console.log(parseInt(number[counter]));
//     counter++;
// }


// // FOR LOOPS 
// console.log("FOR LOOPS")
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// let days = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ];

// console.log("The week has the following days:")
// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }

// console.log("And I have lectures in SEDC on:");
// for (let i = 0; i < days.length; i++) {
//     let day = days[i];
//     if(day === "Tuesday" || day === "Thursday"){
//         console.log(day);
//     }
// }

// console.log("The days of the week in reverse order are:")
// for(let i = days.length - 1; i >= 0; i--){
//     console.log(days[i]);
// }


// console.log("For OF")
// for(let day of days){
//     console.log(day);
// }


// console.log("=========== BREAK AND CONTINUE ===================")
// for(let i = 0; i < days.length; i++) {
//     if(days[i] === "Thursday"){
//         break;
//     }
//     console.log("Break: " + days[i]);
// }

// for(let i = 0; i < days.length; i++){
//     if(days[i] === "Thursday"){
//         continue;
//     }
//     console.log("Continue: " + days[i]);
// }

// function searchForDay(day) {
//     for(let i = 0; i < days.length; i++) {
//         if(days[i] === day){
//             console.log("Found " + days[i]);
//             break;
//         }
//         console.log("Test");
//     }
// }

// searchForDay("Wednesday");






let totalAmount = 10000;

function cashOut(amountToWithdraw) {
    totalAmount = totalAmount - amountToWithdraw;
    return totalAmount;
}

console.log(cashOut(5000));

alert(cashOut(5000));