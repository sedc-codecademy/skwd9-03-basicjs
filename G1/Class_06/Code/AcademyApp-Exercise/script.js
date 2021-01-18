let main = document.getElementById("main");
let headers = main.firstElementChild;
let content = main.lastElementChild;

let students = ["Damjan Stojanovski","Greg Gregsky","Bob Bobsky","Jill Jilsky"];
let subjects = ["Math","JavaScript","Sport","C#","Databases"];
let grades = ["4","4","3","5","3"];

function printStudentNames(students,element){
    element.innerHTML = "";
    element.innerHTML += `<ol>`
    for(let studentName of students){
        element.innerHTML += `<li>${studentName}</li>`
    }
    element.innerHTML += `</ol>`;
}

function printSubjectGrades(subjects,grades,element){
    element.innerHTML = "";
    element.innerHTML += `<ul>`;
    for(let i = 0; i < subjects.length; i++){
        element.innerHTML += `<li>The subject is ${subjects[i]} and the grade is ${grades[i]}</li>`;
    }
    element.innerHTML += `</ul>`;
}

function panelDesider(role,name){
    if(role === "teacher"){
        if(name.length > 3 && validateName(name)){
            headers.innerHTML += `<h1>Hello there ${name}</h1>`
            printStudentNames(students,content);
        }
        else{
            headers.innerHTML += `<h1>Sorry you are not logged in</h1>`
        }
    }else if(role === "student"){
        if(name.length > 3 && validateName(name)){
            headers.innerHTML += `<h1>Hello there ${name}</h1>`
            printSubjectGrades(subjects,grades,content)
        }
        else{
            headers.innerHTML += `<h1>Sorry you are not logged in</h1>`
        }
    }else{
        headers.innerHTML += `<h1>Sorry you are not logged in</h1>`
    }
}

function validateName(name){
    let isDigit = false;
    for(let letter of name){
       if(isNaN(letter)){
           isDigit = true;
           return;
       }
    }
    return isDigit;
}


panelDesider(prompt("Please enter your role?"),prompt("Please enter your name"));