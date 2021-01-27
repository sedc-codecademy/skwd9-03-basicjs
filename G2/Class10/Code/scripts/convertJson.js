//javascript object
let academy = {
    trainer : "Petko Petkovski",
    assistant: "Ana Anevska",
    students: [
        "Marija",
        "Stefan",
        "Kiril"
    ],
    academyName: "SEDC"
};
//we pack the js object, for example, to send it to the server
// the client and the server both understand JSON format
let jsonObject = JSON.stringify(academy); //serialization
console.log(`Json object: ${jsonObject}`);

//if we have a json string, probably from the server, we want to unpack it, so we can work with it
//we parse the json into js object
let parsedObject = JSON.parse(jsonObject); //deserialization
console.log(parsedObject);



