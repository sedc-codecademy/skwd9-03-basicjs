$(document).ready(function(){
    let myButton = $("#myButton");
    let myDiv = $("#myDiv");

    function getData(number){
        debugger;
        $.ajax({
            headers: {
                "Access-Control-Allow-Origin" : "*"
                }, // we want to avoid CORS errors
            url:`https://jsonplaceholder.typicode.com/posts/${number}`,
            success: function(result){ //result is just one parsd object
                debugger;
                        myDiv.append(`<p>Id: ${result.id}, title: ${result.title}</p>`);
            },
            error: function(err){
                console.log(err);
            }
        })
    };
    myButton.click(function(){
        getData(1);
    });
})