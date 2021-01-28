console.log('Are we live?!?');

$(document).ready(function() {

    let button = $("#getData");


    let myObject = {
        trainer: "Kristina Spasevska",
        assistant: "Natasha Paneva",
        students: [
            "Jana",
            "Nikola",
            "Ivan",
            "Sanja",
            "Aleksandar",
            "Ceca"
        ],
        academy: "Code",
        course: "JS basic"
    };

    // JSON.stringify converts JS object to JSON
    let jsonObject = JSON.stringify(myObject);
    console.log(jsonObject);

    // JSON.parse converts JSON object to JS object
    let backToJSObject = JSON.parse(jsonObject);
    console.log(backToJSObject);

    // AJAX calls
    button.click(function(){

        const urlToGetData = "https://jsonplaceholder.typicode.com/users";

        $.ajax({
            url: urlToGetData,
            success: function(result){
                // the result is always JS object; it is automatically converted!!!
                console.log('Success!');
            },
            error: function(){
                console.error('Error occured!');
            }
        })
        .done(function(data) {
            for(let user of data){
                $("#userList").append(`<li>${user.username} - ${user.email}</li>`);
            }
        });
    })


    // Exercise 01


});