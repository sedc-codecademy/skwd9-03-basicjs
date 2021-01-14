console.log('JS was here...');

// Task 01 
// Write a function that will have an array as an argument and will determine the largest and smallest number.
// It will return a string that says: The largest number is ?? and the smallest is ?? 
let numbersArray = [-5, 3, 98, 0, -5672, 10000001, 16, -256];
let numbersArray2 = [9, 1875, -44444, 71];

function findMinAndMax(array){
    let min = Infinity;
    let max = -Infinity;

    for(let number of array){
        console.log(`Number to check: ${number}`);
        console.log(`Minimum before check: ${min}`);
        console.log(`Maximum before check: ${max}`);
        console.log('Checking..............');
        if(number > max) {
            max = number;
        }
        if(number < min){
            min = number;
        }
        console.log(`Minimum after check: ${min}`);
        console.log(`Maximum after check: ${max}`);
        console.log('============== END OF CYCLE ===============');
    }

    return `The largest number is ${max} and the smallest is ${min}.`;
}
console.log(numbersArray);
// console.log(findMinAndMax(numbersArray));

// Task 02
// Write a function that will have an array of student names as an argument. It will ask the user to enter a name and the function should check if there is such a student in the array. It should return a string that says: 'Student ?? is in the list' or 'There is no such student'

function checkStudentName(names, username){
    let isInList = false;
    for(let i = 0; i < names.length; i++){
        if(names[i] === username){
            isInList = true;
        }
    }
    // true === true => true    // false === true => false
    // if(isInList){
    //     return `Student ${username} is in the list`;
    // } else {
    //     return 'There is no such student!';
    // }

    // !true => false
    // !false => true
    // or
    // if(!false)
    // if(!isInList){
    //     return 'There is no such student!';
    // } else {
    //     return `Student ${username} is in the list`;
    // }

    // or 
    // guard clauses
    // write the negative scenarios first
    if(!isInList){
        return 'There is no such student!';
    }
    return `Student ${username} is in the list`;
}

let students = ['Aleksandar', 'Jana', 'Sanja', 'Ceca', 'Ivan', 'Gjorgje', 'Gligor', 'Hristijan', 'Ilija'];
let studentName = prompt('Enter student name:');

// console.log(checkStudentName(['Pero', 'Blazo', 'Bapco'], 'Cacko'));
console.log(checkStudentName(students, studentName));


// Task 03
// Write a JavaScript function to remove 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Return new array with valid results.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function validateArray(array){
    let newArray = [];
    for(let element of array){
        // if(element !== null || element !== 0 || element !== '' || element !== false || element !== undefined || !isNaN(element)){
        //     newArray.push(element);
        // }
        if(element){
            newArray.push(element);
        }
    }
    return newArray;
}
let validArray = validateArray(sampleArray);
console.log(validArray);



// function dobrovolecGenerator(){
//     let number = Math.floor((Math.random() * 22) + 1);
//     return number;
// }
// console.log(dobrovolecGenerator());