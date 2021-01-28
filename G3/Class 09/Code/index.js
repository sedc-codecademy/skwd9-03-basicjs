// Angel question BONUS DOM START
// document.getElementById("resultAngelButton").addEventListener("click", function() {
//     let receptName = prompt("Name of the recept");
//     let numberIng = Number(prompt("Insert numb of ing."));
//     let tempArray = [];
    
//     for (let index = 0; index < numberIng; index++) {
//         let ingredient = prompt("Ingredient name");
    
//         tempArray.push(ingredient);
//     }

//     document.getElementById("resultAngel").innerHTML = (
//         `
//             <h1>${receptName}</h1>
//             <ul>
//                 ${tempArray.map(element => {
//                     return (
//                         `<li>${element}</li>`
//                     )
//                 }).join("")}
//             </ul>
//         `
//     )

// }, false)
// END

let json = '{"group": "G3", "academy": "SEDC", "trainer": "FILIP!!!!"}';
// console.error("ORGINAL JSON", json); 
// Parse the json text file into JS object
let jsObject = JSON.parse(json);
// console.error("JS OBEJCT", jsObject);
// From js object to json
let newJson = JSON.stringify(jsObject);
// console.error("NEW JSON VALUE", newJson);

// Using AJAX
// document.getElementById("buttonUsers").addEventListener("click", function() {
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/users",
//         success: function(result) {
//             if (result !== undefined && result.length > 0) {
//                 document.getElementById("resultOfUsers").innerHTML = (
//                     `
//                         <ul>
//                             ${result.map((user, index) => {
//                                 console.log(user);

//                                 return (
//                                     `
//                                         <li key=${index}>
//                                             id: ${user.id}<br />
//                                             name: ${user.name}<br />
//                                             username: ${user.username}<br />
//                                             address: ${user.address.street} ${user.address.suite} ${user.address.city}<br />
//                                             company name: ${user.company.name}<br />
//                                         </li><br />
//                                     `
//                                 )
//                             }).join("")}
//                         </ul>
//                     `
//                 )
//             }
//         },
//         error: function (error) {
//             console.error(error);
//         }
//     })
// }, false)

// Same call using .fetch()
document.getElementById("buttonUsers").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            if (json !== undefined && json.length > 0) {
                document.getElementById("resultOfUsers").innerHTML = (
                    `
                        <ul>
                            ${json.map((user, index) => {
                                return (
                                    `
                                     <li key=${index}>
                                        id: ${user.id}<br />
                                        name: ${user.name}<br />
                                        email: ${user.email}<br />
                                        address: ${user.address.street} ${user.address.suite} ${user.address.city}<br />
                                        company: ${user.company.name}<br />
                                     </li><br />
                                    `
                                )
                            }).join("")}
                        </ul>
                    `
                )
            }
        })
        .catch(error => {console.error(error);});
})

// Create post
document.getElementById("createPost").addEventListener('click', function() {
    var userId = document.getElementById("userId").value;
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    // console.error("User Id", userId);
    // console.error("Title", title);
    // console.error("Body", body);

    function createPost(userId, title, body) {
        if (userId > 0 && title !== "" && body !== "") {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            .then(response => response.json())
            .then(convertedResponseToJson => console.log("Successfuly created post", convertedResponseToJson))
            .catch(err => console.error(err));
        }
    }

    createPost(userId, title, body)
})

// DELETE POST

document.getElementById("deletePost").addEventListener("click", function(){
    // Math.random() -> 0...1 (but without 1)...0.99
    let randomNumber = Math.floor(Math.random() * 101);
    console.log("The random number is", randomNumber);

    fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`, {
        method: "DELETE"
    })
        .then(response => console.log(response))
        .catch(error => console.error(error));

});

// HOMEWORK!!!!
// 1. Return and print every property with their values from 23 post
// 2. Show all albums that have "omnis" in their title
// 3. Create new user