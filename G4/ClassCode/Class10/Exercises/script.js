console.log('Lots of exercises...');

// Task 01
// inputs
let input01 = document.getElementById('input01');
let input02 = document.getElementById('input02');
// buttons
let sumBtn = document.getElementById('sumBtn');
let difBtn = document.getElementById('difBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');
let powBtn = document.getElementById('powBtn');
// paragraph for result
let resultPar = document.getElementById('result');

// events
sumBtn.addEventListener('click', function(){
    let sum = parseInt(input01.value) + parseInt(input02.value);
    resultPar.innerText = `The sum of numbers is ${sum}`;
    input01.value = "";
    input02.value = "";
})

difBtn.addEventListener('click', function(){
    let dif = parseInt(input01.value) - parseInt(input02.value);
    resultPar.innerText = `The difference of numbers is ${dif}`;
    input01.value = "";
    input02.value = "";
})

mulBtn.addEventListener('click', function(){
    let mul = parseInt(input01.value) * parseInt(input02.value);
    resultPar.innerText = `The multiplication of numbers is ${mul}`;
    input01.value = "";
    input02.value = "";
})

divBtn.addEventListener('click', function(){
    let div = parseInt(input01.value) / parseInt(input02.value);
    resultPar.innerText = `The division of numbers is ${div}`;
    input01.value = "";
    input02.value = "";
})

powBtn.addEventListener('click', function(){
    let pow = Math.pow(parseInt(input01.value), parseInt(input02.value));
    resultPar.innerText = `Number ${input01.value} on the power of ${input02.value} is ${pow}`;
    input01.value = "";
    input02.value = "";
})

// Task 04
// inputs
let inputName = document.getElementById('nameRec');
let inputIngredients = document.getElementById('ingRec');
let inputTime = document.getElementById('timeRec');
// buttons
let saveBtn = document.getElementById('saveBtn');
// table body
let tbody = document.getElementById('tbody');

let counter = 1;
// events
saveBtn.addEventListener('click', function(){
    let nameRec = inputName.value;
    let ingRec = inputIngredients.value;
    let timeRec = inputTime.value;

    tbody.innerHTML += `
        <tr>
            <td> ${counter} </td>
            <td> ${nameRec} </td>
            <td> ${ingRec} </td>
            <td> ${timeRec} </td>
            <td> <button class="delBtn">Delete</button> </td>
        </tr>`;

    // all delete btns
    let delBtns = document.getElementsByClassName('delBtn');

    for(let i = 0; i < delBtns.length; i++){
        delBtns[i].addEventListener('click', function(event){
            event.target.parentNode.parentNode.remove(event.parentNode);
        }, false)
    }

    counter++;
    inputName.value = "";
    inputIngredients.value = "";
    inputTime.value = "";

})