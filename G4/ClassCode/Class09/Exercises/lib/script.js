console.log('We are live!');

$(document).ready(function() {

    // Exercise 01
    let div01 = $("#firstWrapper");
    let oneParagraph = $("p").get(0);
    // $("p:first")
    let title = $("h1:first");
    let button = $("button").first();

    console.log(div01);
    console.log(oneParagraph);
    console.log(title);
    console.log(button);

    // Exercise 02
    title.text('JQuery is awesome');
    title.after('<p>I am some random paragraph!!!</p>');
    button.css('background-color', 'red');


    // Exercise 03
    let secondDiv = $("#secondWrapper");
    let allPars = $("p");

    button.click(function(){
        secondDiv.hide();
        allPars.css('color', 'green');
        button.text('Don/t click me!');
    })

});