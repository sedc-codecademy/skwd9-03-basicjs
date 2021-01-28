// console.log("connected");
let author = document.getElementById("author");
let bookName = document.getElementById("book");
let myBtn = document.getElementById("myBtn");
let books = [];

function NewBook(authorName, bookTitle) {
  this.authorName = authorName;
  this.bookTitle = bookTitle;
  this.printName = function () {
    console.log(`Name of book ${this.bookTitle}`);
  };
}

myBtn.addEventListener("click", function () {
  let newBook = new NewBook(author.value, bookName.value);
  console.log(newBook);
  books.push(newBook);
  console.log(books);
  console.log(newBook.printName());
});
