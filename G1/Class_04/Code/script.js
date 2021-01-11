
//Function body is everythiing that is in the function scope between the curley braces
//Function signiture is the function name and the params of the function
function printName(inputName,inputAge){

}

// This is array declaration. We can store multiple values in a collection
// Indexes are places where the elements are stored in the array
// Indexes start from 0 !important
let names = ["Greg", "Bob", "Jill", "Max"];
console.log(names);

let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);

let emptyList = [];
console.log(emptyList)
// We can directly print empty list
console.log([]);

let empty;
console.log(empty); // undefined

// Arrays in javascript can be contained of multiple values of different types
let multiTypesArray = ["string",20,true,{age: 27,name:"Damjan"},[912,214]];
console.log(multiTypesArray);

console.log(names[1]);
// This will return undefined because we do not have an element on that place in the list
console.log(names[4]);
// This way we can change the elements in our list
names[2] = "Rex";
console.log(names[2]);
console.log(names);

// I want to see how many elements are in numbers
let numberOfElementsInNumbers = numbers.length;
console.log(numberOfElementsInNumbers);

let ten = 10;
//Not a good way to take the last element of array. Arrays are dynamic
// We can use variables that can be parsed into numbers as indexes in arrays.
let lastElementInNumbers = numbers[ten];

//Good way to take the last element in array
let goodWayToTakeLastElement = numbers[numbers.length - 1];
console.log(goodWayToTakeLastElement);

// This will return the last elemnt
let getLastNameFromNames = names[names.length - 1];
let numberOfElement = names.length;
console.log(`The last element in the array names is: ${getLastNameFromNames}`);
console.log(`The number of elements in names array is:  ${numberOfElement}`);


// Remeber 1st element is at index 0 in arrays.
// Last element is at array.length - 1 position in the array

//We add an element at the last place in array
let damjan = "Damjan";
 names[names.length] = damjan;
 console.log(names);

 //Adding a new element at the beggining of array
 // NOT THE RIGHT WAY DO NOT USE THIS
//  let gjorge = "Gjorge";
//  names[-1] = gjorge;
//  console.log(names);

//Adding Items in array with methods
// Right way

// Adding element in array at the last place
names.push("novo ime")
console.log(names);

//We can add multiple items in one array with push
// push method returns the number of elements in the array === array.length
let numberOfElements = names.push("edno ime","drugo ime")
console.log(`The number of elements in the names array is ${numberOfElements}`);
console.log(names);

//Adding an element at the begiining of array method
names.unshift("very first name")
console.log(names);


// Removing elements from an array functions

//Remove the last element
console.log(`The elements in the names array are : ${names}`);
names.pop();
console.log(`The elements in the names array are : ${names}`);
// pop returns the last element that is removed from the array
console.log(names[names.length -1]);
let modifiedArray = names.pop()
console.log(modifiedArray);
console.log(names.length)
console.log(modifiedArray.length)

// With shift we can remove an element from the begining of an array
names.shift()
console.log(names);





