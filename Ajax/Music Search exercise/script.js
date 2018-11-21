let global;

const Http = new XMLHttpRequest();
let url = 'https://musicdemons.com/api/v1/artist/autocomplete';

let myInput = function (event) {

    global = event.target.value;


    Http.open("POST", url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    Http.send(`name=${global}`);
    Http.onreadystatechange = () => {
        if (Http.readyState === 4 && Http.status === 200) {
            let response = JSON.parse(Http.responseText);
            postArtist(response);
        }

    };
}

let postArtist = (searchArtist) => {
    let list = document.querySelector(".results");
    list.innerHTML = '';
    searchArtist.forEach(x => {
        let li = document.createElement("li");
        li.innerHTML = x.name;
        li.id = x.id;
        list.appendChild(li);
        li.addEventListener("click", showSongs)
    });
}

let showSongs = (e) => {
    let id = e.currentTarget.id;
    let urlSong = `https://musicdemons.com/api/v1/artist/${id}/songs`;
    Http.open("GET", urlSong);
    Http.send();
    Http.onreadystatechange = () => {
        if (Http.readyState === 4 && Http.status === 200) {
            let response = JSON.parse(Http.responseText);
            postVideo(response)
        }
    };
}

let postVideo = (video) => {
    let list = document.querySelector(".results");
    list.innerHTML = '';
    video.forEach(x => {
        console.log(x);
        let li = document.createElement("li");
        li.innerHTML = x.title + `<iframe width="560" height="315" src="https://www.youtube.com/embed/${x.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        li.id = x.id;
        list.appendChild(li);
    })
}

let httpRequest = new XMLHttpRequest;

document.querySelector('.search').addEventListener('keyup', myInput)