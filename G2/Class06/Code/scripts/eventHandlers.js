let myInput = document.getElementById("myInput");

function greeting(){
    debugger;
    alert(`The value of my input is ${myInput.value}`);
}

myInput.addEventListener("blur", greeting);
myInput.addEventListener("focus", greeting);

//MULTIPLE FUNCTIONS FOR EVENT HANDLING
let myButton = document.getElementById("myButton");

function helloGreeting(){
    debugger;
    alert("Hello!");
}

myButton.addEventListener("click", helloGreeting);
myButton.addEventListener("click", function(event){
    debugger;
    alert(`The value of myButton is ${event.target.value}`);
    alert("Hello world!");
});

myButton.removeEventListener("click", helloGreeting); //this removes the listener