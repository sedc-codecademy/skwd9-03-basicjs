let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/posts/1")// returns promise
    .then(response =>{
        //response contains metadata for the whole HTTP response
        debugger;
        //response.json() returns promise
        response.json() 
        .then(data=>{
            debugger;
            console.log(data);
        });
    }) 
    .catch(err=>{
        console.log(err);
    });
});

/* response=> {} actually corresponds to
function(response){

} */