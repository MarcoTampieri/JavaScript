let url = new URLSearchParams(window.location.search);
url = url.get('id');

let showFilm = () => {
    let fileUrl = `http://www.omdbapi.com/?i=${url}&apikey=3a3c06ba`;
    fetch(fileUrl)
        .then((response) => response.json())
        .then((parsedData) => {
            let filmDiv = document.querySelector(".grid-container");
            filmDiv.innerHTML = /*html*/ `
            <div class="poster"><img src="${parsedData.Poster}" alt="Film poster"></div> 
            <div class="texts">
             <h3 class=specialH>${parsedData.Title}</h3>
             <p class="special">Actors <br>${parsedData.Actors}</p> <br>
             <p class="special">Synopsis <br>${parsedData.Plot}</p> <br>
             <p class="special">Year of release <br>${parsedData.Year}</p>
             </div>
             `
            })
        }

showFilm();        