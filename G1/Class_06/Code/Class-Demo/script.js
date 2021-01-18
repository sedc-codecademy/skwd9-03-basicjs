// Getting html element by it's id tag
let app = document.getElementById("main");
console.log(app);

// Getting element by tag name
// let headers = document.getElementsByTagName("h1");
// console.log(headers);
// let getFirstHeader = headers[0];
// console.log(getFirstHeader);

// Get elements by class name
// let paragraphs = document.getElementsByClassName("myParagraph");
// console.log(paragraphs);


// Get element text
//Like this we take the value in the h1 element
// let firstHeaderTextValue = document.getElementById("firstHeader").innerText;
// console.log(firstHeaderTextValue);

// ---------------- ANOTHER WAY TO ACCESS HTML ELEMENTS --------------------

// Getting elements by query selector
// let secondParagraph = document.querySelector("#secPar");
// console.log(secondParagraph);

// let getElementsByQuerySelectorAll = document.querySelectorAll(".myParagraph");
// console.log(getElementsByQuerySelectorAll);
// console.log(getElementsByQuerySelectorAll[2]);

// If we use query selector method for multiple elements that have the same class implemented we get the first element
// let getElementsByQuerySelector = document.querySelector(".myParagraph");
// console.log(getElementsByQuerySelector);

// -----------Naigating through DOM tree with parent, children, sibling properties--------

// We use the children property to get all the children of the specific element on the same level
// let mainSection = app.children[1];
// console.log(mainSection);
// let paragraphs = mainSection.children;
// console.log(paragraphs);

// Getting the last child element
// lastChild returns #text as node and not the actual element
// lastElementChild returns the last child as HTML element itself
// let lastChild = mainSection.lastElementChild;
// console.log(lastChild);
// Getting the first child HTML element of mainSection
// let firstChild = mainSection.firstElementChild;
// console.log(firstChild);


// Return last div child
// let getLastH1 = app.firstElementChild.lastElementChild;
// console.log(getLastH1);

// Get last H1 parent
// console.log(getLastH1.parentElement);

// Get first h1 element
// let firstH1 = app.firstElementChild.firstElementChild;
// let secondH1 = firstH1.nextElementSibling;
// console.log(secondH1);
// let thirdH1 = secondH1.nextElementSibling;
// console.log(thirdH1);

// ----------------Changing elements content------------------
let lastHeader = document.getElementsByTagName("h1")[3];
// When we want to access the text in a html element we use innerText
// We changed Last div child to Forth header
lastHeader.innerText = "Forth header";
lastHeader.innerText += " of my header div";

// If we want to add a whole new html element in my HTML document we need to use innerHTML property
// Difference between innerText and innerHTML is that innerText changes the text in some html element and innerHTML can
// create a new element.
// let mainSection = document.getElementById("mainSection");
// mainSection.innerHTML += 
// `<ol>
//     <li id="firstItem">Bred</li>
//     <li>Milk</li>
//     <li>Cheese</li>
//     <li>Soup</li>
// </ol>`;

// If we want to clear all the elements from a HTML tag we can assign the innerHTML to empty string

let mainSection = document.getElementById("mainSection");
mainSection.innerHTML = ``;

// Create new HTML elemet
let newElement = document.createElement("div");
console.log(newElement)



