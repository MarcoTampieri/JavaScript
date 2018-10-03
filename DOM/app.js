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

