$(document).ready(function(){
        let allElements = $("*"); //select all elements
        console.log(`All elements: ${allElements}`);
        console.log(`First element: ${allElements[0]}`); //DOM element
        console.log(`First jquery element: ${allElements.first()}`);

        let mainTitle = $("#mainTitle"); // by id
        let elementsByClass = $(".innerWrapper"); //by class
        let paragraphs = $("p"); // by tag name
        let elementsByMultipleClasses = $(".innerWrapper, .wrapper"); //multiple selectors
        let firstParagraph = $("p:first"); //get first p element
        let lastParagraph = $("p:last"); //get last p element
        let firstChildsHeaders = $("h3:first-child"); //get all h3 elems, which are first child of their parents
        let lastChildsParagraphs = $("p:last-child"); //get all p elems, which are last child of their parents
        let secondChildsParagraphs = $("p:nth-child(2)"); //get all second place p elems in their parents
        
        //difference between DOM and jquery elements
        let firstParagraphDom = paragraphs[0];
        console.log(`First paragraph's text: ${firstParagraphDom.innerText}`);
        let firstParagraphJquery = paragraphs.first();
        console.log(`First paragraph's text: ${firstParagraphJquery.text()}`);
        paragraphs.first().text("This is other greeting!");
        console.log(`Last paragraph's text: ${paragraphs.last().text()}`);
        lastParagraph.text("This is changed text");

        //appending text to an element
        let lastParagraphText = lastParagraph.text();
        lastParagraph.text(lastParagraphText + " Something else!");

        console.log(`First class element text content: ${elementsByClass.get(0).textContent}`);
        console.log(`First paragraph's next sibling ${firstParagraph.next().text()}`);
        console.log(`Last paragraph's previous sibling ${lastParagraph.prev().text()}`);

        console.log(allElements.find(".wrapper").find("p").first().text());
        $("input[value='Cool']").val(); //attribute selector
        console.log(`Input's value: ${$("input").first().val()}`);
        $("input").first().val("Cool text");
        console.log(`Input's value: ${$("input").first().val()}`);

        console.log(`First sub div html: ${elementsByClass.first().html()}`);
       // elementsByClass.first().html("<p>Changed html!</p>");

        secondChildsParagraphs.hide(); //display = none
        secondChildsParagraphs.show();

        console.log(`Last paragraph's text color: ${lastParagraph.css("color")}`);
        lastParagraph.css("color", "red");
        lastParagraph.css("background-color", "yellow");
        
        firstChildsHeaders.first().after("<p>This is a paragraph after the first child header!</p>");
        firstChildsHeaders.first().before("<p>This is a paragraph before the first child header!</p>");

});