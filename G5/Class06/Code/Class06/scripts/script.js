// Why it is a good practice to clean the innerHTML before adding new elements inside it

// let list = document.getElementById('items');

// let numbers = [1, 2, 33, 50];

// function printNumbers(arr) {
//     list.innerHTML = "";
//     for(let i = 0; i < arr.length; i++){
//         list.innerHTML += `<li>${arr[i]}</li>`
//     }
// }
// printNumbers(numbers);
// numbers.push(100, 200);
// printNumbers(numbers);
// numbers.push(300);
// printNumbers(numbers);



// Mini text editor class example

let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');
let changeTextColorBtn = document.getElementById('changeColor');
let changeBgColorBtn = document.getElementById('changeBgColor');

let colorInput = document.getElementById('color-input');
let bgColorInput = document.getElementById('bgcolor-input');

let paragraph = document.getElementById('content');


increaseBtn.addEventListener('click', function () {
    changeFontSize('+');
})

decreaseBtn.addEventListener('click', function () {
    changeFontSize('-');
});

changeTextColorBtn.addEventListener('click', function () {
    let colorInputValue = colorInput.value;
    changeColor(false, colorInputValue);
    colorInput.value = "";
});

changeBgColorBtn.addEventListener('click', function () {
    let colorInputValue = bgColorInput.value;
    changeColor(true, colorInputValue);
    bgColorInput.value = "";
});


function changeColor(isBgColor, color) {
    if (isBgColor) {
        if (color === "") {
            alert("You must insert a color in the input field");
        } else {
            paragraph.style.backgroundColor = color;
        }
    } else {
        if (color === "") {
            alert("You must insert a color in the input field");
        } else {
            paragraph.style.color = color;
        }
    }
}

function changeFontSize(sign) {
    if (sign === '+') {
        let currentSize = paragraph.style.fontSize || '16px';

        // if(currentSize === ""){
        //     currentSize = "16px";
        // 
        let newFontSize = parseInt(currentSize) + 2;
        paragraph.style.fontSize = newFontSize + 'px';
    }
    else if (sign === '-') {
        let currentSize = paragraph.style.fontSize || '16px';

        let newFontSize = parseInt(currentSize) - 2;
        paragraph.style.fontSize = newFontSize + 'px';
    }
    else {
        alert("Something went wrong!");
    }
}



// Student Exercise #2


let result = document.getElementById('result');
let saveBtn = document.getElementById('saveBtn');

function printUser(fName, lName, email, pass) {
    result.innerText = "";
    if (fName === "" || lName === "" || email === "" || pass === "") {
        alert("You must insert all input fields!");
    } else {
        result.innerText += `${fName} ${lName} with Email: ${email} and pass ${pass} was added!`;
    }
}

saveBtn.addEventListener('click', function () {
    let fname = document.getElementById('firstName').value;
    let lName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    printUser(fname, lName, email, pass);
})