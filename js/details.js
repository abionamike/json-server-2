// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const details = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    let uri = `http://localhost:3000/posts/${id}`;
    const res = await fetch(uri);
    const post = await res.json();
    let template = `
        <div class="list-group-item align-items-center my-3">
            <h3 class="mb-4">${post.title}</h3>
            <p class="mb-3">${post.body}</p>
            <div class="mb-3"><small>${post.likes} likes</small></div>
        </div>
        <a href="/update.html?id=${post.id}" class="update btn btn-sm btn-outline-secondary">Update Post</a>
    `;

    details.innerHTML = template
}

const deleteDetails = async () => {
    let uri = `http://localhost:3000/posts/${id}`;
    await fetch(uri, {
        method: "DELETE",
    });

    window.location.replace('/index.html');
}


window.addEventListener('DOMContentLoaded', () => renderDetails());
deleteBtn.addEventListener('submit', deleteDetails)
