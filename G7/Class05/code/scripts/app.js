// FIND NUMBERS IN ARRAY
// How many times is a number contained in an array
// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.

// function findNumber(number, array) {
//     let occurrences = 0;
//     // debugger;
//     for (let n of array) {
//         if (n === number) {
//             occurrences++;
//         }
//     }
//     return occurrences;
// }

// let input = parseInt(prompt('Please enter a number'));
// let numbers = [1, 5, 6, 9, 4, 5, 3, 5, 9, 0, 2, 5]

// console.log(findNumber(input, numbers))

// FILTER ODD/EVEN NUMBERS FUNCTION
// Write a function named filterOddEven that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result

// function filterOddEven(array, type) {
//     let result = [];

//     if (type === 'even') {
//         for (let number of array) {
//             if (number % 2 === 0) {
//                 result.push(number);
//             }
//         }
//     } else if (type === 'odd') {
//         for (let number of array) {
//            if (number % 2 !== 0) {
//                result.push(number);
//            }
//         }
//     } else {
//         return null;
//     }

//     return result;
// }

// let input = prompt('Please enter odd or even');
// let numbers = [1, 5, 6, 9, 4, 5, 3, 5, 9, 0, 2, 5]

// console.log(filterOddEven(numbers, input))

// Filter an array
// You have a list of 10 countries. Filter only the countries containing the letter "A" in the name

// let countriesList = [
//   "Albania",
//   "Brazil",
//   "Brunei",
//   "Chile",
//   "Colombia",
//   "Fiji",
//   "Greece",
//   "Macedonia",
//   "Peru",
//   "Serbia",
// ];

// function filterCountries(countries, letter) {
//     let filteredCountries = [];
//     for (let country of countries) {
//         for (let char of country) {
//             if (char.toLowerCase() === letter.toLowerCase()) {
//                 filteredCountries.push(country);
//                 break;
//             }
//         }
//     }
//     return filteredCountries;
// }

// let input = prompt('Please enter a letter');

// console.log(filterCountries(countriesList, input));

// Sort numbers array

// let unsortedNumbers = [65, 10, 9, 12, 24, 3, 95, 56, 5];

// function sortNumbers(numbers) {
//     let sortedNumbers = numbers;
//     let done = false;
//     while (!done) {
//         done = true;
//         for (let i = 0; i < sortedNumbers.length; i++) {
//             if (sortedNumbers[i - 1] > sortedNumbers[i]) {
//                 done = false;
//                 let temp = numbers[i - 1];
//                 sortedNumbers[i - 1] = sortedNumbers[i];
//                 sortedNumbers[i] = temp;
//             }
//         }
//     }
//     return sortedNumbers;
// }

// console.log(sortNumbers(unsortedNumbers))

// [DOM Manipulation]

// Select by ID
let titleEl = document.getElementById("title");
// console.log(titleEl);

// Select by class name
let listItemsLink = document.getElementsByClassName("link");
// console.log(listItemsLink)

// Select by tag name
let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// ES6 Selectors

// Query selector = always returning single value

let subtitle = document.querySelector("h2");
let titleEl2 = document.querySelector("#title");
let listItemsLink2 = document.querySelector(".link");
// console.log(subtitle, titleEl2, listItemsLink2);

// Query selector ALL = always returning an array

let paragraphs2 = document.querySelectorAll("p");
let titleEl3 = document.querySelectorAll("#title");
let listItemsLink3 = document.querySelectorAll(".link");
// console.log(paragraphs2, titleEl3, listItemsLink3);

// Select siblings
let aboutEl = document.getElementById("about");
// console.log(aboutEl);
// console.log(aboutEl.previousElementSibling);
// console.log(aboutEl.nextElementSibling);
// Select parent
// console.log(aboutEl.parentElement);

// Select children
let list = document.querySelector("ul");
// console.log(list);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
// console.log(list.children);

// Get text from an element

let paragraph = document.querySelector("p");
// console.log(paragraph);
// console.log(paragraph.textContent);
// console.log(paragraph.innerText);

// paragraph.innerText = 'This is some new text';

// paragraph.innerHTML = `<br><br>
//                        <div>This is some new text
//                        </div>
//                        <a href="#">Click me</a>`

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];

let studentsDiv = document.getElementById("students");

// TODO: Fix this there is a bug
function printStudents(students, element) {
  element.innerHTML = "";
  let studentsEls = '';
  for (let student of students) {
    studentsEls += `<li>${student}</li>`;
  }
  element.innerHTML = `<ol>${studentsEls}</ol>`;
}

printStudents(students, studentsDiv);

let gradesDiv = document.getElementById('grades');
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades, element) {
    element.innerHTML = '';
    let gradesHtml = '';
    for (let i = 0; i < subjects.length; i++) {
       gradesHtml += `<li>${subjects[i]}: ${grades[i]}</li>`;
    }
    element.innerHTML += `<ul>${gradesHtml}</ul>`
}

printGrades(subjects, grades, gradesDiv);