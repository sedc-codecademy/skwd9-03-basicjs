// SELECTORS USING VANILLA JS

// let wrappers = document.getElementsByClassName("wrapper");
// let mainTitle = document.getElementById("mainTitle")
// let innerWrappers = document.getElementsByClassName("innerWrapper")


$(document).ready(function() {
    // SELECTORS USING JQUERY
    let wrappers = $(".wrapper");
    let allElements = $("*");
    let mainTitle = $("#mainTitle");
    let innerWrappers = $(".innerWrapper");
    // console.log(allElements)
    
    let firstParagraph = $("p:first");
    let lastParagraph = $("p:last");
    
    let firstChildHeaders = $("h3:first-child");
    let lastChildParagraphs = $("p:last-child");
    
    let secondChildParagraphs = $("p:nth-child(2)");
    let button = $("#button");
    
    
    
    let firstElementInAll = allElements.first();
    let lastElementInAll = allElements.last();
    
    let lastParagraphINWrapper = allElements.find(".wrapper").find("p").last();
    
    // GET DOM OBJECT
    // console.log(allElements[10])
    // console.log(allElements.get(10));
    
    //console.log(lastParagraphINWrapper);
    
    let nextToMainTitle = mainTitle.next();
    let previousFromButton = button.prev();
    console.log(previousFromButton.get(0))
})






