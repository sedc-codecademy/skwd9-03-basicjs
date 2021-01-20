function Person(fName, lName, year){

    this.firstName = fName;
    this.lastName = lName;
    this.yearOfBirth = year;
    this.printFullName = function(){
        console.log(`Full name: ${this.firstName} ${this.lastName}`);
    }
}

let personA = new Person("Tanja", "Stojanovska", 1994);
console.log("Person A");
console.log(personA.firstName);
personA.printFullName();

let personB = new Person("Petko","Petkovski", 1970);
console.log('Person B');
console.log(personB.yearOfBirth);
personB.printFullName();
personB.job = "student";
console.log(personB.hasOwnProperty("job"));

//when we add properties or methods they belong to the object we are adding them to
// the function is just an initial definition how they should look
//the added properties will not be present in any further instantiated objects

let personC = new Person("Test","Test", 1970);
console.log('Person C');
console.log(personC.hasOwnProperty("job"));
