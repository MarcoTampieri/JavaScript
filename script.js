//ESERCIZIO 1

let Character = {
    name : " Io",
    age : 25,
    items : [" rubber duck", "flesh wound", "secrets of the universe"],
    giveItem: function(){
        return this.items[Math.floor(Math.random() * this.items.length)];
    }     
};
for (let key in Character) {
    console.log(key + Character[key]);
}
console.log(Character.giveItem())

//ESERCIZIO 2

let sword = {
    title : "Sword",
    physic : 33,
    magic : 65,
    minLevel : 7,
    available : true,
}

let axe = {
    title : "Axe",
    physic : 65,
    magic : 40,
    minLevel : 10,
    available : true,
}

let baguette = {
    title : "baguette",
    physic : 99,
    magic : 99,
    minLevel : 20,
    available : false,
}

let toSell = [sword, axe, baguette];

for (i = 0; i < toSell.length; i++) {
    console.log(toSell[i].title);
}

for (i = 0; i < toSell.length; i++) {
    if (toSell[i].available == true) {
        console.log("The available items are: " + toSell[i].title);
    } else {
    }
}

for (i = 0; i <toSell.length; i++) {
    if (toSell[i].minLevel >= 10) {
        console.log("The items of lvl 10+ are: " + toSell[i].title);
    } else {
    }
}