// let firstName = "Martin";
// let lastName = "Panovski";

// let greet = `Hello there ${firstName} ${lastName}`;
// let message = "Hello there " + firstName + " " + lastName + " how are you?";


// let moeIme;
// let cenaProizvod;
// let daliVrne;


// let num1 = 50;
// let num2 = 70;

// if(num1 < 0) {
//     console.log("Please enter a positive number.");
//     let difference = 100 - num1;
// }
// if(num2 < 0) {
//     console.log("Please enter a positive number.");
//     let difference = 100 - num2;
// }

// console.log(difference);



// if(num1 === 1){

// }
// if(num1 === 2){
//     alert("You are rooster")
// }
// if(num1 === 3){
    
// }
// else {
//     console.log("Vnesi validna godina");
// }


// if(num1 === 1){

// }
// else if(num1 === 2){
//     alert("You are rooster");
// }
// else if(num1 === 3){
    
// }
// else {
//     console.log("Vnesi validna godina");
// }


// ******** Switch ***********

let day = "Tuesday";

switch(day) {
    case "Monday":
        console.log("Free day!");
        break;
    case "Tuesday":
        console.log("SEDC day!");
        break;
    case "Wednesday":
        console.log("Free day!");
        break;
    case "Thursday":
        console.log("SEDC day!");
        break;
    case "Friday":
        console.log("Free day!");
        break;
    case "Saturday":
        console.log("WEEKEND!");
        break;
    case "Sunday":
        console.log("WEEKEND!");
        break;
    default:
        console.log("Not such day in the week!");
        break;
}

switch(day) {
    case "Monday":
    case "Wednesday":
    case "Friday":
        console.log("Free day!");
        break;
    case "Tuesday":
    case "Thursday":
        console.log("SEDC day!");
        // break;
    case "Saturday":
    case "Sunday":
        console.log("WEEKEND!");
        break;
    default:
        console.log("Not such day in the week!");
        break;
}

let number = 5;

switch(number) {
    case 1:
        console.log("Something");
        break;
    case 2:
        console.log("Something");
        break;
    case 5:
    console.log("Hooray!");
    break;
    default:
        console.log("Error!");
        break;
}






