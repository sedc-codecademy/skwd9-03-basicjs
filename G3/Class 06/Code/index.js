// First way of binding an event to an element (BAD PRACTICE!)
function hideElementDescription() {
    var elementDescription = document.getElementById("elementDescriptionId");

    elementDescription.style.display = "none";
}

// Second way of binding an event to an element
var secondWayElement = document.getElementById("secondWayOfBindingElement");

function changeColorOfElementOnFocus() {
    secondWayElement.style.color = "red";
}

function changeColorOfElementOnBlur() {
    secondWayElement.style.color = "green";
}

// Wrong way of calling the function on trigger on some event (don't need after the functionName())
// secondWayElement.onfocus = changeColorOfElementOnFocus();
// right way of calling the function on focus trigger
secondWayElement.onfocus = changeColorOfElementOnFocus;
// right way of calling the function on blur trigger
secondWayElement.onblur = changeColorOfElementOnBlur;

// Overwirte of event on some element
var helloButton = document.getElementById("btnHello");

function sayHelo() {
    console.error("Hello World!");
}

function whoIsTheWinner() {
    console.error("I am the winner");
}

helloButton.onclick = sayHelo;
helloButton.onclick = whoIsTheWinner;

// Third way of binding an event to an element
// Sum of two numbers inputed

function sumOfTwoNumbers() {
    var inputOneValue = Number(document.getElementById("firstNumberFromInput").value);
    var inputTwoValue = Number(document.getElementById("secondNumberFromInput").value);

    if (inputOneValue === "") inputOneValue = 0;
    if (inputTwoValue === "") inputTwoValue = 0;

    alert(`The sum of the first and second input is ${inputOneValue + inputTwoValue}`);
}

// Same with the code on 91 line
// document.getElementById("sumOfTwoNumbers").addEventListener("click", sumOfTwoNumbers, false);

// On press enter
function onEnterPressed(event) {
    console.log(event);

    if (event.keyCode == 13) {
        alert(`${event.target.value}`)
    }
    else {
        console.error(`${event.target.value}`);
    }
}


document.getElementById("SEDC-G3").addEventListener("keypress", onEnterPressed);

// For homework provide examples and explain what is the difference between keypress, keydown, keyup, change (all of this are triggers)!

// Add and Remove event combination
var sayHelloButton = document.getElementById("btnHello");

function setBorderOfButton (event) {
    event.target.style.border = "3px solid green";
}

sayHelloButton.addEventListener("mouseover", setBorderOfButton);
sayHelloButton.removeEventListener("mouseover", setBorderOfButton);

// For homework provide examples and explain what is the difference betwenn mouseover, mouseout and mouseleave (all of this are triggers)!

// Anonymous Function - use this type of functions if you want to pass argument/s in other function/s

function sumOfTwoNumbersAnonymousCall(number1, number2) {
    return alert(`The reulst of anonymous call function is ${number1 + number2}`);
}

function lowerNumber(number1, number2) {
    if (number1 > number2) console.error("The lower number is", number2);
    else console.error("The lower number is", number1);

}

document.getElementById("sumOfTwoNumbers").addEventListener("click", function() {
    var inputOneValue = Number(document.getElementById("firstNumberFromInput").value);
    var inputTwoValue = Number(document.getElementById("secondNumberFromInput").value);

    sumOfTwoNumbersAnonymousCall(inputOneValue, inputTwoValue);
    lowerNumber(inputOneValue, inputTwoValue);
}, false)

// What is useCapture (event flow) and how it's working?
// Possible values are true and false
// If true, then it will be called code into the function on capture of the element ("capture phase")
// If false, then it will be called code into the function on capture at the return of the result ("bubble phase")
window.addEventListener("click", function(){console.error("The procces number", 1)}, false);
window.addEventListener("click", function(){console.error("The procces number", 2)}, true);
window.addEventListener("click", function(){console.error("The procces number", 3)}, false);
window.addEventListener("click", function(){console.error("The procces number", 4)}, true);
