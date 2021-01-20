// Creating objects

// Literal notation

let dog = {
    name: 'Bob',
    owner: 'Mike',
    legs: 4,
    age: 3,
    hasTail: true,
    color: ['white', 'black', 'brown'],
    bark: function () {
        console.log('AV AV');
    }
}
// ['has tail']: true,

// console.log(dog);
// console.log(dog.name);
// console.log(owner)
// console.log(dog.owner);
// console.log(dog['legs']);
// dog.bark();

//CONSTRUCTOR NOTATION

function Person(name, age, city, job) {
    // KEY    : VALUE
    this.name = name;
    this.age = age;
    this.city = city;
    this.job = job;
}

let ivo = new Person('Ivo', 31, 'Skopje', 'JS Developer');
let ivan = new Person('Ivan', 29, 'Skopje', 'JS Developer')
// console.log(ivo, ivan);

function Dog(name, owner, age, legs, colors, hasTail) {
    this.dogName = name;
    this.dogOwner = owner;
    this.dogAge = age;
    this.dogLegs = legs;
    this.dogColors = colors;
    this.dogHasTail = hasTail;
}

let boem = new Dog('Boem', 'Ivo', 2, 4, ['gold'], true);

console.log(boem);
// console.log(boem.dogName)

// Changing property value
boem.dogOwner = 'Ivan';
boem.dogAge = 3;
console.log(boem);

// Delete properties
delete boem.dogColors;
console.log(boem);