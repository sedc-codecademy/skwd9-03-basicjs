var score = prompt("Enter score"); // prompt returns string
console.log (typeof(score)); //string
console.log(score);

var score2 = parseInt(score); //converts the parameter to whole number
console.log (typeof(score2)); //number

var decimalNumberAsString = "12.4";
console.log(parseInt(decimalNumberAsString));
console.log(parseFloat(decimalNumberAsString));

if(score > 51){
    // score > 51
}
else{
  // if score < 51 or score == 51
} 

if(score2 > 51){
    console.log("Passed");
}
else if(score2 === 51){
    console.log("Must do another exercise");
}
else{
    console.log("Failed");
}