


// let a = 10;
// let b = 20;
// let c = 10;

// let result = a + b;

// let res = a + b + c;

// console.log(result);

// console.log(result);

// console.log(result);

// console.log(result);

// console.log(result);


function sum() {
    let res = a + b;
    console.log(res);
}

// sum();
// sum();
// sum();
// sum();


function sumOfTwo(num1, num2) {
    if(typeof num1 === "string" || typeof num2 === "string"){
        console.log("Wrong inputs!");
    }
    else {
        let result = num1 + num2;
        console.log(result);
    }
}

let inputFirst = document.getElementById('first');
let inputSecond = document.getElementById('second');
let btn = document.getElementById('calcBtn');


btn.addEventListener('click', function() {
    sumOfTwo(parseInt(inputFirst.value), parseInt(inputSecond.value));
});

let array = [1, 3, 4];
let myArray = [1, 3, 44];

function displayItems(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

displayItems(array); //   => displayItems([1, 3, 4])
displayItems(myArray); // => displayItems([1, 3, 44])
displayItems([1,2,3,4,5]);// => displayItems([1,2,3,4,5])
displayItems("Martin"); // => displayItems("Martin")
//this will not work
displayItems(false);


