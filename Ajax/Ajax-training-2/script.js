let global;

let casi = '';

let searchByTitle = document.querySelector(".searchTitle");
let searchByYear = document.querySelector(".searchYear");

// XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY TITLE XXXXXXXXXXXXXXXXXXXXXXXXX
let postMovieByTitle = (event) => {

    let bob = event.target.value;
    const xhr = new XMLHttpRequest;
    let url1 = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${bob}`;
    xhr.open('GET', url1);
    xhr.send();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            postResultList(response);
            console.log(response);
        }
    }
}

searchByTitle.addEventListener("keyup", function (e) {
    postMovieByTitle(e);
})

//XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY YEAR XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByYear = (event) => {
    console.log("hello")
    let bob = event.target.value;
    
    let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&y=${bob}&s=bob`
    fetch(url2, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((parsedData) => postResultList(parsedData))
        .catch((error) => console.warn(error));
}

searchByYear.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        postMovieByYear(e);
    }
})

//XXXXXXXXXXXXXXXXXXXXXXXXX UNIVERSAL FUNCTIONS XXXXXXXXXXXXXXXXXXXXXXXXX

let postResultList = (data) => {
    let lista = document.querySelector(".lista");
    lista.innerHTML = '';
    for (let i = 0; i < data.Search.length; i++) {
        let li = document.createElement("li");
        li.id = data.Search[i].imdbID;
        console.log(li.id)
        li.innerHTML = /*html*/ `
            <p id="${data.Search[i].imdbID}" class="movieTitle">Title: ${data.Search[i].Title} <br>
            Release year: ${data.Search[i].Year} <br>
            Type: ${data.Search[i].Type}</p>
        `
        lista.appendChild(li);
        li.addEventListener("click", showFile)
    }
}

let showFile = (data) => {
    console.log(data.currentTarget.id);
    let id = data.currentTarget.id;
    let fileUrl = `http://www.omdbapi.com/?i=${id}&apikey=3a3c06ba`;
    fetch(fileUrl);
}