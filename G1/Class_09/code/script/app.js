let menuList = $('#menuList');
let header = $("header").eq(0);
// let navMenu = document.getElementById("menu");
// Navigation/ Selection with jQuery
let menuListItems = menuList.children();
let home = menuListItems.first().children().first();
let about = menuListItems.children().eq(1);
let blogItem = $("#blogItem");
//Getting html elements with first and last
let firstListElement = $("li:first");
let lastListElement = $("li:last");


// Adding css class with jQuery
menuListItems.addClass("listItem");
let contact = $(".listItem").eq(2).children().first();
// Adding text in html element with jQuery
home.text("Home");
about.text("About");
contact.text("Contact");
blogItem.text("Blog");


// let firstElementVJS = document.getElementsByTagName("li")[0];
// console.log(firstElementVJS);


// We have .show() function to show the hidden html element
// .hide() to hide the element
// .toggle() to toggle with the elment (hide it and display it)
$("#toggleMenuItems").click(function(){
    menuListItems.toggle();
});

// Get form input values
let addBtn = $("#submit");
let users = [];
let firstName = $("#firstName");
let lastName = $("#lastName");
let address = $("#address");
let email = $("#email");
let inputs = $("input")

function User(firstName,lastName,address,email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
}


function addUser(user){
    let isInputValid = validateInputs();
    if(!isInputValid){
        return;
    }
    users.push(user);
    console.log(users);
}


addBtn.click(function(){
    let personIWantToAdd = new User(firstName.val(),lastName.val(),address.val(),email.val());
    addUser(personIWantToAdd);
    clearInputs();
});


function validateInputs(){
    let areInputsValid = true;
    for(let i = 0; i < inputs.length; i++){
        if(inputs.eq(i).val().length < 3){
            $('#demo').html(`<h1>Some of the inputs has less then 3 charachers</h1>`);
            areInputsValid = false;
        }
    }
    return areInputsValid;
}

function clearInputs(){
    firstName.val("");
    lastName.val("");
    address.val("");
    email.val("");
}

// Demo div manipulation
// demo.innerHTML = <textarea>Hello from my text area</textarea>;
$('#demo').html(`<textarea id="textAreaId">Hello from my text area</textarea>`);
$('#textAreaId').text("This is my new text");
//$('#textAreaId').css("background-color","red");
$('#textAreaId').addClass("addRedBgColor");

$("textarea").first().after("<p>new p tag after the h1</p>");
$("textarea").first().before("<p>new p tag before the h1</p>");








