let array = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

let monday = array[0];
let thursday = array[3];

array[5] = "weekend";
// array[6] = "weekend";

let arrayLength = array.length;
// alert(arrayLength);

let lastElement = array[array.length - 1];
array[array.length - 1] = "weekend";

// Bad practice
array[array.length] = "no such day";
// alert(array.length);

//Good practice
array.push("again no such day", "please stop adding new days", "stop!!!!");
array.unshift("before before monday", "before monday");
//alert(array[0]);
//alert(array[1])

//alert(array.length)

// [] + [] = ""
let array1 = [1, 2, 3] + [ 4, 5]
//alert(typeof(array1)) // string

// alert(array[5]);
// alert(array[6]);

// spread operator ES5
// doesnt modify the existing array
let newArray = [...array, 'new element'];

let number1 = 10;
let number2 = 20;
let number3 = 30;
let number4 = 120;

let numberArray = [number1, number2, number3, number4];

let deletedElement = numberArray.pop();
// alert(numberArray.length);
// alert(deletedElement);
let deletedZeroIndexedElement= numberArray.shift();
alert(deletedZeroIndexedElement);
alert(numberArray[0])



