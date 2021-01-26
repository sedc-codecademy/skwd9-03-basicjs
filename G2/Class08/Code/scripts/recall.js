let fullNames = ["Petko Petkovski", "Marko Markovski", "Ana Anevska"];
let jobTitles = ["student", "doctor", "Software engineer"];

function Person(fName, job){
    this.fullName = fName;
    this.jobTitle = job;
}

function getPeopleObjects(fullNamesArray,jobTitlesArray ){
    let people = [];
    for(let i in fullNamesArray){
        //we are creating objects for each piece of data from the arrays
        let person = new Person(fullNamesArray[i], jobTitlesArray[i]);
        people.push(person);
    }
    return people;
}

function printPeople(peopleArray){ //people array is array of Person objects
    for(let person of peopleArray){
        console.log(`Full name: ${person.fullName}, job title: ${person.jobTitle}`);
    }
}

let data = getPeopleObjects(fullNames, jobTitles); //data array is array of Person objects
printPeople(data);



