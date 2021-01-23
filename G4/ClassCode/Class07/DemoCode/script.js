console.log('It\'s working');

let myBtn = document.getElementById('myDiv').lastElementChild;
// let myBtn1 = document.getElementsByTagName('button')[0];
// let myBtn2 = document.querySelector('button');


//  ------------- Traditional DOM Event Handlers -------------
function saySomething() {
    alert('Hello Natasha!');
}

// wrong !!!!!!
// myBtn.onclick = saySomething();
//right
myBtn.onclick = saySomething;
console.log(saySomething);

// anonymous f-n
// cannot be called from outside
// cannot be attached to another event
myBtn.onclick = function() {
    console.log('Hello Natasha!');
}

// -------------- Event Listeners ------------------

let input = myBtn.previousElementSibling;
let greetBtn = document.getElementById('greetBtn');

function greetSomeone(){
    let name = input.value;
    alert(`Hello ${name}!`);
    input.value = '';
}

greetBtn.addEventListener('click', greetSomeone, false);


let dynamicInput = document.querySelector('#dynamic-input');
dynamicInput.addEventListener('keyup', function(event){
    let inputValue = event.target.value;
    console.log(inputValue);
    // call other function
    alert('I am inside the anonymous function');
    greetSomeone(inputValue);
});


// using parameters with event hadnlers
function sumNumbers(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

let sumBtn = document.querySelector('#sumBtn');
sumBtn.addEventListener('click', function(){
    sumNumbers(2, 9);
    // 200 lines of code
}, false);

// Exercise 02
let changeBtn = document.getElementById('changeTextBtn');
let paragraphToChange = document.getElementById('changeStyle');

changeBtn.addEventListener('click', function(){
    paragraphToChange.style.fontSize = '36px';
    paragraphToChange.style.color = 'red';
    paragraphToChange.style.backgroundColor = 'lime';
});

// Exercise 03
let fname = document.getElementById('firstname');
let lname = document.getElementById('lastname');
let username = document.getElementById('username');
let password = document.getElementById('pass');
let regBtn = document.getElementById('register');
let showUser = document.getElementById('showUser');

function getUserInfo(fname, lname, user, pass){
    let passDots = '';
    for(let i = 0; i < pass.length; i++){
        passDots += '*';
    }
    return `Firstname: ${fname}
    Lastname: ${lname}
    Username: ${user}
    Password: ${passDots}`
}
regBtn.addEventListener('click', function(){
    let inputFirstname = fname.value;
    let inputLastname = lname.value;
    let inputUsername = username.value;
    let inputPassword = password.value;

    let userInfo = getUserInfo(inputFirstname, inputLastname, inputUsername, inputPassword);
    
    showUser.innerText = userInfo;

    fname.value = '';
    lname.value = '';
    username.value = '';
    password.value = '';
}, false);
