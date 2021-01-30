// 1. Implement login function => checked 
// 2. Insert username and password => checked
// 3. Validate if there is something entered in these inputs. Make sure to work only for inserted values
// 4. If true => greet the user with a message => checked
// 5. If false => tell him the error by displaying a message; => checked


let username = "";
let password = "dontknow!23";

function login(username, password) {
    if (username === "" || password === "") {
        console.log("ERROR! Please insert username and password");
    } else {
        console.log(`Welcome ${username}! How are you today`);
    }

    // opposite check
    // if(username !== "" && password !== ""){
    //     console.log(`Welcome ${username}! How are you today`);
    // } else {
    //     console.log("ERROR! Please insert username and password");
    // }
}

login(username, password);