console.log("live");
let studentName = document.getElementById("name");
let studentLastname = document.getElementById("lastName");
let studentAge = document.getElementById("age");
let error = document.getElementById("error");
let ajaxBtn = document.getElementById("ajaxBtn");

// Basic XML request with vanilla Javasript
// let xhr = new XMLHttpRequest();

// xhr.onload = loadRequest;


// function loadRequest(){
//     console.log("I am in the reqest")
//     if(xhr.status >= 200 && xhr.status < 300){
//         console.log("We have sucessfully loaded the data");
//         console.log(xhr.response);
//         console.log(typeof(xhr.response));
//         let parser = new DOMParser();
//         let xml = parser.parseFromString(xhr.response,"application/xml");
//         studentName.innerText = xml.getElementsByTagName("name")[0].innerHTML;
//         studentLastname.innerText = xml.getElementsByTagName("breed")[0].innerHTML;
//         studentAge.innerText = xml.getElementsByTagName("owner")[0].innerHTML;
//     }
//     else{
//         error.innerText = "There has been a mistake no successfull catch";
//     }
// }

// xhr.open("GET", "https://raw.githubusercontent.com/DamjanStojanovski/class_10/master/dog.xml");
// xhr.send();

// JSON -What is it? - Format of file most commonly used to catch data from the internet and send data using HTTP requests
// and responses

let student = {
    id : 1,
    name: "Damjan",
    lastName: "Stojanovski",
    age: 28
}

// Convert object to JSON
let json = JSON.stringify(student);
console.log(json);
// Convert JSON to object
let objectFromJson = JSON.parse(json);
console.log(objectFromJson);



// Making an AJAX call with jQuery
$(document).ready(function(){
    $.ajax({
        url: "https://swapi.dev/api/people/1/",
        success: function(data){
            console.log(data.name);
        },
        error: function(){
            console.log("Something went wrong");
        }
    })
});

//Fetch method to make AJAX calls

ajaxBtn.onclick = function(){
   let promise =  fetch("http://swapi.dev/api/planets/");
   //response in the anonimoys function is the HTTP response
   promise.then(function(response){
    console.log(response);
    // response.text() is returning JSON object
    return response.text();
   }).then(function(planetsJSON){
    // planetsJSON is the JSON object returned from return response.text();
    // we are parsing the JSON file into JS object
    let planets = JSON.parse(planetsJSON);
    console.log(planets);
    for(let planet of planets.results){
        console.log(planet.name);
    }
   }).catch(function(err){
    console.log(err);
   });
}




