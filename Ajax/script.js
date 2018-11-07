let text = document.getElementById('quote');
let citazione;
let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://thatsthespir.it/api', true);

xhr.onload = function () {
    if (this.status === 200) {
        citazione = JSON.parse(this.responseText);
        console.log(citazione);
    } else {
        alert("An error occured while communicating with the server.");
    }
    text.innerHTML = '"' + citazione.quote + '"\nAuthor: ' + citazione.author + '\n' + '<img src=' + citazione.photo + ' width=200px height=200px>';
};
xhr.send();

