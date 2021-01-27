// SELECTORS
// Links
let links = document.getElementsByClassName('nav-link');

// Pages
let homePage = document.getElementById('home-page');
let formPage = document.getElementById('form-page');

// Elements
let loader = document.getElementById('loader');
let bpContainer = document.getElementById('blog-posts-container');

// DATA
let baseUrl = 'https://jsonplaceholder.typicode.com';
let blogPosts = [];

// FUNCTIONS

function changePageInView(page) {
    switch (page) {
        case 'nav-home':
            homePage.style.display = 'block'; // show this element
            formPage.style.display = 'none'; // hide this element
            links[1].classList.remove('active'); // make this nav link inactive
            links[0].classList.add('active'); // make this nav link active
            break;
        case 'nav-form':
            homePage.style.display = 'none';
            formPage.style.display = 'block';
            links[0].classList.remove('active');
            links[1].classList.add('active');
            break;
        default:
            homePage.style.display = 'block';
            formPage.style.display = 'none';
            links[1].classList.remove('active');
            links[0].classList.add('active');
            break;
    }
}

function getPosts() {
    loader.style.display = 'block';

    fetch(`${baseUrl}/posts`)
    .then(function (res) {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error(res.status);
        }
    })
    .then(function (bps) {
        for (const bp of bps) {
            let newBp = new BlogPost(bp.id, bp.userId, bp.title, bp.body)
            blogPosts.push(newBp);
        }
        renderBlogPosts();

        loader.style.display = 'none';   
        console.log(blogPosts)
    })
    .catch(function (error) {
        loader.style.display = 'none';
        console.log(error)
    })
}

function renderBlogPosts() {
    bpContainer.innerHTML = '';

    for (const blogPost of blogPosts) {
        bpContainer.innerHTML += 
        `
            <div class="col-sm mt-2">
              <div class="card">
                <h5 class="card-header">${blogPost.title}</h5>
                <div class="card-body">
                  <p class="card-text">
                    ${blogPost.body}
                  </p>
                </div>
              </div>
            </div>
        `
    }
}

function init() {
    setNavEventHandlers();
    changePageInView();
    getPosts();
}


// EVENT HANDLERS
function setNavEventHandlers() {
    for (let link of links) {
        link.addEventListener('click', function (e) {
            changePageInView(e.target.id);
        })
    }
}

// MODELS

function BlogPost(id, userId, title, body) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
}

init();