// Explore the document object

// console.dir(document);

//console.log(document.title);
//document.title = "G6";
//console.log(document.all);
// console.log(document.all[10])
// document.all[10].textContent = "Hello G6";
// console.log(document.body);

//Selectors

// GETELEMENTBYID

// console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "Hello G6";
// headerTitle.innerText = "Hello G6";
// console.log(headerTitle.textContent);
headerTitle.style.borderBottom = "solid 5px red";


// GETELEMENTSBYCLASSNAME

// console.log(document.getElementsByClassName("list-group-item"));
let listItems = document.getElementsByClassName("list-group-item");
// console.log(listItems[0])
// listItems[0].textContent = "Hello 1";
// listItems[0].style.fontWeight = "bold";
// listItems[0].style.backgroundColor = "yellow";

//throws error
// listItems.style.backgroundColor = "yellow";
// for(let i = 0; i< listItems.length; i++){
//     listItems[i].style.backgroundColor = "yellow";
// }

// GETELEMENTSBYTAGNAME

// let li = document.getElementsByTagName("li");
// console.log(li)
// li[1].style.color = "blue"
// li[1].style.backgroundColor = "yellow";
// li[1].textContent = "DOM IS AWOSOME"

// for(let i = 0 ; i < li.length ; i++){
//     li[i].style.backgroundColor = "rgb(1,1,1)";
//     li[i].style.color = "white";
// }

// QUERYSELECTOR
// let header = document.querySelector("#main-header");
// header.style.border = "solid 13px blue";
// let input = document.querySelector("input");
// input.value = "WOWWW";

// let submit = document.querySelector("input[type=submit]");
// submit.value = "SEND"

// let secondListItem = document.querySelector(".list-group-item:nth-child(2)");
// secondListItem.style.backgroundColor = "red"

//QUERYSELECTORALL

// let titles = document.querySelectorAll(".title");
// titles[0].style.color = "red";
// titles[1].style.color = "blue";

let oddListItems = document.querySelectorAll("li:nth-child(odd)");
let evenListItems = document.querySelectorAll("li:nth-child(even)");
for(let i = 0; i < oddListItems.length; i++) {
    oddListItems[i].style.backgroundColor = "#f4f4f4"
}
for(let i = 0; i < evenListItems.length; i++) {
    evenListItems[i].style.backgroundColor = "#ccc"
}

