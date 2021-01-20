//let hotel = {}; //object literals
let hotel = new Object(); //constructor literal
//properties
hotel.name = "My hotel";
hotel.rooms = 70;
hotel.bookedRooms = 50;
hotel.hasGym = true;
//methods
hotel.isAvailable = function(){
    debugger;
    return (this.rooms - this.bookedRooms) > 0;
}

console.log(`Type of hotel ${hotel}`);
console.log(`Name of the hotel: ${hotel.name}`);
//Updating a property
hotel.name = "My new hotel";
console.log(`Name of the hotel after update: ${hotel.name}`);
//calling a method
let isHotelAvailable = hotel.isAvailable();
console.log(`Is available: ${isHotelAvailable}`);

delete hotel.bookedRooms;
console.log(`has property bookedRooms: ${hotel.hasOwnProperty("bookedRooms")}`);


let anotherHotel = {
    name:"Another hotel",
    rooms: 60,
    bookedRooms: 30,
    roomTypes: ["single", "double", "suite"],
    printRoomTypes: function(){
        debugger
        console.log("Room types:");
        for(let roomType of this.roomTypes){
            console.log(roomType);
        }
    }
}

console.log(`Name of the another hoel: ${anotherHotel.name}`);
anotherHotel.printRoomTypes();

//ADDING PROPERTIES AND METHODS
anotherHotel.location = "Skopje";
anotherHotel.printLocationAndNumOfRooms = function(){
    console.log(`The location is: ${this.location} and num of rooms is ${this.rooms}`);
}
anotherHotel.printLocationAndNumOfRooms();



delete anotherHotel.bookedRooms;
console.log(`Value of bookedRooms property: ${anotherHotel.bookedRooms}`);
