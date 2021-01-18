// 1. Event handlers - VERY BAD

// function eventHandlerTesting() {
//     console.log('A tag has been clicked');
// }

// 2. Traditional Dom Event Handlers

// let link = document.getElementById('link');

// link.onclick = function logATagEvent() {
//     console.log('A tag has been clicked');
// }

// Anonymous function
// link.onclick = function () {
//     console.log('A tag has been clicked');
// }

// Passing a reference to a function
// link.onclick = logATagEvent;

// function logATagEvent() {
//     console.log('A tag has been clicked');
// }

// 3. Event Listeners

// let eventBtnExample = document.getElementById('eventBtnExample');

// eventBtnExample
//     .addEventListener('click', function logButtonClicked() {
//         console.log('Button has been clicked');
//     })

// Anonymous function
// eventBtnExample
//     .addEventListener('click', function () {
//         console.log('Button has been clicked');
//     })

// let counter = 0; // count how many times event has been clicked
// function logButton() {
//     counter++
//     console.log("Button has been clicked", counter);
// }

// Passing a reference to a function
// eventBtnExample.addEventListener('click', logButton);

// Passing arguments to a function inside an event listener

// let eventBtnExample = document.getElementById('eventBtnExample');

// function sayMyName(name) {
//     console.log(`Hi ${name}`);
// }

// eventBtnExample.addEventListener('click', function () {
//     sayMyName('Ivo');
// })

// Default parameter
// let eventBtnExample = document.getElementById('eventBtnExample');

// eventBtnExample.addEventListener('click', function (event) {
//     console.log(event)
// })

// Removing event listener
// let eventBtnExample = document.getElementById('eventBtnExample');

// function buttonClicked() {
//     console.log('Button has been clicked');

//     eventBtnExample.removeEventListener('click', buttonClicked);
// }

// eventBtnExample.addEventListener('click', buttonClicked)

// Event bubbling
// let eventBtnExample = document.getElementById('eventBtnExample');

// eventBtnExample.addEventListener('click', function() {
//     console.log('Button clicked');
// })

// document
//     .querySelector('body')
//     .addEventListener('click', function() {
//         console.log('Body has been clicked');
//     })

// document
//     .querySelector('#otherButton')
//     .addEventListener('click', function() {
//         console.log('Other button clicked')
//     })

// document.addEventListener('click', function() {
//     console.log('Document clicked');
// })

// Changing CSS property values

// let button = document.getElementById('changeColorBtn');
// let paragraph = document.getElementById('paragraph');

// console.log(paragraph)

// button.addEventListener('click', function() {
//     paragraph.style.backgroundColor = 'green';
// })

// Getting input value
// input.addEventListener('keydown', function(e) {
//     e.target.value
// })

// Exercise 1

// Selectors
let paragraph = document.getElementById("paragraph");
let fontSizePlus = document.getElementById("fontSizePlus");
let fontSizeMinus = document.getElementById("fontSizeMinus");
let colorRed = document.getElementById("colorRed");
let colorGreen = document.getElementById("colorGreen");
let bgColorYellow = document.getElementById("bgColorYellow");
let bgColorPink = document.getElementById("bgColorPink");

// Functions
function changeColor(color) {
    paragraph.style.color = color;
}

function changeBgColor(color) {
    paragraph.style.backgroundColor = color;
}

function changeFontSize(type) {
    let currentFontSize = paragraph.style.fontSize || "16px";

    // if (!paragraph.style.fontSize) {
    //     currentFontSize = '16px';
    // }

    if (type === 'plus') {
        let newFontSize = parseInt(currentFontSize) + 2;
        paragraph.style.fontSize = newFontSize + 'px';
    } else if (type === 'minus') {
        let newFontSize = parseInt(currentFontSize) - 2;
        paragraph.style.fontSize = newFontSize + 'px';
    } else {
        console.log('there has been an error');
    }
}

// Event handlers

colorRed.addEventListener('click', function() {
    changeColor('red');
})
colorGreen.addEventListener('click', function () {
    changeColor('green');
})

bgColorYellow.addEventListener('click', function() {
    changeBgColor('yellow');
})
bgColorPink.addEventListener('click', function() {
    changeBgColor('pink');
})

fontSizePlus.addEventListener('click', function() {
    changeFontSize('plus');
})

fontSizeMinus.addEventListener('click', function() {
    changeFontSize('minus');
})