
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
person.canDance = true;
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


let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}

delete trainer.lecture;
console.log(trainer);

trainer.age = 29;
console.log(trainer);

trainer.getFullName = function() {
    return this.name + " " + this.lastName;
}
console.log(trainer.getFullName());


// Constructor function

// let person1 = {
//     firstName: "Martin",
//     lastName: "Panovski",
//     age: 27
// }

// let person2 = {
//     firstName: "Martin",
//     lastName: "Panovski",
//     age: 27
// }

// let person3 = {
//     firstName: "Martin",
//     lastName: "Panovski",
//     age: 27
// }


function Person(fName, lName, age, birthYear, profession = "Uneployeed") {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.profession = profession;
    this.birthYear = birthYear;

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }

    this.calucalteYears = function(birthYear) {
        let currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }
}

let martin = new Person("Martin", "Panovski", 27, 1993, "Developer");
let angela = new Person("Angela", "Kostadinova", 25,  1995, "Junior Developer");
let unemployeedPerson = new Person("Bob", "Bobsky", 18, 2002);


let persons = [martin, angela];

console.log(martin.getFullName());
console.log(angela.getFullName());

console.log(martin.age);
console.log(martin.firstName);
console.log(angela.age);

console.log(persons);

console.log(unemployeedPerson.profession);


for(let i = 0; i < persons.length; i++){
    console.log(persons[i].getFullName() + " " + "and the person is " + persons[i].calucalteYears(persons[i].birthYear));
}


martin.isTrainer = true;

console.log(martin);
console.log(angela);


// Create constructor function called Car with properties type, numberOfDoors, color.
// Create two new instances(objects) of this constructor function


// this keyword

let height = this.innerHeight;
console.log(height);
console.log(this);


function testThis() {
    console.log(this);
}



let shape = {
    width: 200,
    testThis: function() {
        console.log(this);
    }
}

testThis(); // function declared in the global scope/context
shape.testThis() // function(method) that belongs to the shape object



let firstNameElement = document.getElementById("fName");
let lastNameElement = document.getElementById("lName");
let ageElement = document.getElementById("age");
let saveBtn = document.getElementById("save");

let students = [];

function Student(fName, lName, age) {
    this.firstName = fName,
    this.lastName = lName,
    this.age = age
}

saveBtn.addEventListener("click", function (e) {
    let tbody = document.getElementById('tbody');

    let student = new Student(firstNameElement.value, lastNameElement.value, ageElement.value);
    students.push(student);

    printStudents(students, tbody);

    console.log(students);
    clearInputs();
});

function printStudents(students, element) {
    element.innerHTML = "";
    for (let student of students) {
        element.innerHTML += 
        `<tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.age}</td>
        </tr>
        `
    }
}

function clearInputs() {
    firstNameElement.value = "";
    lastNameElement.value = "";
    ageElement.value = "";
}