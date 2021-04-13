document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("github-form").addEventListener("submit", formInputHandler);
})

let formInputHandler = event => {
    event.preventDefault();
    let search = document.getElementById('search').value;
    fetch(`https://api.github.com/search/users?q=${search}`, getConfigObj())
    .then(resp => resp.json())
    .then(json => {
        let userList = document.getElementById('user-list');
        userList.innerText = "";
        for (user of json.items) {
            userList.appendChild(createUserElement(user));
        }
    });
}

let createUserElement = user => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    let textContainer = document.createElement('div');
    let username = document.createElement('span');
    let profile = document.createElement('a');

    username.innerText = user.login;
    profile.innerText = "Profile";
    profile.href = user.url;
    textContainer.appendChild(username);
    textContainer.appendChild(profile);

    img.src = user.avatar_url;
    img.style.height = "60px";
    
    li.appendChild(img);
    li.appendChild(textContainer);

    li.addEventListener('click', userElementHandler);

    return li;
}

let getConfigObj = () => {
    let configObj = {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.v3+json",
        }
    }

    return configObj;
}

let userElementHandler = event => {
    event.preventDefault();
    fetch()
}