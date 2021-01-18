console.log('Testing cool page script...');

// --------------- DOM -----------------

// Selectors
console.log('-------------- Selectors ---------------');
// id selector - always returns one element
let myHeader = document.getElementById('myTitle');
console.log(myHeader);

// class selector - always returns array of elements
let paragraphs = document.getElementsByClassName('myParagraph');
console.log(paragraphs);
let paragraphArrayWithOneElement = document.getElementsByClassName('second');
console.log(paragraphArrayWithOneElement); // will return array with one element

// tag selector - returns array of elements
let paragraphTags = document.getElementsByTagName('p');
console.log(paragraphTags);

// query selectors
let firstDiv = document.querySelector('.myDiv');
console.log(firstDiv);
let allParagraphsQuery= document.querySelectorAll('.myParagraph');
console.log(allParagraphsQuery);

// Traversing
console.log('-------------- Traversing through DOM ---------------');
let childPar = document.querySelector('.child-par');
console.log(childPar);

// sibling selector
let nextSibling = childPar.nextElementSibling;
console.log(nextSibling);
console.log(nextSibling.previousElementSibling);

// parent selector
let parentEl = childPar.parentElement;
console.log(parentEl);

// child selectors
let childrenOfParent = parentEl.children;
console.log(childrenOfParent);

console.log(parentEl.firstElementChild);
console.log(parentEl.lastElementChild);

// Changing content
console.log('-------------- Changing content in DOM ---------------');
let header = document.querySelector('#myTitle');
console.log(header);
console.log(header.textContent);
console.log(header.innerText);

header.innerText = '';
header.innerText = 'I am new header from JS!';

let students = ['Jana', 'Marko', 'Jelena', 'Hristijan', 'Nina', 'Gligor'];

let myList = document.getElementById('list');

for(let student of students){
    myList.innerHTML += `<li>${student}</li>`;
}
