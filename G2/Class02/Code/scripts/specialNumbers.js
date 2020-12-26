var a = 3/"test";
console.log("Value of a");
console.log(a);
console.log("Type of a");
console.log(typeof(a));

//NaN means not a number, but we don't know the exact value
console.log(a==NaN); //compare the values
console.log(a===NaN); //compare the values and types

console.log(isNaN(a));

var text = "Text";
console.log(isNaN(text)); //is the value smth that is not  a Number
console.log(Number.isNaN(text));//is the type Number, but the value isn't

var c = Infinity; //Infinity is value
console.log("Value of c is: ");
console.log(c);
console.log("Type of c is: ");
console.log(typeof(c));

var d = Infinity;
console.log("c==d");
console.log(c==d);
console.log("c===d");
console.log(c===d);