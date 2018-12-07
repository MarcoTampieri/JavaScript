let searchByTitle = document.querySelector(".searchTitle");
let searchByYear = document.querySelector(".searchYear");
let searchByGenre = document.querySelector(".searchType");
let searchButton = document.querySelector(".submitInputs");
let clearButton = document.querySelector(".clearPage");

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX METHOD 1: LIVE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY TITLE XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByTitle = (event) => {

    let searchInput = event.target.value;
    let valueYear = searchByYear.value;
    let valueGenre = searchByGenre.value

    if (searchInput.length >= 3) {
        let url1 = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${searchInput}&y=${valueYear}&type=${valueGenre}`;
        fetch(url1)
            .then((response) => response.json())
            .catch((error) => console.warn(error))
            .then((parsedData) => postResultList(parsedData))
    }
}

searchByTitle.addEventListener("keyup", function (e) {
    postMovieByTitle(e);
})

//XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY YEAR XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByYear = (event) => {

    let searchInput = event.target.value;
    let valueTitle = searchByTitle.value;
    let valueGenre = searchByGenre.value

    if (searchInput.length >= 3) {
        let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&y=${searchInput}&s=${valueTitle}&type=${valueGenre}`
        fetch(url2)
            .then((response) => response.json())
            .catch((error) => console.warn(error))
            .then((parsedData) => postResultList(parsedData))
    }
  
}

searchByYear.addEventListener("keyup", function (e) {
    postMovieByYear(e);
})

//XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY TYPE XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByGenre = (event) => {

    let searchInput = event.target.value;
    let valueTitle = searchByTitle.value;
    let valueYear = searchByYear.value;

    if (searchInput.length >= 3) {
        let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&type=${searchInput}&s=${valueTitle}&y=${valueYear}`
    fetch(url2)
        .then((response) => response.json())
        .catch((error) => console.warn(error))
        .then((parsedData) => postResultList(parsedData))
    }

}

searchByGenre.addEventListener("keyup", function (e) {
    postMovieByGenre(e);
})


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX METHOD 1: ON 'ENTER' XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//XXXXXXXXXXXXXXXXXXXXXXXXX  SEARCH BY CROSSREFERENCE  XXXXXXXXXXXXXXXXXXXXXXXXX

let stashValue = () => {

    let valueTitle = searchByTitle.value;
    let valueYear = searchByYear.value;
    let valueGenre = searchByGenre.value;

    if (valueTitle != '' || valueYear != '' || valueGenre != '') {
        let crossUrl = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${valueTitle}&y=${valueYear}&type=${valueGenre}`
        fetch(crossUrl)
            .then((response) => response.json())
            .catch((error) => console.warn(error)) //<-- work on errors here alert(error + "\nSearch turned out no results, try other parameters")
            .then((parsedData) => postResultList(parsedData));
    } else {
        alert("Please Enter a search parameter.");
    }
}

searchButton.addEventListener("click", stashValue)


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX UNIVERSAL FUNCTIONS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//XXXXXXXXXXXXXXXXXXXXXXXXX POST LIST XXXXXXXXXXXXXXXXXXXXXXXXX

let postResultList = (data) => {

    let lista = document.querySelector(".lista");

    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild)
    };
    console.log("data= " + data.Response)
    if (data.Response == "False") {
        // alert("Search found 0 results for your search parameters, try with others.")
    } else {
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
}

//XXXXXXXXXXXXXXXXXXXXXXXXX CLEAR PAGE XXXXXXXXXXXXXXXXXXXXXXXXX

let clearPage = () => {

    let lista = document.querySelector(".lista");
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild)
    };

    searchByTitle.value = '';
    searchByYear.value = '';
    searchByTitle.value = '';
}

clearButton.addEventListener("click", clearPage)