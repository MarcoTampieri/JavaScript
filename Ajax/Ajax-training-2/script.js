let searchByTitle = document.querySelector(".searchTitle");
let searchByYear = document.querySelector(".searchYear");
let searchButton = document.querySelector(".submitInputs");
let clearButton = document.querySelector(".clearPage");

let inputTitle = document.querySelector(".searchTitle");
let inputYear = document.querySelector(".searchYear");
let inputGenre = document.querySelector(".searchType");


// XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY TITLE XXXXXXXXXXXXXXXXXXXXXXXXX
let postMovieByTitle = (event) => {
    let valueYear = inputYear.value
    let searchInput = event.target.value;
    const xhr = new XMLHttpRequest;
    let url1 = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${searchInput}&y=${valueYear}`;
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
    let searchInput = event.target.value;
    let valueTitle = inputTitle.value
    let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&y=${searchInput}&s=${valueTitle}`
    fetch(url2)
        .then((response) => response.json())
        .catch((error) => console.warn(error))
        .then((parsedData) => postResultList(parsedData))
}

searchByYear.addEventListener("keyup", function (e) {
    postMovieByYear(e);
})

//XXXXXXXXXXXXXXXXXXXXXXXXX  SEARCH BY CROSSREFERENCE  XXXXXXXXXXXXXXXXXXXXXXXXX



let stashValue = () => {

    let valueTitle = inputTitle.value
    let valueYear = inputYear.value
    let valueGenre = inputGenre.value
    if (valueTitle != '' || valueYear != '' || valueGenre != '') {
        let crossUrl = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${valueTitle}&y=${valueYear}&type=${valueGenre}`
        fetch(crossUrl)
            .then((response) => response.json())
            .catch((error) => console.warn(error))
            .then((parsedData) => postResultList(parsedData));
    } else {
        alert("Please Enter a search parameter.");
    }
}

searchButton.addEventListener("click", stashValue)

//XXXXXXXXXXXXXXXXXXXXXXXXX UNIVERSAL FUNCTIONS XXXXXXXXXXXXXXXXXXXXXXXXX

let postResultList = (data) => {
    let lista = document.querySelector(".lista");
    lista.innerHTML = '';
    data.Search.map(i => {
        let li = document.createElement("li");
        li.id = i.imdbID;
        //console.log(li.id)
        li.innerHTML = /*html*/ ` 
            <a href="showFilm.html?id=${i.imdbID}">
            <p id="${i.imdbID}" class="movieTitle">Title: ${i.Title} <br>
            Release year: ${i.Year} <br>
            Type: ${i.Type}</p>
            </a>
        `
        lista.appendChild(li);

    })
}

//XXXXXXXXXXXXXXXXXXXXXXXXX CLEAR PAGE XXXXXXXXXXXXXXXXXXXXXXXXX

let clearPage = () => {
    let lista = document.querySelector(".lista");
    lista.innerHTML = '';
    inputTitle.value = '';
    inputYear.value = '';
    inputGenre.value = '';
}

clearButton.addEventListener("click", clearPage)