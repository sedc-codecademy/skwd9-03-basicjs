let titleDiv = document.getElementById("title");
let contentDiv = document.getElementById("content");

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjectsArray, gradesArray, element){//element is contentDiv
     element.innerHTML = "";
     element.innerHTML += "<h1>Your grades are:</h1>";
     let ulElement = document.createElement("ul");

     for(let i in subjectsArray){
         let item = document.createElement("li");
         item.innerText = `${subjectsArray[i]}: ${gradesArray[i]}`;
         ulElement.appendChild(item);
     }
     element.appendChild(ulElement);
}

function printStudents(studentsArray, element){ //element is contentDiv
    element.innerHTML = ""; // clearing element
    element.innerHTML +="<h3>Your students:</h3>";
    element.innerHTML += "<ol>";
    for(let student of studentsArray){
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += "</ol>"
}

function print(fName, r, element){ //element is titleDiv
    element.innerHTML = ""; 
    element.innerHTML += `<h1>Hello ${fName}</h1>`;
    if(r === "teacher"){
        printStudents(students,contentDiv);
    }
    else if(r==="student"){
        printGrades(subjects, grades, contentDiv);
    }
    else{
        console.log("Invalid role");
    }
}

let firstName = prompt("Enter your name");
let role = prompt('Enter your role');

print(firstName, role, titleDiv);