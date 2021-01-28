// Jquery

// $(document).ready(function () {
//     console.log('jQuery works fine')
// })

// jQuery Selectors

// let title = $('#title'); // we are getting a jquery collection
// console.log(title);
// console.log(title[0])

// title.hide();
// title[0].hide()

// let postTitles = $('h2');
// console.log(postTitles);

// let postContents = $('.post-content');
// console.log(postContents);

// let firstContent = postContents[0];
// let firstContent = postContents.first();
// console.log(firstContent);

// DOM Manipulation

// changing text in JS
// document.getElementById('title').innerText = 'New Title';
// .. in jquery
// $('#title').text('New Title from jquery');

// changing HTML in JS
// document.getElementById('title').innerHTML = '<br><br><i>New HTML</i><br><br>';
// ..in jquery
// $('#title').html('<br><br><i>New HTML</i><br><br>')

// Changing CSS property values in JS
// document.getElementById('title').style.color = 'green';
// ..in jQuery
// $('#title').css('color', 'red');

// Event handlers
// let readMore = $('a').first();
// console.log(readMore)

// readMore.click(function () {
//     console.log('Link clicked');
//     $('.comments-container').first().toggle();
// })

// readMore.on('click', function() {
//     console.log('Link clicked')
// })

// let postButton = $('button').last();

// postButton.click(function () {
//     let value = $('input').last().val();
//     console.log('value:', value)
// })

// [AJAX]
// jQuery Ajax

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts'
// }).done(function (res) {
//     console.log(res);
// })

// Fetch

// GET ALL POSTS

// fetch(
//     'https://jsonplaceholder.typicode.com/posts'
//     ).then(function (res) {
//         return res.json()
//     }).then(function (res) {
//         console.log(res)
//     })

// console.log('test1');
// console.log('test2');

// GET SINGLE POST

// fetch("https://jsonplaceholder.typicode.com/posts/34")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     console.log(res);
//   });

// CREATE POST

// let newBlogPost = {
//     title: 'New Title',
//     body: 'Testing body content',
//     userId: 1
// }
// console.log(newBlogPost)

// let parsedBlogPost = JSON.stringify(newBlogPost)
// console.log(parsedBlogPost)

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: parsedBlogPost,
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
// }).then(function (res) {
//     return res.json();
// }).then(function (blogPost) {
//     console.log(blogPost)
// })

// UPDATE POST - PUT
// let post34 = {
//   body: "changed",
//   id: 34,
//   title: "magnam ut rerum iure",
//   userId: 4,
// };
// console.log(post34);

// let stringifiedPost34 = JSON.stringify(post34);
// console.log(stringifiedPost34);

// fetch("https://jsonplaceholder.typicode.com/posts/34", {
//   method: "PUT",
//   body: stringifiedPost34,
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// }).then(function (res) {
//     return res.json()
// }).then(function (blogPost) {
//     console.log(blogPost);
// })

// UPDATE POST - PATCH

// let post34 = {
//   body: "changed",
// };
// console.log(post34);

// let stringifiedPost34 = JSON.stringify(post34);
// console.log(stringifiedPost34);

// fetch("https://jsonplaceholder.typicode.com/posts/34", {
//   method: "PATCH",
//   body: stringifiedPost34,
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (blogPost) {
//     console.log(blogPost);
//   });

// DELETE POST

// fetch('https://jsonplaceholder.typicode.com/posts/34', {
//     method: 'DELETE'
// }).then(function (res) {
//     return res.json();
// }).then(function (res) {
//     console.log(res);
// })

// ERROR HANDLING
fetch("https://jsonplaceholder.typicode.com/posts/34")
  .then(function (res) {
    console.log("1st then", res);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  })
  .then(function (res) {
    console.log("2nd then", res);
  })
  .catch(function (error) {
      console.log(error);
  });

// JSON STRINGIFY

let dog = {
  name: "Boem",
  age: 2,
};

let stringifiedDog = JSON.stringify(dog);
// console.log(stringifiedDog)

let parsedDog = JSON.parse(stringifiedDog);

// console.log(parsedDog)

let jsonDog = `
{
    "name": "Boem",
    "age": 2
}
`;

// console.log(JSON.parse(jsonDog));
