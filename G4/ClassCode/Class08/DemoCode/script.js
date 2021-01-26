console.log('We are live!');

// -------------- OBJECTS ------------------

// ---------- Literal Notation --------------
let kiki = {
    firstName: 'Kristina',
    lastName: 'Spaseska',
    age: 33,
    canSing: false,
    // can't write code
    saySomething: function(text){
        return `${this.firstName} says ${text}!`; // keyword THIS refers to the object that it is a part of
    }
};

// accessing a property in object
console.log(kiki.firstName);
console.log(kiki.age);
let wiseThoughtsPt1 = kiki.saySomething('JS is really easy');
console.log(wiseThoughtsPt1);

//change value of property
kiki.age = 34;
console.log(kiki.age);
// adding new property
kiki.canCook = true;
// creating empty object
let nate = {};

// ---------- Constructor Notation (1) --------------
let dog = new Object();
dog.name = "Sharko";
// 20 lines of code
dog.breed = "Dzukela";
// complex math equation to get dog's age
dog.age = 2;
dog.bark = function(){
    return `WOOF WOOF WOOF`;
}
console.log(dog.breed);
console.log(dog.bark());

// accessing property with ['propertyName']
console.log(dog['name']);
console.log('Dog object before delete', dog);
// deleting a property
delete dog.breed;
console.log('Dog object after delete', dog);

// Exercise 3
// delete the lecture property from the following object. Add a property age to the object. Add a method getFullName that returns the full name ( First Name and Last name )
let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
};

console.log(trainer.lecture);
delete trainer.lecture;
console.log(trainer.lecture);
trainer.age = 25;
console.log(trainer);
trainer.getFullName = function(){
    return `${this.name} ${this.lastName}`;
};
let trainerFullName = trainer.getFullName();
console.log(trainerFullName);

// ---------- Constructor Notation (2) --------------
// Using Constructor Functions

function Dog(nameFromUser, breedFromUser, ageFromUser, favFoodFromUser, isLazyFromUser){
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = ageFromUser;
    this.myThis = this;
    this.favFood = favFoodFromUser;
    this.isLazy = isLazyFromUser;

    this.bark = function(){
        console.log(`What is this from method inside an object: ${this}`)
        return 'WOOF WOOF WOOF';
    }
}
let myDog = new Dog('Alice', 'Belgian Shepperd', 7, 'chicken', false);
// console.log(myDog);
// console.log(myDog.breed);
// console.log(myDog.favFood);
// console.log(myDog.bark());
console.log(myDog.myThis);
let myNeighboursDog = new Dog('Otto', 'Golden Retriever', 1);
// console.log(myNeighboursDog);
// console.log(myNeighboursDog.favFood);
console.log(myNeighboursDog.myThis);

function checkingWhatIsThis(){
    console.log(`What is this from regular function: ${this}`);
}
console.log(' --------------- THIS ---------------');
checkingWhatIsThis();
myDog.bark();

console.log(' --------------- Exercise 04 ---------------');
// Exercise 04
/* Create a car object with some properties
model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance. */
function Car(inputModel, inputColor, inputYear, inputFuel, inputFuelConsumption){
    this.model = inputModel;
    this.color = inputColor;
    this.year = inputYear;
    this.fuel = inputFuel;
    this.fuelConsumption = inputFuelConsumption;

    this.calculateDistance = function(inputDistance){
        let fuelWeNeed = inputDistance * (this.fuelConsumption / 100);
        
        // if(fuelWeNeed > this.fuel){
        //     return `Sorry, you cannot go on holiday with this car!`;
        // } else {
        //     return `You can go on holiday! Hooray!`;
        // }
        // new fancy ternary operators (use them :) )
        return fuelWeNeed > this.fuel ? `Sorry, you cannot go on holiday with this car!` : `You can go on holiday! Hooray!`;
    };
}

let car01 = new Car('Ford', 'silver', 2006, 30, 7);
let car02 = new Car("BMW", "black", "2015", 60, 4);
// let car100
let cars = [];
cars.push(car01);
cars.push(car02);
console.log(car01.model);
console.log(car01.calculateDistance(1000));
console.log(cars);

//used to prevent refreshing
// event.preventDefault();