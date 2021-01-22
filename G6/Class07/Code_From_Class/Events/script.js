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

// let div = document.getElementById("box");
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




