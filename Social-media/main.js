let postList = document.querySelector("#postID");

function createPost(title, imgUrl, text) {
    let rootElement = document.createElement("article");
    rootElement.classList.add("post");

    rootElement.innerHTML = `
        <img src="${imgUrl}" alt="Image" class="post-image">
        <h3>${title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem velit aperiam aspernatur illum
            molestiae temporibus! In quis minima, assumenda, ad ipsa at qui quae molestias necessitatibus similique
            atque aut ducimus?</p>
    `;

    postList.appendChild(rootElement);
}

async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    data.forEach((post) => {
        createPost(post.title, post.imgUrl);
    });
}
fetchData();