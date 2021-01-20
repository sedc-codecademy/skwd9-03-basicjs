//alert("We are live");

// HTML event hadlers
let mainDiv = document.getElementById('main');
let h1 = document.getElementById('header1');
let btn = document.getElementById('btn');
let carImage = document.getElementById("carImage");
let windowWidth = document.getElementById("width");
let windowHeight = document.getElementById("height");
let buttonChangeBackgroundColor = document.getElementById("btnColorBackground");
let firstName = document.getElementById("firstName");//.value // This will always return empty value;
let lastName = document.getElementById("lastName");
let secondDiv = document.getElementById("middleName");

function printHeader(){
    h1.innerText = "Hello G1!";
}

// Traditional DOM event handlers
btn.onclick = addExtraTextToH1;

function addExtraTextToH1(){
    h1.innerText += "Hello G1! This is extra text added";
}

// onload event is event on the window itself and it fires all the time when we refresh the page
window.onload = printInConsole;

function printInConsole(){
    console.log("Hello from the console");
}

function showErrorMessage() {
    h1.style.color = "red";
    h1.innerText = "SORRY SOMETHING WRONG HAPPEND";
};

carImage.onerror  = showErrorMessage;

function showErrorMessage() {
    h1.style.color = "red";
    h1.innerText = "SORRY SOMETHING WRONG HAPPEND";
};

// DOM level 2 event listeners
// onresize fires when we are resizing the window itself
// element.addEventListener('name of event', function name)
// We are firing the event with declared function afterwards
window.addEventListener('resize',printWidthAndHeight);

function printWidthAndHeight() {
    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;
};

// We are raising the event with anonymoys function
buttonChangeBackgroundColor.addEventListener('dblclick', function(){
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "blue";
});


// window.addEventListener('scroll',addUnorderdList);

// function addUnorderdList() {
//     mainDiv.innerHTML += 
//     `<ul>
//         <li>List item 1</li>
//         <li>List item 2</li>
//         <li>List item 3</li>
//     </ul>`
// }

firstName.addEventListener('keyup',function(){
    console.log("i have relased the key");
});
// The anonymous function takes one parametar and the parametar is the event itself.
// The event contains properties that we can use to get some values for the event itself.
let getName = [];
lastName.addEventListener('keydown',function(gjorge){
    // console.log(getName);
    // getName.push(event.key);
    console.log(gjorge);
});
console.log(getName);
lastName.removeEventListener('keydown',function(gjorge){
    // console.log(getName);
    // getName.push(event.key);
    console.log(gjorge);
})
firstName.addEventListener('focus',function(){
    console.log("we have focused the first name input field");
});

lastName.addEventListener('blur',function(){
    console.log("The password is too weak!");
});


middleName.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log("The child div was called");
})

mainDiv.addEventListener('click',function() {
    console.log("the main div was called");
})

btn.addEventListener('click', function() {
    console.log(firstName.value);
})