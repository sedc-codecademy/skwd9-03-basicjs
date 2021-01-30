$(document).ready(function(){
    // let person = {
    //     firstName: "Goce",
    //     lastName: "Kabov",
    //     age: 28
    // };
    // Converting object to json format
    // let jsonString = JSON.stringify(person);
    // Converting json to js object
    // let reguralJSPerson = JSON.parse(jsonString);
    // console.log(reguralJSPerson)

    function printPost(post) {
        let div = $("<div></div>");
        div.css("width", "300px");
        div.css("height", "300px");
        div.css("border", "2px solid black");
        div.css("background-color", "yellow");
        div.html(`<p>User: ${post.userId}</p><p>Post Title: ${post.title}</p><p>Message: ${post.body}</p>`);
        $("body").append(div);
    }

    // BONUSSSSSSSSSSS

    // function getPersonHomeWorld(planetUrl) {
    //     $.ajax({
    //         method: "GET",
    //         url: planetUrl,
    //         success: function(planet) {
    //             console.log(planet)
    //         }
    //     })
    // }

    $("button").click(function(){
        $.ajax({
            method: "GET",
            url: `https://swapi.dev/api/people/1`,
            success: function(person) {
                // console.log("RESPONSE: ", person);
                printPost(response);
                
                // BONUSSSS
                // getPersonHomeWorld(person.homeworld)
                
            }
        })
    })
})