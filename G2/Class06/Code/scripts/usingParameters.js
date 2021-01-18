let myInput = document.getElementById("myInput");
let myDiv = document.getElementById("content");

function checkName(val, len){
    debugger;
    if(val.length < len){
        myDiv.innerText = "You must enter at least 5 characters";
    }
    else{
        myDiv.innerText = `The value you entered: ${val}`;
    }
}

myInput.addEventListener("blur", function(event){
    debugger;
    checkName(event.target.value, 5);
});