console.log("Our script is connected");
//String concatination
var firstName = "Bob";
var lastName = "Bobsky";
//Ova e standarden nacin na string concatination
console.log("The full name of this person is " + firstName + " " + lastName);
// String concatination so '' single quotes
console.log('The full name of this person is ' + firstName + ' ' + lastName);
// Ova frla greska bidejki ne mozeme da koristime ' vo nasiot string bidjeki JS go prepoznava kako kraj na string-ot
console.log('Today it\'s a wonderful day');
//String concatination vo JS koj e dosta korisen i pravi escape na site znaci koi se specificni.
console.log(`Today it's my day.
            And the name of this person is ${firstName} ${lastName}`);
//Sekogas koga sobirame string so number vo JS dobivame nazad concatinated string
var result = 2 + "4";
console.log(`The result of this sum is ${result}`);

//Difference between undefined and null
console.log(typeof null === "object"); // This returns boolean if the type of null is object then true if not then false
console.log(typeof(null)); // This returns the actual type of null

var car;
console.log(typeof car === undefined); // This returns false becasue we need to use "undefined" to return true

//NaN
console.log(typeof(NaN)); // This returns number
// Razlikata pomegu + i ostanati aritmeticki operacii pomegu string i broj e sto + vrakja concatinated string a ostanatite vrakjaat broj
var result1 = 10 / "2";
var result2 = "10" * 3;
var result3 = "10" -  5;
var result4 = "10" % 3;

console.log(result1);// 5
console.log(result2); // 30
console.log(result3); // 5
console.log(result4); // = 1

console.log(typeof(result3)); // this returns number

var result5 = 10 / "bob"; // = NaN
var result6 = "greg" * 2; // = NaN
var result7 = "true" - 3; // = NaN

console.log(result5);
console.log(result6);
console.log(result7);

console.log(isNaN(result5)); // = true
console.log(isNaN(result1)); // = false
console.log(isNaN(result6)); // = true
console.log(isNaN("Damjan")); // = true bug
// ES6 to the rescue with Number.isNaN()

console.log(Number.isNaN("Damjan")); // = false
console.log(Number.isNaN(result5));
console.log(Number.isNaN(result6));
console.log(Number.isNaN(result7));

// Razlika pomegu isNaN() i Number.isNaN() e toa sto isNaN proveruva dali samo nestoto ne e broj.
// Number.isNaN() proveruva dali nestoto e isNaN. I ja pravi pravata proverka sto ni treba

//Infinity
console.log(typeof Infinity === "number"); // This should return true

console.log(Infinity === Infinity + 1); // ova vrakja true bidejki JS ne e kompletno precizen so ogromni broevi
var a = 1 / 0;    // Infinity
var c = -1 / 0;    // -Infinity


//Comparison operations in JS
var firstNameBob = "Bob";
var lastNameBobsky = "Bobsky";
// These 4 strings should all be the same
var fullName = firstNameBob + " " + lastNameBobsky;
var fullName2 = `${firstNameBob} ${lastNameBobsky}`;
var fullName3 = firstNameBob + ' ' + lastNameBobsky;
var fullName4 = "Bob Bobsky";
// First comparison fullName === fullName2 --> true, true === fullName3 --> false, false === fullName4 --> false all expresion is false at the end
console.log(fullName === fullName2 === fullName3 === fullName4);
// Compares the things we got in the paranteses and fullName === fullName2 --> true, fullName3 === fullName4 --> true at the end true === true --> true
console.log((fullName === fullName2) === (fullName3 === fullName4));

//Logical operators &&
var logicalResult1 = true && true;
var logicalResult2 = false && true;
var logicalResult3 = true && false;
var logicalResult4 = false && false;

console.log(`The result from the && logical operator is ${logicalResult1}`);
console.log(`The result from the && logical operator is ${logicalResult2}`);
console.log(`The result from the && logical operator is ${logicalResult3}`);
console.log(`The result from the && logical operator is ${logicalResult4}`);

//Logical operators ||
var logicalResultOr1 = true || true;
var logicalResultOr2 = false || true;
var logicalResultOr3 = true || false;
var logicalResultOr4 = false || false;

console.log(`The result from the || logical operator is ${logicalResultOr1}`);
console.log(`The result from the || logical operator is ${logicalResultOr2}`);
console.log(`The result from the || logical operator is ${logicalResultOr3}`);
console.log(`The result from the || logical operator is ${logicalResultOr4}`);

//Logical operators !
console.log(!true); // This should return false
console.log(!false);// This should return true

// Structure operators
var score = 10;
var passingScore = 20;
var hasPassed = score >= passingScore; //Sekogas vrakja boolean
console.log(hasPassed);

console.log((4 + 7) > (1+9)); // ova vrakja true

console.log((4 > 2) && (2 < 3)); // vrakja true. Se operandite se eden izraz sam po sebe

// Default truthy values and default falsy values

console.log(`The result of ${''&& false}`);

console.log(`The result of ${0 && false}`);


//Inequality

var num = 5;
var numString = "7";

console.log(`This is numString to num comparison ${numString > num}`);

//Control structures

var wordGuessed = "watermelon";
var secretWord = "watermelon";
var totalPoints = 0;
// Ovde pisuvame if statement ako go pogodime cel zbor togas dobivame 1000 poeni
// if(wordGuessed === secretWord){
//     totalPoints = 1000;
//     console.log("You have won 1000 points");
// }

//ovde dodavame uste eden flow vo aplkacijata ako ne go pogodime zborot
// if(wordGuessed === secretWord){
//     totalPoints = 1000;
//     console.log("You have won 1000 points");
// }
// else{
//     totalPoints = -1000;
//     console.log("You have lost");
//     console.log(totalPoints)
// }
// Uste eden uslov ako ja pogodime prvata bukva vo zborot
if(wordGuessed === secretWord){
    totalPoints = 1000;
    console.log("You have won 1000 points");
}
else{
    if(secretWord[0] === wordGuessed[0]){
        totalPoints = 50;
        console.log("You have won 50 points for guessing the first letter");
        console.log(totalPoints);
    }
    else{
        totalPoints = -1000;
        console.log("You have lost");
        console.log(totalPoints);
    }
}

// Using prompt to get user input
var ageString = prompt("Please enter your age: "); // This returns a string always
alert(ageString);
let ageResult = ageString + 20; // This is concatinated string
console.log(ageResult); // = 28 (user input)20 = 2820
var realAgeNumber = parseInt(ageString); // Ova vekje e type number
var realAgeNumberDecimal = parseFloat(ageString);
console.log(typeof realAgeNumber === "number"); // Ova vrakja true

console.log(realAgeNumber + 20); // Ova vekje vrakja 48
console.log(realAgeNumberDecimal); // Ova vekje vrakja decimalen broj










