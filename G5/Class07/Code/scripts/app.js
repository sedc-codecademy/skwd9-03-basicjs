
// 1. Create an object by using - Literal Notation

let hotel = {};
console.log(hotel);


let person = {
    // Properties
    firstName: "Martin",
    lastName: "Panovski",
    age: 27,
    hobbies: ["Reading", "Running", "Swimming"],
    isLazy: true,
    profession: "Software Developer",
    "can sing": false,
    // Methods
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    showHobbies: function() {
        for(let i = 0; i < this.hobbies.length; i++){
            console.log(this.hobbies[i]);
        }
    }
}
console.log(person);

console.log(person.firstName);
console.log(person.lastName);
console.log(person['age']);
console.log(person["can sing"]); //bad practice 

console.log(`${person.firstName} is a ${person.profession} and he is ${person.age} years old!`);   
console.log(person.getFullName());
console.log("Martin's hobbies are:");
console.log(person.showHobbies());


// 2. Creating an object by using the Object() constructor

let motel = new Object();
motel.name = "Trivago";
motel.rooms = 10;
motel.booked = 4;
motel.checkAvailability = function() {
    return this.rooms - this.booked;
}

console.log(motel.name);
console.log(motel.checkAvailability());


person.hasHeadache = false;
console.log(person);

delete person["can sing"];
delete person.isLazy;

console.log(person);