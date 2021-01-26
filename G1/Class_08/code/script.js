// Objects in Javascript
//Everything is an object in javascript!

//Non objects: string, boolean, number, undefined. Everything else is an object

// Create an object in Javascript
// This is the first paradim encapsulation. We are griuping all properties and functionalities
// connected to a real object in the real life, in one object.
// If we define variables in the global scope they are attached to the parent window object
// let timeToBake = 20;
// let timeInOven = 10;

let pizza = {
    name: 'capri',
    slices: 8,
    ingredients: ['cheese','mashrooms','ham','tomato sauce'],
    timeToBake: 30,
    timeInOven: 10,
    showWhenReady: function(){
        return this.timeToBake - this.timeInOven;
    }
}

// let pizza2 = {
//     name: 'margarita',
//     slices: 8,
//     ingredients: ['cheese','mashrooms','tomato sauce'],
//     timeToBake: 30,
//     timeInOven: 17,
//     showWhenReady: function(){
//         console.log(this);
//         return this.timeToBake - this.timeInOven;
//     }
// }
// // This is the way to access the properites and methods in javascript objects
// console.log(`The name of the first pizza is:  ${pizza.name}`)
// console.log(`The minutes left to finish baking your pizza are: ${pizza2.showWhenReady()}`);

// // Second way to access a property value in an object
// console.log(`The number of slices in the ${pizza.name} pizza are ${pizza['slices']}`);

// // Second way of creating objects in Javascript is with Object constructor / new Object();

let pizzaSandwich = new Object();
pizzaSandwich.name = 'Calabreze';
pizzaSandwich.ingredients = ['cheese','bread','lettuce','pickles','salami'];
pizzaSandwich.timeToBake = 15;
pizzaSandwich.timeInOven = 5;
pizzaSandwich.checkWhenReady = function () {
    return pizzaSandwich.timeToBake - pizzaSandwich.timeInOven;
};

// // This in the global scope is referencing the Window object from javascript
// console.log(this);

// // This in an literal object is referencing the object literal itself.
// console.log(`The this in pizza2 is ${pizza2.showWhenReady()}`);
// console.log(pizza.name); // There the name is capri
// pizza.name = 'fungi';
// console.log(pizza.name); // here the name is fungi

// console.log(pizzaSandwich.checkWhenReady());

// // Empty object
// let emptyPizza = {};
// emptyPizza.name = 'new pizza';
// console.log(emptyPizza.name);
// // Empty object v2
// let emptyPizzaV2 = new Object();

// delete emptyPizza.name;
// console.log(emptyPizza.name);

// let trainer = { 
// 	name :  "Stefan",
// 	lastName: "Stefanovski",
// 	academy: "SEDC",
// 	lecture: "Objects"
// };
// // 1. Delete lecture property
// delete(trainer.lecture);
// // 2. Add age property and give it value
// trainer.age = 29;
// // 3. Add getFullName method that returns the name + lastName
// trainer.getFullName = function() {
//     return trainer.name + ' ' + trainer.lastName;
// }

// console.log(trainer.getFullName());
let carConstuctorcalled = 0;
// Creating objects with constructor in Javascript
// On right side are the properties of the objects and on right side we assign them to some values
function Car(make,color,kilometersPassed,yearOfProduction,isItRegistered,babaDaliJaVozela){
    this.brend = make;
    this.boja = color || 'red';
    this.kilometri = kilometersPassed;
    this.godinaNaProizvodstvo = yearOfProduction;
    this.daliERegistrirana = isItRegistered;
    this.didGrandmaDroveIt = babaDaliJaVozela;
    this.isNew = function(){
        if(this.godinaNaProizvodstvo > 2010){
            return true;
        }
        return false;
    }
    carConstuctorcalled++;
}

let vokswagenPolo = new Car('Vokswagen','blue',180000,2010,false,true);

let renaultMegane = new Car('Renault','blue',200000,1999,true,false);
let renaultMegane2 = new Car('Renault','red' ,200000,1999,true,false);

// console.log(vokswagenPolo.boja);
// console.log(vokswagenPolo.didGrandmaDroveIt);

console.log(renaultMegane);
console.log(renaultMegane.kilometri);
console.log(renaultMegane.isNew());
console.log(carConstuctorcalled);

// Props: firstName, lastName, isMature, friends, ssn
// Method: speak --> Hello my name is firstName lastName and I am mature/notmature and my 
// friends are ...

