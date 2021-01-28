let hotelName = "Aleksandar Palas";
let hotelRooms = 100;
let hotelAvailableRooms = 45;
let hasPool = true;

function bookRoom() {
    hotelAvailableRooms = hotelAvailableRooms - 1;
}

// Creating Object Using Literal Notation

let hotel = {
    name: "Aleksandar Palas",
    rooms: 100,
    availableRooms: 45,
    hasPool: true,

    bookRooms: function(numberOfRooms) {
        this.availableRooms-= numberOfRooms;
    }

};
//Accessing properties and methods first approach

// console.log(hotel.name);
// console.log(hotel.rooms);
// console.log(hotel.availableRooms);

// hotel.bookRooms(10);
// console.log(hotel.availableRooms)

// second aprroach

console.log(hotel['name'])
console.log(hotel['availableRooms'])
console.log(hotel['rooms'])


// let personName = "Goce"
// let personAge = 28;
// let personEmail = "goce.kabov@yahoo.com"

// function introduceYourSelf(){
//     console.log(`Hi my name is ${personName} and I am ${personAge} years old.`)
// }


// Crating Object Using Constructor Notation

let person = new Object();
person.name = "Goce";
person.age = 28;
person.email = "goce.kabov@yahoo.com";

person.introduceYourSelf = function(){
    console.log(`Hi my name is ${personName} and I am ${personAge} years old.`)
}