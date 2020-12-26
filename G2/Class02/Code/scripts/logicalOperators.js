//AND - two operands must be true to evaluate to true
console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false

//OR - at least one of the operands must be true to evaluate to true
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

//! - gives the opposite value
console.log(!true); //false
console.log(!false); //true

//COMPARISON

var pass = 51;
var score = 60;
var hasPassed = score>=pass;
console.log("hasPassed");
console.log(hasPassed);
console.log(typeof(hasPassed));

console.log("(5+2)>(7+3)");
console.log((5+2)>(7+3));

var a = 5+2;
var b = 7+3;
var c = 3;
var d = 2;
console.log("(a+c)<(b-d)");
console.log((a+c)<(b-d));

var comp1 = c>d; //true
var comp2 = a>b; //false
var comp3 = 5>2; // true
console.log("comp1 && comp2");
console.log(comp1 && comp2); // false
console.log("comp1 || comp2");
console.log(comp1 || comp2); // true

console.log("comp1 && comp2 && comp3");
console.log(comp1 && comp2 && comp3); // false
console.log("comp1 || comp2 || comp3");
console.log(comp1 || comp2 || comp3); // true

var a = "Hello";
console.log("!a");
console.log(!a);
console.log("!!a");
console.log(!!a);

var b = 0;
console.log("!b");
console.log(!b);
console.log("!!b");
console.log(!!b);


console.log("Cat"&&"Dog"); //Dog decides - truthy result
console.log("Cat" && 0); //0 - falsy result 

console.log(!"Cat" && true); //false
console.log(!null); // true

console.log("0==null");
console.log(0==null);

console.log(5=="5"); //true
console.log(5==="5"); //false

console.log('5<"43"');
console.log(5<"43"); //true - 43 is converted to Number

console.log('"2"<"12"');
console.log("2"<"12"); //alphabetical comparison

console.log('"2"<"32"');
console.log("2"<"32"); //alphabetical comparison

console.log('"12"<"2"');
console.log("12"<"2"); //alphabetical comparison

console.log('"abc"<"foo"');
console.log("abc"<"foo"); //alphabetical comparison

console.log('"12"<"abc"');
console.log("12"<"abc"); //alphabetical comparison

console.log('12>"Foo"');
console.log(12>"Foo"); //Foo can not be converted to Number, so it is NaN