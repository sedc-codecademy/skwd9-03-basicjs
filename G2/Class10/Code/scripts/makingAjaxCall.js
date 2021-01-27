//using jquery
 $(document).ready(function(){
    let myButton = $("#myButton");
    myButton.click(function(){
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function(result){ //result is the result from server
                debugger;
                console.log(result);
                console.log('Users');
                for(let item of result){ //the result is an already parsed array
                    console.log(`Name: ${item.name}, username: ${item.username}`);
                }
            },
            error: function(err){
                debugger;
                console.log(err);
            }
        });
    })
    //code
}); 

//plain js
/* let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status == 200) //status 200 == success
    {
        debugger;
        let responseText = xhttp.responseText;
        let parsedArray = JSON.parse(xhttp.responseText);
        console.log(parsedArray);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
xhttp.send();

}); */

