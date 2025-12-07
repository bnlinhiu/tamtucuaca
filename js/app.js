function getDeviceID() {
    if (!localStorage.getItem("deviceID")) {
        localStorage.setItem("deviceID", Math.random().toString(36).substr(2, 9));
    }
    return localStorage.getItem("deviceID");
}

function savePost() {
    let content = document.getElementById("postContent").value.trim();
    if (!content) return;

    let posts = JSON.parse(localStorage.getItem("posts_" + getDeviceID())) || [];

    let newPost = {
        text: content,
        time: new Date().toLocaleString(),
        id: Date.now()
    };

    // Thêm bài mới lên đầu
    posts.unshift(newPost);

    localStorage.setItem("posts_" + getDeviceID(), JSON.stringify(posts));

    document.getElementById("postContent").value = "";
    displayPosts();
}

function deletePost(id) {
    let posts = JSON.parse(localStorage.getItem("posts_" + getDeviceID())) || [];

    posts = posts.filter(p => p.id !== id);

    localStorage.setItem("posts_" + getDeviceID(), JSON.stringify(posts));
    displayPosts();
}

function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("posts_" + getDeviceID())) || [];
    let postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <div class="post-text">
                <p>${post.text}</p>
                <div class="timestamp">${post.time}</div>
            </div>
            <button class="delete-btn" onclick="deletePost(${post.id})">X</button>
        `;

        postsContainer.appendChild(div);
    });
}

displayPosts();
