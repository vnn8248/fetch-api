document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
    fetch("test.txt")
    .then(res => res.text())
    .then(data => document.getElementById("output").innerHTML = data)
    .catch(err => console.log(err))
}



// Get local json data
function getJson() {
    fetch("posts.json")
    .then(res => res.json())
    .then(data => {
        let output = ``;
        data.forEach(post => {
            output += `
                
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                
            `
        })
        document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err))
}

// Get external API data
function getExternal() {
    fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = ``;
        data.forEach(user => {
            output += `
                  
                    <img src="${user.avatar_url}">
                    <h2>${user.login}</h2>
                    <p><a href="${user.url}" target="_blank">Check out more user info about ${user.login}.</a></p>
                
            `
        })
        document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}