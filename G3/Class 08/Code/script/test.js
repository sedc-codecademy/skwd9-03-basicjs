$(document).ready(function(){//waits for the document to be loaded and after that the code runs

    let allElements=$("*");//selecting all elements
    //console.log(allElements);
    let byIdElement=$("#mainTitle");//selecting by Id
    //console.log(byIdElement);
    let byClassElements=$(".innerWrapper");//selecting by class
    //console.log(byClassElements);
    let byTagNameElements=$("p");//selecting by tag
    let wrapperAndInnerWrapper=$(".wrapper,.innerWrapper");
    //console.log(wrapperAndInnerWrapper);
    let firstParagraph=$("p:first");
    let lastParagraph=$("p:last");
    //console.log(firstParagraph,lastParagraph);
    let firstChildHeaders=$("h3:first-child");
    //console.log(firstChildHeaders);
    let lastChildParagraphs=$("p:last-child");
    let secondChildParagraph=$("p:nth-child(3)").last();

    //console.log(secondChildParagraph);
    let domByIdElement= document.getElementById("mainTitle");
    let byIdElementJQuery=$("#mainTitle");
    
    let firstClassElement=byClassElements.first().html();
    console.log(firstClassElement);

     byClassElements.first().html(`<p>This is some dummy text</p>`);
    let lastParagraphElement=byTagNameElements.last().text();
     console.log(lastParagraphElement);

     byTagNameElements.last().text("This is new generated text").css("color","red");
     byTagNameElements.last().css("color","red");//apllying 1 css rule 
     byTagNameElements.last().css({
        "color":"red",
        "font-size":"30px"
     });//applying multiple css rules

     byTagNameElements.last().text("This is new generated text").css("color","red");//Combining style and adding next text

     $("h1").first().after("<p>This is new generated paragraph</p>");// adding new html element after selected one

     $("h1").first().before("<p>This is new new generated paragraph</p>");// adding new html element before selected one

     $("#button").on("click",function(){
        console.log("Hello");
     });

     $("#button").click(function(){
         console.log("Hello again");
     });
});

(function(){});