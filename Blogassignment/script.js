const blogContainer = document.getElementById("blog-container");

const posts = [
    { title: "First Blog Post", content: "Welcome to my first blog post! Excited to share my thoughts here." },
    { title: "Learning Web Development", content: "Web development is an exciting journey! HTML, CSS, and JavaScript are fundamental skills." }
];

function loadBlog() {
    posts.forEach(post => {
        let blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContainer.appendChild(blogPost);
    });
}

document.addEventListener("DOMContentLoaded", loadBlog);
