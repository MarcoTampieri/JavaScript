
function change() {
    this.style.visibility = "hidden";
};
let hover = document.querySelectorAll(".hoverMe");

let reset = document.querySelector("#reset");

for (i = 0; i< hover.length; i++) {
hover[i].addEventListener("mouseover", change);
};


function changeBack () {
    for (j = 0; j < hover.length; j++){
    hover[j].style.visibility = "visible";
    };
};

reset.addEventListener("mouseup", changeBack);

let xc = document.getElementById("axe-x")
let yc = document.getElementById("axe-y")

addEventListener("mousemove", function ecriture(e) {
    xc.innerText = e.screenX;
    yc.innerText = e.screenY;   
}
);
