let ourHeader = document.getElementById("myTitle");
console.log(`Our first header: ${ourHeader}`);
console.log(`Our first header text: ${ourHeader.innerText}`);

console.log("=====Access by class======");
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(`Our paragraphs: ${ourParagraphs}`);
console.log(`Our paragraphs length: ${ourParagraphs.length}`);
console.log(`First paragraph's text: ${ourParagraphs[0].innerText}`);
let secondParagraph = document.getElementsByClassName("second");
console.log(`Second paragraph: ${secondParagraph}`);
console.log(`Second paragraph's text: ${secondParagraph[0].innerText}`);

console.log("=====Access by tag======");
let paragraphs = document.getElementsByTagName("p");
console.log(`Paragraphs length: ${paragraphs.length}`);
console.log(`Third paragraph ${paragraphs[2].innerText}`);

console.log("=====Access by css selectors======");
let queryParagraph = document.querySelector(".myParagraph");
console.log(`QueryParagraph: ${queryParagraph.innerText}`);
let allParagraphs = document.querySelectorAll("p");
console.log(`Paragraphs: ${allParagraphs}`);
console.log(`Paragraphs length: ${allParagraphs.length}`);

console.log("=====Siblings======");
let header = document.getElementsByTagName("h1")[0];
let nextSibling = header.nextElementSibling;
console.log(`Next element sibling's text: ${nextSibling.innerText}`);
let previousSibling = nextSibling.previousElementSibling;
console.log(`Previous element sibling's text: ${previousSibling.innerText}`);

console.log("=====Parent======");
let firstParagraph = paragraphs[0];
let parentDiv = firstParagraph.parentElement;
console.log(`Parent div's inner text: ${parentDiv.innerText}`);
console.log(`Parent div's text content: ${parentDiv.textContent}`);
console.log(`Parent div's inner html: ${parentDiv.innerHTML}`);
parentDiv.innerHTML += "<p>This is the added paragraph!</p>"

console.log("=====Children======");
let firstDiv = document.getElementById("main");
let firstDivChildren = firstDiv.children;

let myDiv = document.getElementsByClassName("myDiv")[1];
let myDivFirstChild = myDiv.firstElementChild;
let myDivLastChild = myDiv.lastElementChild;
console.log(`myDivFirstChild: ${myDivFirstChild.innerText}`);
console.log(`myDivLastChild: ${myDivLastChild.innerText}`);

console.log("=====Changing content======");
let thirdParagraph = document.getElementsByTagName("p")[2];
thirdParagraph.innerText = thirdParagraph.innerText + "This is really cool!";


let spanElement = document.createElement("span");
spanElement.innerText = "This is our created span";
spanElement.setAttribute("class", "mySpan");
let secParagraph = document.getElementsByTagName("p")[1];
secParagraph.appendChild(spanElement);




