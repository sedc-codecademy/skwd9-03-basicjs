function greeting(name, surname){
    console.log("Inside greeting");
    console.log(`Hello ${name} ${surname}`);
}

greeting("Petre", "Petrovski");


var firstName = prompt("Enter first name:");
var lastName = prompt("Enter last name:");
greeting(firstName, lastName);

console.log("========Example - prompting values inside the functions==================");
//========Example - prompting values inside the functions==================
function secondGreeting(){
    console.log("Inside secondGreeting");
    var fName = prompt("Enter first name:");
    var lName = prompt("Enter last name:");
    console.log(`Hello ${fName} ${lName}`);
}
secondGreeting();

console.log("===============Example Return values============");
//===============Example Return values============

function sum(a, b){
    var result = a+b;
    return result;
}

var myResult = sum(2,3);
console.log("The value of myResult: "+ myResult);

alert(sum(3,4)); // sum(3,4) == 7