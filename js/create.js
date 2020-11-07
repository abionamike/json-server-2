// javascript for create.html

const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    let num = (Math.random() * 10);

    const post = {
        title: form.title.value,
        body: form.body.value,
        likes: Math.ceil(num)
    }

    let uri = "http://localhost:3000/posts";
    await fetch(uri, {
        method: "POST",
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
    
}

form.addEventListener('submit', createPost);