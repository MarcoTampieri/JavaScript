//EXERCISE 1 

//--
document.querySelector("body").classList.remove("bg-aqua");
document.querySelector("body").classList.add("bg-olive");
/*
document.body.classList.remove("bg-aqua");
document.body.classList.add("bg-olive");
*/

//--
document.querySelector("p").classList.remove("bg-lime", "gray");
document.querySelector("p").classList.add("aqua");

//--
document.querySelector(".bg-silver").classList.add("bg-teal");
document.querySelector(".bg-silver").classList.remove("bg-silver");

//--
document.querySelector("blockquote").classList.add("bg-white");

//EXERCISE 2

//--
document.querySelector("#my-table").classList.add("bg-purple");

//--

var paragrafi = document.querySelectorAll(".container > p"), i;
for (i = 0; i < paragrafi.length; i++) {
    paragrafi[i].classList.add("shadow");
};

//EXERCISE 3

//--
var elemPre = document.querySelectorAll(".container > pre"), i;
for (i = 0; i < elemPre.length; i++) {
    elemPre[i].style.color = "red";
    elemPre[i].style.backgroundColor = "white";
    elemPre[i].style.borderTop = "3px solid red";
    elemPre[i].style.borderBottom = "3px solid red";
};

//--
/*document.querySelector("h3").innerHTML = "<em>Italic title ! yeah !</em>"; */
var italico = document.querySelector("h3")
italico.innerHTML = "<em>Italic title ! yeah !</em>";

//--
/*document.querySelector("h2").innerHTML = "<strong>HTML doesn't work !</strong>";*/
var mime = document.querySelector("h2")
mime.innerHTML = "<strong>HTML doesn't work !</strong>"

//ESERCIZIO 4
var list = document.querySelector("ul");
var point = document.createElement("li");
point.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";

list.appendChild(point);

var changeColor = document.querySelector("ul > li > a");
changeColor.style.color = "red";

//ESERCIZIO 5

var olList = document.querySelector("ol");
while (olList.firstChild) {
    olList.removeChild(olList.firstChild);
};

let newChildren = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (i = 0; i < newChildren.length; i++) {
    var newList = document.createElement("li");
    newList.innerHTML = newChildren[i];
    olList.appendChild(newList);
};