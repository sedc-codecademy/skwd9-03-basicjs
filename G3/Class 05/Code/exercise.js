//selecting element by id
// let header = document.getElementById("myTitle");
// console.log(header);//getting content from node
// console.log(header.innerText);//getting text content from node

// selecting element by class
// let paragraphs = document.getElementsByClassName("myParagraph");
// console.log(paragraphs);//returns list with paragraphs
// console.log(paragraphs[0]);//returns list item with index 0
// console.log(paragraphs[0].innerText);//returns text content from node
// let paragraphSecond= document.getElementsByClassName("second");
// console.log(paragraphSecond);
// console.log(paragraphSecond[0])//returns list item with index 0
// console.log(paragraphSecond[0].innerText);

//selecting elements by tag
// let paragraphsByTag = document.getElementsByTagName("p");
// console.log(paragraphsByTag);
// console.log(paragraphsByTag[1]);
// console.log(paragraphsByTag[1].innerText);
// let textElements= document.getElementsByTagName("text");
// console.log(textElements);
// console.log(textElements[0]);
// console.log(textElements[0].innerText);

// //selecting elements with queryselector
// let paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);
// console.log(paragraphs[0]);
// console.log(paragraphs[0].innerText);
// let firstP= document.querySelector(".myParagraph");
// console.log(firstP);
// console.log(firstP.innerText);
// let pageHeader= document.querySelector("#myTitle");
// console.log(pageHeader);
// console.log(pageHeader.innerText);

//finding sibiling element
// let paragraph = document.getElementsByClassName("myParagraph")[0];
// let sibling = paragraph.nextElementSibling;
// console.log(paragraph);
// console.log(sibling);
// console.log(sibling.previousElementSibling);

// //finding parent element
// let paragraphElement = document.getElementsByClassName("myParagraph")[0];
// let paragraphParent = paragraphElement.parentElement;
// console.log(paragraphElement);
// console.log(paragraphParent);

//finding child elements
// let divElement = document.getElementById("main");
// let childElements = divElement.children;
// console.log(childElements);
// let firstChild = divElement.firstElementChild;
// console.log(firstChild);
// let lastChild = divElement.lastElementChild;
// console.log(lastChild);
// console.log(childElements[1]);

// //changing content of some element
// let header = document.getElementById("myTitle");
// console.log(header.innerText);
// header.innerText+=" this is some dummy content";
// console.log(header.innerText);
// header.innerText = "This is some new dummy content";
// console.log(header.innerText);

//changing and adding content in div element
let divWithChangedContent = document.getElementById("main");
console.log(divWithChangedContent);
divWithChangedContent.innerHTML +=`<p>
    This is generated paragraph
</p>`;
console.log(divWithChangedContent);
divWithChangedContent.innerHTML="";
console.log(divWithChangedContent);