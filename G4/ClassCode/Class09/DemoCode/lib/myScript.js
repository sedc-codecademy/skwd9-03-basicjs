console.log('This is my script running...');

// wait for the jquery to load
$(document).ready(function() {

    // Selectors
    let allElements = $("*");
    console.log(allElements);
    let elementById = $("#firstTitle");
    console.log(elementById);
    let elementsByClassName = $(".innerWrapper");
    let elementsByTagName = $("p");
    // let elementsByTagDOM = document.getElementsByTagName('p');
    let firstParagraph = $("p:first");
    console.log(firstParagraph);
    let lastParagraph = $("p:last");

    let firstChild = $(".innerWrapper :first-child");
    let lastChild = $(".innerWrapper :last-child");
    let nthChild = $(".innerWrapper :nth-child(2)");
    console.log(firstChild);

    // some more complex selecting
    let someElement = allElements.find(".wrapper").find("p").first();
    // jquery methods to hide & show element
    someElement.hide();
    someElement.show();

    // Methods for manipulation

    // vanilla JS vs. jQuery
    elementsByTagName[0].innerText = "changed text";
    elementsByTagName.get(0).innerText = "Changed text from jQuery";

    // val() -> get value from input
    // val('something') -> sets new value
    let inputValue = $("input").first().val();
    console.log(inputValue);
    $("input").first().val('nesto');

    // getting and setting text content
    let titleToChange = $("#secondTitle");
    console.log(titleToChange.text());
    titleToChange.text('We are changing text from jQuery!!!!!!!!');

    // getting and setting html content
    console.log($(".emptyDiv").first().html());
    $(".emptyDiv").first().html('<p>I am a paragraph generated from JS</p>');


    // adding content before/after an element
    $("h1").first().after("<p>new p tag after the h1</p>");
    $("h1").first().before("<p>new p tag before the h1</p>");

    // changing style with jQuery
    elementsByTagName.last().css('color', 'red');
    elementsByTagName.last().css('font-size', '24px');
    elementsByTagName.last().css('background-color', 'yellow');

    // Events in jQuery
    let button = $("button").first();
    
    // button.on("click", function(){
    //     alert('Hi from jQuery!');
    // });

    button.click(function(){
        alert('I am the simplest event handler in the world!');
    });

    







})