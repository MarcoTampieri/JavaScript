//ESERCIZIO1

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