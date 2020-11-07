// javascript for index.html
const container = document.querySelector('.posts');

const renderPosts = async () => {
    let uri = 'http://localhost:3000/posts';
    const res = await fetch(uri);
    const posts = await res.json();
    // console.log(posts);
    let template = '';

    posts.forEach(post => {
        template += `
            <div class="list-group-item align-items-start">
                <h3 class="mb-1">${post.title}</h3>
                <p class="mb-1">${post.body.slice(0, 200)}... <span><a href="/details.html?id=${post.id}">read more</a></span></p>
                <small>${post.likes} likes</small>
            </div>
        `;
    });

    container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', () => renderPosts());