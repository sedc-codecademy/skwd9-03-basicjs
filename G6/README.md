# Basic JS 📕

## What are JavaScript and EcmaScript? 🔹

  ECMAScript is a programming language itself, specified in the document ECMA-262. In other words, ECMA-262 is the specification of     the programming language ECMAScript.
  JavaScript, on the other hand, can be viewed as a "dialect" of ECMAScript. It conforms to the ECMAScript specification while also     providing additional features not described in the specification.
  JavaScript also is an interpreted language, not a compiled language and it's syntax is heavily inspired by C++ and Java.
  
## Writing a JavaScript program 🔹

  JavaScript programs can either be placed directly into the HTML file (BAD PRACTICE) or they can be saved in external files (GOOD       PRACTICE). 
  <p align="middle">
     <img src="https://github.com/sedc-codecademy/skwd9-03-basicjs/blob/main/G6/Class01/Presentation/JavaScript_01-Intro/assets/img/script%20tags%20bad.png" width="250px" height="200px" />
<img src="https://github.com/sedc-codecademy/skwd9-03-basicjs/blob/main/G6/Class01/Presentation/JavaScript_01-Intro/assets/img/external_file%20js.png" width="250px" height="200px" />
  </p>

## Variables 🔹

 JavaScript variables are containers for storing data values.
 
 Two steps required in order to use a variables:
 
  * Declaration (Declaring a variable)
  
  * Initialization (Giving the variable a value)
 
 The general rules for constructing names for variables (unique identifiers) are:
 
* Names can contain letters, digits, underscores, and dollar signs.

* Names must begin with a letter

* Names can also begin with $ and _

* Names are case sensitive (y and Y are different variables)

* Reserved words (like JavaScript keywords) cannot be used as names

## Primitive Data Types in JavaScript 🔹

* String
* Number
* Boolean
* Undefined
* Null

## Null VS Undefined 🔹

In JavaScript, undefined is a type, whereas null an object.

Undefined means a variable is declared, but no value has been assigned to it (The variable is declared, but not defined).

Null in JavaScript is an assignment value (It means nothing for the moment). You can assign it to a variable.

## VAR VS LET

Var:
  * Function scoped (see example in code from class)
  * Store the variable as property in global window object

Let:
  * Block scoped (see example in code from class)
  * Does not store the variable as property in global window object

## Combining strings (concatanation)
```
"Happy" + " " + "new" + " " + "year!"

// using variables

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Template strings using ``

let group = "G6";
let comment = `${group} rocks!`;

```
## NaN ( Not a Number)

The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.

  * Any mathematic operation performed between two operands without both to be able to be interpreted as regular numbers will result     in producing NaN.
  * The value of this result will be NaN, but the type will be "number".
  
```
let result = 100 / "text" => NaN
typeof(result) => "number"

// Be aware of following:
result == NaN => false
resut === NaN => false

// Solution using isNaN() method from the global object
isNaN(result) => true

// Another problem if using isNan()
isNaN("some string") => true

// Final solution provided in ES6 specifications, Number.isNan(result) => typeof(result)=== "number" && window.isNaN(result)
Number.isNan(result) => true
Number.isNan("apples") => false
```

### Falsy values:
  * false
  * "" - empty string
  * 0, -0
  * null
  * undefined
  * NaN
  
### Truthy values => everything else

## Logical operators:
  If a value can be converted to true, the value is so-called truthy. If a value can be converted to false,
  the value is so-called falsy.
  
  * && (AND) => expr1 && expr2 (If expr1 can be converted to true, returns expr2; else, returns expr1.)
                
  * || (OR) => expr1 || expr2 (If expr1 can be converted to true, returns expr1; else, returns expr2.)
  
  * ! (NOT) => !expr (Returns false if its single operand can be converted to true; otherwise, returns true.)

