let userInput = prompt("Enter how much money do you have");

let convertedToNumber = parseInt(userInput);
console.log(convertedToNumber);
if(convertedToNumber >= 1000){
    console.log("You can buy yourself some food");
} else if (convertedToNumber < 1000){
    console.log("Go to work!!!");
}
else{
    console.log("Enter some number");
}