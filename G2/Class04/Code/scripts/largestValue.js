let numbers = [1,4,3,34,67,45,7,8,9,23];
let anotherArray = [1,576,8,34,67,45,7,8,9,23];

function findLargestvalue(input){
    let counter = 0;
    let max = -Infinity;

while(counter < input.length){
    if(input[counter] > max){
        max = input[counter];
    }
    console.log(`Value of max is ${max}`);
    counter++;
}
return max;
}

let largestValueOfNumbers = findLargestvalue(numbers);
console.log(`The largest value is ${largestValueOfNumbers}`);
let largestValueOfAnotherArray = findLargestvalue(anotherArray);
console.log(`The largest value is ${largestValueOfAnotherArray}`);


//counter = 0; 1 > -Infinity => max = 1
//counter = 1; 4 > 1  => max = 4
//counter = 2; 3 > 4 => max = 4
//etc..