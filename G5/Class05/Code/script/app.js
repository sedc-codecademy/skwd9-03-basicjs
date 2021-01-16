
// ============== SELECTORS ====================

// let myFirstElement = document.getElementById('main');
// console.log(myFirstElement);

// let paragraphs = document.getElementsByClassName('myParagraph');
// console.log(paragraphs);
// console.log(paragraphs[0])

// let uniqueClassParagraph = document.getElementsByClassName('unique');
// console.log(uniqueClassParagraph);

// let divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(divs[1]);


// let myHeadingTag = document.querySelector('h1');
// console.log(myHeadingTag);

// let myHeadingById = document.querySelector('#myTitle');
// console.log(myHeadingById);


// let allHeaders = document.querySelectorAll('h1');
// console.log(allHeaders);

// let allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);
// console.log(allParagraphs[2]);



// ===================== Traversing through DOM tree ==========================

let myHeader = document.getElementById('myTitle');
let nextSibling = myHeader.nextElementSibling;
let previousSibling = nextSibling.previousElementSibling;

console.log(myHeader);
console.log(nextSibling);
console.log(previousSibling);

let parentElement = document.getElementsByClassName('unique')[0].parentElement;
// console.log(parentElement[0]);
console.log(parentElement);

// You can either get the parent or siblings in one line
// let headingParent = document.getElementById('myTitle').parentElement;\

//Or you can select the parent or siblings elements in multiple lines by using multiple variables
// let heading = document.getElementById('myTitle');
// let headingParent = heading.parentElement;


// let divsElements = document.querySelectorAll('div');
// let secondDiv = divsElements[1];
// let secondDivChildren = secondDiv.children;
// console.log(secondDivChildren);


// let firstChild = secondDiv.firstElementChild;
// let lastChild = secondDiv.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);


let firstHeader = document.getElementById('myTitle');
let test = document.getElementsByTagName('h1');
console.log(firstHeader.textContent);
console.log(firstHeader.innerText);

firstHeader.innerText = '';
console.log(firstHeader.innerText);

firstHeader.innerText = 'Hi there! I was changed through JS!';
console.log(firstHeader.innerText);

firstHeader.innerText += 'Ooops! I was changed again!';
console.log(firstHeader.innerText);


// firstHeader.textContent = 'Ooops! I was changed again!';

// setTimeout(function() {
//     firstHeader.innerText = 'Naaah! Not so cool page!';
//         setTimeout(function() {
//             firstHeader.innerText = 'I am joking! Still a good page!';
//         }, 2000)   
// }, 3000)



let testDiv = document.getElementById('test');

testDiv.innerHTML += '<p id="testParagraph">Hi I saw added through JS innerHTML</p>';


let namesArr = ['Martin', 'Angela', 'Dejan', 'Ivo'];
let list = document.getElementById('names');

function populateList(arr) {
    list.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        list.innerHTML += `<li>${arr[i]}</li>`;
    }
}

populateList(namesArr);

namesArr.pop();

populateList(namesArr);

namesArr.push('Anja');

populateList(namesArr);