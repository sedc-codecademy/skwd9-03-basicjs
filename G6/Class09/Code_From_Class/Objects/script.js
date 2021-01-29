let hotelName = "Aleksandar Palas";
let hotelRooms = 100;
let hotelAvailableRooms = 45;
let hasPool = true;

function bookRoom() {
    hotelAvailableRooms = hotelAvailableRooms - 1;
}

// Creating Object Using Literal Notation
// let hotel = {} => new Object()
let hotel = {
    name: "Aleksandar Palas",
    rooms: 100,
    availableRooms: 45,
    hasPool: true,

    bookRooms: function(numberOfRooms) {
        this.availableRooms-= numberOfRooms;
    }

};

// ADDING NEW PROPERTY
// hotel.hasGym = false;

// UPDATE PROPERTY VALUE
// hotel.rooms = 150;

// DELETE PROPERTY FROM OBJECT
// delete hotel.hasPool;

// console.log(hotel)
//Accessing properties and methods first approach

// console.log(hotel.name);
// console.log(hotel.rooms);
// console.log(hotel.availableRooms);

// hotel.bookRooms(10);
// console.log(hotel.availableRooms)

// second aprroach

// console.log(hotel['name'])
// console.log(hotel['availableRooms'])
// console.log(hotel['rooms'])


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
    console.log(`Hi my name is ${this.personName} and I am ${this.personAge} years old.`)
}

// Factory Function => literal notation

function createHotel(name, rooms, availableRooms, hasPool) {
    return {
        name,
        rooms,
        availableRooms,
        hasPool,

        bookRooms: function(numberOfRooms) {
            this.availableRooms-= numberOfRooms;
        }
    }
}

let hotel1 = createHotel("Aleksandar Palas", 120, 33, true);
let hotel2 = createHotel("Mariot", 200, 99, false);

// Constructor function => constructor notation

function Hotel(name, rooms, availableRooms, hasPool) {
    console.log("THIS IS REFFERING TO: ", this)
    this.name = name;
    this.rooms = rooms;
    this.availableRooms = availableRooms;
    this.hasPool = hasPool;
    this.bookRooms = function(numberOfRooms) {
        this.availableRooms-= numberOfRooms;
    }
}

let hotel3 = new Hotel("Mariot", 200, 99, false); // new => {}

// PRIMITIVE VALUES IN JS

// string
// number
// boolean
// null
// undefined

// REFERENT VALUES

// OBJECT
// FUNCTION
// ARRAY

let x = { value: 10 }; // ADDRESS: JAKSHDAKLSHDAJ123SJGH => this is stored in x
let y = x; // we pass the ADRESS to y

x.value = 20;

console.log("X: ", x.value);
console.log("Y: ", y.value);


let car = {
    model: "Range Rover",
    color: "white",
    year: 2018,
    fuel: 40,
    fuelConsumption: 11,

    calculateFuelConsumptionForDistance: function(distance) {
        return distance * (this.fuelConsumption / 100);
    }
}

let fuelNeeded = car.calculateFuelConsumptionForDistance(130);
console.log(fuelNeeded)