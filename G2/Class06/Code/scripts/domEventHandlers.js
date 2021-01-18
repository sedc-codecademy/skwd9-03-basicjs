let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");

function myButtonClick(){
    debugger;
    alert("You clicked the button");
}
myButton.onclick = myButtonClick;
mySecondButton.onclick = myButtonClick;
let myDiv = document.getElementById("myDiv");


function helloGreeting(){
    debugger;
    alert("Hello!");
}

function goodbyeGreeting(){
    debugger;
    alert("Goodbye!");
}

myDiv.onmouseover = helloGreeting;
myDiv.onmouseover = goodbyeGreeting; //REWRITE on mouseover event handling

myDiv.onmouseout = helloGreeting; //THIS IS ANOTHER EVENT