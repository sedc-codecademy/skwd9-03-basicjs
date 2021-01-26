$(document).ready(function(){
    let ourButton = $("button").first();

    ourButton.on("click", function(){
        console.log("Hello from first click handler!");
    });
    //SIMPLER
    ourButton.click(function(e){
        console.log("Hello again");
        $(this).text("Click me");
        //debugger;
        //logging the event
        console.log(e);

        let paragraphs = $("p");
        paragraphs.hide();
    });
    ourButton.off("click"); //remove click event handlers
    //ourButton.off("click", greeting); remove specific click event handler
});