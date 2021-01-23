let playerName="Fred";//this is global variable
let playerScore=15;//this is global variable
let playerRank=1;//this is global variable

let player = new Object();//creating empty object
player.name = "Fred";//adding new property and value to the object
player.playerScore=15;//adding new property and value to the object
player.rank=1;//adding new property and value to the object(these properties belong to the object)
console.log(player.name);
console.log(player);


let hotel = {
    name:'Aleksandar Palas',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes:['twin','doubles','suite'],
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

// console.log(hotel.roomTypes);
// console.log(hotel.checkAvailability());
hotel.yearBuild = 1970;


function Hotel(name, rooms, booked){//adding properties to constructor
    this.name = name;//assigning values to properties from object(this is as pointer for property from object)
    this.rooms = rooms;//assigning values to properties from object
    this.booked = booked;//assigning values to properties from object

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
    
}

let tempHotel = new Hotel('Makedonija',25,10);
let temp2Hotel = new Hotel('Srbija',30,10);
let temp3= new Hotel('Makedonija',25,10);
temp3.name="Imeee";
console.log(tempHotel.name);
console.log(temp3.name);


function windowSize() { 
	let width= this.innerWidth; 
	let height = this.innerHeight; 
	return [height, width]; 
}

console.log(windowSize());

var width = 600;
let shape= {
    width: 300
}; 

function showWidth() { 
	console.log(this.width);
}
shape.showWidth = showWidth; 
shape.showWidth(); // 300 

showWidth(); //600