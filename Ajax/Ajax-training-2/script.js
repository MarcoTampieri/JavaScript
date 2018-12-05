let searchByTitle = document.querySelector(".searchTitle");
let searchByYear = document.querySelector(".searchYear");

// XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY TITLE XXXXXXXXXXXXXXXXXXXXXXXXX
let postMovieByTitle = (event) => {

    let searchInput = event.target.value;
    const xhr = new XMLHttpRequest;
    let url1 = `http://www.omdbapi.com/?apikey=3a3c06ba&s=${searchInput}`;
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
    if (e.keyCode === 13) {
        postMovieByTitle(e);
    }
})

//XXXXXXXXXXXXXXXXXXXXXXXXX SEARCH BY YEAR XXXXXXXXXXXXXXXXXXXXXXXXX

let postMovieByYear = (event) => {
    console.log("hello")
    let searchInput = event.target.value;

    let url2 = `http://www.omdbapi.com/?apikey=3a3c06ba&y=${searchInput}&s=bob`
    fetch(url2)
        .then((response) => response.json())
        .catch((error) => console.warn(error))
        .then((parsedData) => postResultList(parsedData))
}

searchByYear.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        postMovieByYear(e);
    }
})

//XXXXXXXXXXXXXXXXXXXXXXXXX UNIVERSAL FUNCTIONS XXXXXXXXXXXXXXXXXXXXXXXXX

// let postResultList = (data) => {
//     let lista = document.querySelector(".lista");
//     lista.innerHTML = '';
//     console.log(data.Search)
//     for (let i = 0; i < data.Search.length; i++) {
//         let li = document.createElement("li");
//         li.id = data.Search[i].imdbID;
//         //console.log(li.id)
//         li.innerHTML = /*html*/ `
//             <a href="showFilm.html?id=${data.Search[i].imdbID}">
//             <p id="${data.Search[i].imdbID}" class="movieTitle">Title: ${data.Search[i].Title} <br>
//             Release year: ${data.Search[i].Year} <br>
//             Type: ${data.Search[i].Type}</p>
//             </a>
//         `
//         lista.appendChild(li);

//     }
// }

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
// let champ1= document.querySelector("input1");
// let champ2= document.querySelector("input2");
// let champ3= document.querySelector("input3");

// formClass.addEventListener("onsubmit", stashValue)

// let stashValue = () => {
//     let value1= champ1.value
//     let value2= champ2.value
//     let value3= champ3.value
// }