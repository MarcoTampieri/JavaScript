let global;

let casi = '';

let searchTitle = document.querySelector(".searchTitle");
let searchYear = document.querySelector(".searchYear");

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
            postResult(response)
        }
    }
}



searchTitle.addEventListener("keyup", function (e) {
    postMovieByTitle(e);
})

//XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY YEAR XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByYear = (event) => {
    console.log("hello")
    let bob = event.target.value;
    let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&y=${bob}&s=bob`
    fetch(url2, {method : 'GET'})
        .then((response) => response.json())
        .then((parsedData) => postResult(parsedData))
        .catch((error) => console.warn(error));

}

searchYear.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        postMovieByYear(e);
    }
})

// UNIVERSAL FUNCTION

let postResult = (data) => {
    let lista = document.querySelector(".lista");
    lista.innerHTML = '';
    for (let i = 0; i < data.Search.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = /*html*/ `
        <img class="poster" src="${data.Search[i].Poster}" alt="poster">
            <h6 class="movieTitle"> ${data.Search[i].Title}</h6>
            <p class="yearRelease">${data.Search[i].Year}</p>
            <p class="synopsis">${data.Search[i].Type}</p>`
        lista.appendChild(li);
    }
}