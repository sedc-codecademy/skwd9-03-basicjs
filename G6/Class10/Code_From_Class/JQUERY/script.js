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
    // console.log(previousFromButton.get(0))

    // Getting input value
    // console.log($("input").first().val())

    // hide and show first element with class innerWrapper

    // $(".innerWrapper").first().hide();
    // $(".innerWrapper").first().show();

    // $(".wrapper").first().html("<h1>THIS IS OUR NEW CONTENT FOR WRAPPER</h1>")
    // $(".wrapper").first().append("<h1>THIS IS OUR NEW CONTENT FOR WRAPPER</h1>")
    // $(".wrapper").first().prepend("<h1>THIS IS OUR NEW CONTENT FOR WRAPPER</h1>")


    // $("#mainTitle").text("THIS IS NEW MAIN TITLE");
    // $("#mainTitle").prepend("NEW");

    //CHANGING CSS
    // $("#mainTitle").css("color", "green")
    // $(".innerWrapper").css("background-color", "yellow")

    // $("#firstTitle").after("<h4> AFTER FIRST TITLE </h4>");
    // $("#firstTitle").before("<h4> BEFORE FIRST TITLE </h4>");

    let button1 = $("button").first();
    // simple on event click
    // button1.on("click", function() {
    //     console.log("BUTTON WAS CLICKED");
    // })

    //even simpler
    let clicked = false;
    button1.click(function(e){
        // console.log("BUTTON WAS CLICKED", e);
        // ternary operator
        let buttonMessage = clicked ? "HIDE" : "SHOW";
        clicked = !clicked;
        button1.text(buttonMessage);
        $(".wrapper").first().toggle();
    });

    $("#button1").click(function(){
        let value = $("input").first().val();
        $("#mainTitle").text(value);
    })

    $("input").first().on("input", function(e) {
        // console.log(e.target.value);
        // $("#mainTitle").text(e.target.value);
    })
    $("input").first().focus(function(){
        $("input").first().css("background-color", "green")
    })
    $("input").first().blur(function(){
        $("input").first().css("background-color", "red")
    })

    $("form").first().submit(function(e){
        e.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();
        console.log(`USERNAME: ${username}, PASSWORD: ${password}`);
    })
})





// ternary operators *** BONUS

// let number = 20;

// let result = number > 20 ? "greater" : number === 20 ? "equal" : "smaller";
