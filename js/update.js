// javascript for create.html
const id = new URLSearchParams(window.location.search).get('id');
const form = document.querySelector('form');

let likes;

const renderPost = async () => {
    let uri = `http://localhost:3000/posts/${id}`;
    const res = await fetch(uri);
    const post = await res.json();

    form.title.value = post.title;
    form.body.value = post.body;
    likes = post.likes;
}

const updatePost = async (e) => {
    e.preventDefault();

    const post = {
        title: form.title.value,
        body: form.body.value,
        likes
    }

    let uri = `http://localhost:3000/posts/${id}`;
    await fetch(uri, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace(`/details.html?id=${id}`);
}

window.addEventListener('DOMContentLoaded', () => renderPost());
form.addEventListener('submit', updatePost);