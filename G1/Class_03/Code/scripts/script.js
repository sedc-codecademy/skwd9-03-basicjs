console.log("We are live");

//SWITCH
// var today = prompt("Please enter the day: ");
// var result = today.toLowerCase();
// switch(result){
//     case "monday":
//         alert("You have a class today.");
//         break;
//     case "thesday":
//         alert("You can rest");
//         break;
//     case "wednesday":
//         alert("You have a class today");
//         break;
//     case "thursday":
//     case "friday":
//         alert("you can rest");
//         break;
//     case "saturday":
//         alert("Check the schedule");
//         break;
//     case "sunday":
//         alert("Sunday is for rest");
//         break;
//     default:
//         alert("Sorry the input is not a day of the week");
// }
// This is the case with if else we can do the same with switch as written above
// if(today === 'monday'){

// }else if(today === 'tuesday'){

// }else if(today === "wednesday"){

// }else{

// }

// Login system

// var userName = 'damjan12345';
// var password = 'hellosedcg1';
//  var userNames = ['damjan12345','gjorge12345','velimir12345'];
//  var passwords = ['hellosedcg1','hellosedcg2','hellosedcg3'];
// if(userName === userNames[0] && password === passwords[0]){
//     alert("You have logeed in");
// }
//Functions
//Simple printing function declaration
function sedcGreet() {
    alert('Hello from SEDC, G1');
}
// Function calling
// sedcGreet();
// sedcGreet();
// sedcGreet();
// sedcGreet();
// sedcGreet();

function writeGreetingToHtml(){
    document.write('Hello from SEDC G1');
}

//console.log(sedcGreet());
//sedcGreet();


//Function with arguments
// var firstNameUserInput = prompt("Please enter your first name");
// var lastNameUserInput = prompt("Please enter your last name");

// function greetWithParams(firstName, lastName){
//     alert(`Hello there ${firstName} ${lastName}`);
// }
// greetWithParams(firstNameUserInput, lastNameUserInput);


// function isUserLoggedIn(isLoggedIn){
//     if(isLoggedIn){
//         console.log(`You have sucessfully logged in!`);
//     }
//     console.log('Home page');
// }
// isUserLoggedIn(false);


// function myFunction(x, y) {
// 	let myVar = x * y;
// 	console.log(myVar);
// }

// myFunction(1,3);	
// myFunction(2,5);
// myFunction(100,232131);

// Functions are made to return something a speficif data type which we can use later on on some other place!
// One function can return one and only one value

//Declare a variable how many times are we calling a specific function
// var calledTimes = 0;
// function sumNumber(x,y){
//     var result = x + y;
//     return result;
//     console.log('Nesto tuka');
//     console.log('Ovoj kod nikogas nema da se izvrsi');
// }

// function uselessFunction(){
//     return;
//     console.log("Nesto bitno");
// }
// console.log( "Ovde ja povikuva useless function" + uselessFunction());


// var result1 = sumNumber(1,3);

// function substractNumbers(x,y){
//     //We incremet that variable every time we are calling the specific function
//     calledTimes++;
//     var substractResult = x -y;
//     return substractResult;
// }

// function multiplyNumbers(x,y){
//     var multiplyResult = x * y;
//     return multiplyResult;
// }

// function devideNumbers(x,y){
//     var devideResult = x / y;
//     return devideResult;
// }

// var substractedResult = substractNumbers(10,7);
// var substractedResult1 = substractNumbers(12,3);
// var substractedResult2 = substractNumbers(8,2);
// console.log(substractedResult);
// //We write in the console how many times the function was called
// console.log(`We called substractNumbers ${calledTimes} times`);

//Parameters and argumets mismatch
function turnOnPc(isCablePluggedIn,buttonPress,isMonitorTurnedOn,electricityVoltage) {
    let firstName = 'damjan';// This variable has differnet scope then the firstName variable in funcWithFuncParam function
    alert(`The cable  is ${isCablePluggedIn}ly plugged in, the button is ${buttonPress}ly the monitor is ${isMonitorTurnedOn}ly with ${electricityVoltage} V`);
}

// turnOnPc(true,true,false,380);
// turnOnPc(true,true,false,280,'AMD Ryzen 5','NVidia');
// turnOnPc(true,true);

function funcWithFuncParam(age = 28, dispalyAge = function(){console.log(`The age is ${age}`)}){
    let firstName = 'damjan'; // This variable has differnet scope then the firstName variable in turnOnPc function
    console.log(`Hello from main function ${dispalyAge()}`);
}
//funcWithFuncParam(30);

// SCOPES

// There are 3 main scopes in Javascript : global, function, code block scope
// With let you can not declare multiple variables with the same name. It prevents you and throws an error

// let globalNumber = 3;
// let globalNumber = 3; //this trows error because we can not have two variables with the same name in the same scope
// function changeGlobalNumber() {
//      let globalNumber = 5;
// }
// changeGlobalNumber();
// console.log(`The global number value is now ${globalNumber}`);

// var globalNumber = 3;
// var globalNumber = 3; //this passes and it shouldn't. var is not preventing us from having two variables with the same name in same scope
// function changeGlobalNumber() {
//      let globalNumber = 5;
// }
// changeGlobalNumber();
// console.log(`The global number value is now ${globalNumber}`);


let x = 3;
function a() {
    console.log('We are in a function scope');
    console.log(x);
    x = 5;
    function b() {
        console.log('We are in b function scope');
         let x = 9;
         console.log('New variable x declared')
         console.log(x);
    }
    b();
    console.log(`We are in a scope but b is executed`);
    console.log(x);
}
console.log('Before a function is called');
console.log(x);
a();
console.log("We are in global scope but a is executed");
console.log(x);

// Global variable declaration inside a function

function codeScopeExample(hasValue = true) {
    if(hasValue){
        var dog = "Rex"; 
    }
    console.log(`This is the dog name ${dog}`); // If we decalare a variable in the code scope with var we can access it in the function or global scope
}

codeScopeExample();

// function codeScopeExampleWithLet(hasValue = true) {
//     if(hasValue){
//         let dog = "Rex";
//         if(dog[0] === 'R'){
//             console.log(dog);
//         }
//     }
//     console.log(dog); // We can not access Rex here cause it's in an other block scope cause it is defined with let not with var
// }
var newVariable = "new example";
let newLetVariable = "new let example";
console.log(window.newVariable); // in the window object var variables are initialized and let are not
console.log(window.newLetVariable);  // in the window object var variables are initialized and let are not--
//codeScopeExampleWithLet();