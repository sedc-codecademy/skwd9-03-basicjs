// VAR

// Function scoped
// Added in global object window
var secondName = "Second";
function testVar() {
    for(var i = 0; i < 5; i++) {
        console.log(i)
    }
    if (true) {
        var firstName = "Goce";
    }
    // Accessible in whole function scope
    console.log(firstName);
}

// Not accessible outsite the function block - Error - Reference error - firstName is not defined
// console.log(firstName)

// test();

// LET

// BLOCK SCOPED
// Is not added into the global object window
let middleName = "midle";
function testLet() {
    for(let i = 0; i < 5; i++) {
        console.log(i)
    }
    if (true) {
        let firstName = "Goce";
        console.log(firstName);
    }
    // Not accessible outside the block where it is defined - Error - Reference error - firstName is not defined
    console.log(firstName);
}


//testLet();

//CONST

let age = 23;
age = "age";
console.log(age);

const group = "G6";
group = "G7";
console.log(group);


