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

// [Data]
let blogPosts = [];

// [Functions]
function createBlogPost(title, content, category, allowComments, shareToFacebook) {
    let blogPost = new BlogPost(title, content, category, allowComments, shareToFacebook)
    blogPosts.unshift(blogPost);
    renderBlogPosts();
    cleanUpFormInputs();
}

function renderBlogPosts() {
    blogPostsContainer.innerHTML = '';
    for (let blogPost of blogPosts) {
        let blogPostHTML = `
              <article>
                <h2>${blogPost.title}</h2>
                <p>${blogPost.content}</p>
                <p>Category: <strong>${blogPost.category}</strong></p>`;

            if (blogPost.allowComments) {
                blogPostHTML += `<section>
                                    <h3>Comments:</h3>
                                    <div id="${blogPost.id}">
                                        <label>Add comment</label>
                                        <br />
                                        <input type="text" name="comment"
                                        placeholder="Add comment" />
                                        <button type="button">Post</button>
                                    </div>`;
                for (let comment of blogPost.comments) {
                    blogPostHTML += `<p>${comment.content}</p>`
                }
                blogPostHTML += `</section>`
            } 
            if (blogPost.shareToFacebook) {
                blogPostHTML += `<p>
                                <button>Share to Facebook</button>
                            </p>`
            }
            blogPostHTML += `</article>`

        blogPostsContainer.innerHTML += blogPostHTML;
    }
    setUpCommentSection();
}

function setUpCommentSection() {
    for (let blogPost of blogPosts) {
        let commentContainer = document.getElementById(blogPost.id);
        if (commentContainer) {
            let input = commentContainer.querySelector('input');
            let button = commentContainer.querySelector('button');

            button.addEventListener('click', function () {
                if (validateInputs([input])) {
                    let comment = new BlogComment(input.value);
                    blogPost.addComment(comment)
                    renderBlogPosts();
                } else {
                    alert('Comment is empty, please check and try again')
                }
                
            })
        }
    }
}

function cleanUpFormInputs() {
    titleInput.value = '';
    contentInput.value = '';
    categoryInput.value = '';
    commentsInput.checked = false;
    shareToFacebookInput.checked = false;
}

function validateInputs(inputs) {
    for (let input of inputs) {
        if (!input.value) {
            return false;
        }
    }
    return true;
}

// [Event Handlers]
submitBtn.addEventListener('click', function (e) {
    e.preventDefault(); // preventing button of type submit to submit the form
    if (validateInputs([titleInput, contentInput, categoryInput])) {
        createBlogPost(
            titleInput.value, contentInput.value, categoryInput.value, commentsInput.checked, shareToFacebookInput.checked
        )
    } else {
        alert('Form is invalid, please check inputs.')
    }
})

// [Models]
function BlogPost(title, content, category, allowComments, shareToFacebook) {
    this.id = Math.floor(Math.random() * 100000);
    this.title = title;
    this.content = content;
    this.category = category;
    this.allowComments = allowComments;
    this.shareToFacebook = shareToFacebook;
    this.comments = [];
    this.addComment = function (comment) {
        this.comments.push(comment);
    }
}

function BlogComment(content) {
    this.id = Math.floor(Math.random() * 100000);
    this.content = content;
} 