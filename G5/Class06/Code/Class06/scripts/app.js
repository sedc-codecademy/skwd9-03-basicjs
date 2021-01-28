// 1. HTML Event Handlers -> BAD PRACTICE
function sayHello(message) {
    alert("Hello there! " + message);
}

function sayGoodbye() {
    console.log("Goodbye! ");
}



// 2. Traditional DOM Event Handlers

let greetBtn = document.getElementById('greetBtn');

// greetBtn.onclick = sayGoodbye;
// greetBtn.onclick = sayHello;
// greetBtn.ondblclick = sayHello;


// Anonymous function
// greetBtn.onclick = function () {
//     console.log("Anonymous function!");
// }


// 3. Event listeners

// Step one: Select the elements that you need to add listeners to
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');
let resetBtn = document.getElementById('reset');
let resultText = document.getElementById('result');
let count = 0;

resultText.innerText = count;

// Adding event listeners using anonymous function
// Step two: Add event listeners to the selected elements
increaseBtn.addEventListener('click', function() {
    count++;
    resultText.innerText = count;
    sayHello("I just changed the counter!");
});

decreaseBtn.addEventListener('click', function() {
    // Here you can have more or less complex logic 
    count--;
    if(count < 0) {
        alert("You cannot decrease the counter below zero!");
    }else {
        resultText.innerText = count;
    }
});

function resetCount() {
    count = 0;
    resultText.innerText = 0;
    console.log("Counter reset!");
}


// Adding event listener by using function as a reference
resetBtn.addEventListener('click', resetCount);

// Remove an event listener
resetBtn.removeEventListener('click', resetCount);




// Event flow and event propagation

let first = document.getElementById('first');
let second = document.getElementById('second');
let button = document.getElementById('testBtn');

// button.addEventListener('click', function(event) {
//     // console.log(event);
//     event.stopPropagation();
//     alert('Test button clicked!');
// });

// first.addEventListener('click', function() {
//     alert("First was clicked");
// });

// second.addEventListener('click', function() {
//     alert("Second was clicked!");
// });

let buttonEvent = document.getElementById('eventTest');

buttonEvent.addEventListener('click', function(event) {
    console.log(event); 

    // buttonEvent.style.backgroundColor = 'yellow';

    event.target.innerText = 'Changed!';
    event.target.style.backgroundColor = 'red';
    event.target.style.fontSize = '20px';
    event.target.style.fontFamily = 'Verdana';
    event.target.style.fontWeight = '900px';
});



// Student Exercise 1

let paragraph = document.getElementById('paragraph');
let editBtn = document.getElementById('editBtn');

editBtn.addEventListener('click', function(event) {
    // By selecting the paragraph previously

    // paragraph.style.color = 'yellow';
    // paragraph.style.backgroundColor = 'green';
    // paragraph.style.fontSize = '20px';

    // By selecting the paragraph by using the EVENT object
    console.log(event.target.previousElementSibling);
    let para = event.target.previousElementSibling;

    para.classList.add('myClass');
    para.style.color = 'yellow';
    para.style.backgroundColor = 'green';
    para.style.fontSize = '20px';
})