document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
    fetch("test.txt")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    })
}



// Get local json data
function getJson() {
    fetch("posts.json")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let output = ``;
        data.forEach(function(post) {
            output += `
                
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                
            `
        })
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    })
}

// Get external API data
function getExternal() {
    fetch("https://api.github.com/users")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        let output = ``;
        data.forEach(function(user) {
            output += `
                  
                    <img src="${user.avatar_url}">
                    <h2>${user.login}</h2>
                    <p><a href="${user.url}" target="_blank">Check out more user info about ${user.login}.</a></p>
                
            `
        })
        document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
        console.log(err);
    })
}