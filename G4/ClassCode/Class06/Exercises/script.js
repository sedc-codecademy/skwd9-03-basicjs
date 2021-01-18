console.log('Exercise script here!');

// Exercise 01
let firstDiv = document.querySelector("div");
console.log(firstDiv);
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
let lastEl = document.getElementsByTagName("body")[0].lastElementChild;
console.log(lastEl);
let lastDiv = lastEl.previousElementSibling;
console.log(lastDiv);
let header3last = lastDiv.getElementsByTagName("h3")[0];
let header1last = header3last.previousElementSibling;
let paragraphSecondText = document.getElementsByClassName("second")[0].innerText;;
document.querySelector("text").innerText += " text!";
header3last.innerText = "We changed text from JS";
header1last.innerText = "I am also changed from JS";


// Exercise 02
function weightInChickens(weight, displayResultElement){
    if(!isNaN(weight)){
        let result = weight / 0.5;
        displayResultElement.innerHTML = `<h3> ${weight}KG is ${result} <img src="chicken.png" style="height:5vh"></h3>`
    } else {
        displayResultElement.innerHTML = `<h3> Sorry! Wrong input! Refresh the page again! </h3>`
    }
}

let resultDiv = document.getElementById("result");
let input = parseInt(prompt("Please enter how much you weigh:"));
weightInChickens(input, resultDiv);