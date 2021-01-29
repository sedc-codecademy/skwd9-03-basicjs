
$(document).ready(function() {
    
    // let allElements = $("*");
// console.log(allElements);

// let getElementById = $("#mainTitle");
// let getByIdJs = document.getElementById("mainTitle");

// console.log(getElementById);
// console.log(getByIdJs);

// let getElementByClassName = $(".innerWrapper");
// console.log(getElementByClassName);

// let getElementByTagName = $("p");
// console.log(getElementByTagName);


// let wrapperDiv = $(".wrapper");
// console.log(wrapperDiv);



// console.log("========================== More precise selectors ==================");

// // let firstParagraph = $("p:first+1"); not a valid jQUery selector
// let firstParagraph = $("p:first");
// let firstParagraphVanilaJS = document.getElementsByTagName("p")[0];
// let lastParagraph = $("p:last");


// console.log(firstParagraph);
// console.log(lastParagraph);


// let secondChildrenParagraph = $("p:nth-child(2)");
// console.log(secondChildrenParagraph);


// // DOM Object VS JQuery object. How to extract the DOM object from JQuery object by using []
// console.log(firstParagraph[0].innerText);
// console.log(firstParagraphVanilaJS.innerText);


// // first() and last() methods in JQuery

// let firstElement = allElements.first();
// let lastElement = allElements.last();


// console.log(firstElement);
// console.log(lastElement);
console.log(allElements.get(6));


// // next() and prev() methods in JQuery

// console.log(firstParagraph.next());
// console.log(firstParagraph.prev());



// Student exercise 1

// let oneDiv = $("#firstWrapper");
// let oneParagraph = $(".paragraphInDiv").first();
// let oneHeader1 = $("h1:first");
// let oneHeader3 = $("h3").last();
// let btn = $("button");


// console.log(oneDiv);
// console.log(oneParagraph);
// console.log(oneHeader1);
// console.log(oneHeader3);
// console.log(btn);



let showBtn = $("#show");
let hideBtn = $("#hide");
let addColorBtn = $("#add-color");
let addTextBtn = $("#add-text");
let input = $("#content");
let resultDiv = $(".result");

// One way to declare a click event in JS using jQuery
// buttons.get(0).click(function() {

// })


showBtn.on('click', function() {
    // Make the element visible => show() method from jQuery
    resultDiv.show();
});

hideBtn.on('click', function() {
    // Make the element invisible => hide() method from jQuery
    resultDiv.hide();
});

addColorBtn.on('click', function() {
    // Change the element color => css() method in jQuery
    // console.log(resultDiv.css('background-color'));
    resultDiv.css('background-color', 'red');
    $("p").each(this, function(i, v) {
        console.log(this);
    })
});

addTextBtn.on('click', function() {

    // change the text and the html of the element => html() and text()
    // console.log(resultDiv.html());
    // console.log(resultDiv.text());


    // Get value of an input field => val()
    // set value of an input field => input.val("This will be printed in the input");
    resultDiv.html(`
        <p id="myParagraph">${input.val()}</p>
    `)
});



});





