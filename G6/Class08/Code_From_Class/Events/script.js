function changeButtonTextOnClick() {
    let button = document.getElementById("clickMe");
    button.textContent = "I WAS CLICKED!";
}

function changeButtonBgColorOnClick() {
    let button = document.getElementById("clickMe");
    button.style.backgroundColor = "yellow";
}

let button = document.getElementById("clickMe");

// TRADITITIONAL EVENT HANDLER

// SECOND FUNCTION OVERRIDES THE FIRST
// button.onclick = changeButtonTextOnClick;
// button.onclick = changeButtonBgColorOnClick;

// EVENT LISTENERS

// button.addEventListener("click", changeButtonTextOnClick);
// button.addEventListener("click", changeButtonBgColorOnClick);

//EXTRA
// button.addEventListener("click", function() {
//     changeButtonTextOnClick();
//     changeButtonBgColorOnClick();
// })

// button.addEventListener("dblclick", function() {
//     let div = document.getElementById("box");
//     div.style.backgroundColor = "red";
// })

let div = document.getElementById("box");
div.addEventListener("mousemove", function(e) {
    // console.log("X: ", e.offsetX);
    // console.log("Y: ", e.offsetY);
    div.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetY}, 20)`;
})
// div.addEventListener("mouseover", function(){
//     div.textContent = "MOUSE OVER";
// })
// div.addEventListener("mouseleave", function(){
//     div.textContent = "MOUSE LEAVE";
// })

let input = document.getElementById("input");
// input.addEventListener("focus", function(){
//     alert("INPUT IS FOCUSED");
// })

// input.addEventListener("blur", function(){
//     alert("INPUT IS BLURED");
// })

input.addEventListener("input", function(e) {
    console.log(e);
    div = document.getElementById("box");
    div.textContent = e.target.value;
})

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

function addCoordinates(e) {
    document.getElementById("result").textContent = `X: ${e.pageX}, Y: ${e.pageY}`;
}

startButton.addEventListener("click", function() {
    document.addEventListener("mousemove", addCoordinates);
})

stopButton.addEventListener("click", function() {
    document.removeEventListener("mousemove", addCoordinates);
})

let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("USERNAME: ", document.getElementById("username").value);
    console.log("PASSWORD: ", document.getElementById("password").value)
})

let container = document.getElementById("container");
let span = document.getElementById("span");

// ADDING THIRD ARGUMENT TRUE FOR EVENT CAPTURING, DEFAULT IS FALSE FOR EVENT BUBLING
container.addEventListener("click", function() {
    console.log("DIV WAS CLICKED");
}, true)

span.addEventListener("click", function() {
    console.log("SPAN WAS CLICKED");
})







