
// Exercise 1
// 1. Implement login function => checked 
// 2. Insert username and password => checked
// 3. Validate if there is something entered in these inputs. Make sure to work only for inserted values
// 4. If true => greet the user with a message => checked
// 5. If false => tell him the error by displaying a message; => checked


let username = "Martin";
let password = "dontknow!23";

// function login(username, password) {
//     if (username === "" || password === "") {
//         console.log("ERROR! Please insert username and password");
//     } else {
//         console.log(`Welcome ${username}! How are you today`);
//         checkUserRole();
//     }

//     // opposite check
//     // if(username !== "" && password !== ""){
//     //     console.log(`Welcome ${username}! How are you today`);
//     // } else {
//     //     console.log("ERROR! Please insert username and password");
//     // }
// }

// login(username, password);


// Exercise 2

// 1. Create an object constructor function with five props (username, pass, role, courses, homeworks)
// 2. Add the appropriate properties
// 3. Create checkUserRole() function
// 4. Insert input parameter to the function
// 5. If trainer => display its courses
// 6. If assistant => display its homeworks
// 7. If manager => display that the page is in progress

function User(username, pass, role, courses = [], homeworks = []) {
    this.username = username;
    this.password = pass;
    this.role = role;
    this.courses = courses;
    this.homeworks = homeworks;

    // this.checkUserRole = function() {
    //     if(this.role === "trainer"){

    //     }else if(this.role === "assistant") {

    //     }
    //     else if(this.role === "manager") {
    //         console.log("Page in progress");
    //     }
    // }
}


let martin = new User('pano', 'dontknow!23', "trainer", ["BJS", "AJS"]);
let angela = new User('angela', 'hardwork!23', "assistant", [], ["HW1", "HW2"]);
let users = [martin, angela];

function checkRole(user) {
    if (user.role === "trainer") {
        displayItems(user.courses);
    } else if (user.role === "assistant") {
        displayItems(user.homeworks);
    }
    else if (user.role === "manager") {
        console.log("Page in progress");
    }
}

function displayItems(items) {
    for(let item of items){
        console.log(item);
    }
}

function userLogin(username, password) {
    if (username === "" || password === "") {
        console.log("ERROR! Please insert username and password");
    } else {
        for(let user of users){
            if(user.username === username && user.password === password) {
                console.log(`Welcome ${username}! How are you today`);
                checkRole(user);
                break;
            }
        }
    }
}


userLogin(martin.username, martin.password);
userLogin(angela.username, angela.password);



// Example forms => prevent default
let fName = document.getElementById('fName');
let lName = document.getElementById('lName');
let age = document.getElementById('age');
let btn = document.getElementById('save');


btn.addEventListener('click', function(event) {
    event.preventDefault();
    let person = {
        firstName: fName.value,
        lastName: lName.value,
        age: age.value
    }

    console.log(person);
});