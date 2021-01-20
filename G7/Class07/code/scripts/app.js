// [Selectors]
// Inputs
let titleInput = document.getElementById('bp-title');
let contentInput = document.getElementById('bp-content');
let categoryInput = document.getElementById('bp-category');
let commentsInput = document.getElementById('bp-comments-yes');
let shareToFacebookInput = document.getElementById('bp-share');
// Buttons
let submitBtn = document.getElementById('submit');
// Content
let blogPostsContainer = document.getElementById('blog-posts');

// [Functions]

function createBlogPost(title, content, category, allowComments, shareToFacebook) {
    let blogPost = `
      <article>
        <h2>${title}</h2>
        <p>${content}</p>
        <p>Category: <strong>${category}</strong></p>`;

    if (allowComments) {
        blogPost += `<p>Comments:</p>`
    } 
    if (shareToFacebook) {
        blogPost += `<p>
                        <button>Share to Facebook</button>
                    </p>`
    }

    blogPost += `</article>`;

    blogPostsContainer.innerHTML = blogPost;
}

// [Event Handlers]
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // preventing button of type submit to submit the form

    createBlogPost(
        titleInput.value, contentInput.value, categoryInput.value, commentsInput.checked, shareToFacebookInput.checked
    )
})