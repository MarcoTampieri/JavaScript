//ESERCIZIO 1

let Character = {
    name: " Io",
    age: 25,
    items: [" rubber duck", "flesh wound", "secrets of the universe"],
    giveItem: function () {
        return this.items[Math.floor(Math.random() * this.items.length)];
    }
};
for (let key in Character) {
    console.log(key + Character[key]);
}
console.log(Character.giveItem())

//ESERCIZIO 2

let sword = {
    title: "Sword",
    physic: 33,
    magic: 65,
    minLevel: 7,
    available: true,
}

let axe = {
    title: "Axe",
    physic: 65,
    magic: 40,
    minLevel: 10,
    available: true,
}

let baguette = {
    title: "baguette",
    physic: 99,
    magic: 99,
    minLevel: 20,
    available: false,
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

for (i = 0; i < toSell.length; i++) {
    if (toSell[i].minLevel >= 10) {
        console.log("The items of lvl 10+ are: " + toSell[i].title);
    } else {
    }
}

//ESERCIZIO 3

let mainCharacter = {
    name: "Io",
    level: 20,
    life: 120,
    weapon: {
        name: "fish",
        damage: 903,
    },
    attack: function () {
        result = mainCharacter.weapon.damage * mainCharacter.level;
        console.log(mainCharacter.name + "attacks with " + mainCharacter.weapon.name + " for " + result)
    }
};

mainCharacter.attack();

//ESERCIZIO 4 (BONUS)

class Person {
    constructor(name, level, life, weapon) {
        this.name = name;
        this.level = level;
        this.life = life;
        this.weapon = weapon = {
            name: "",
            damage: 0,
        };
    };
           
    receiveDamage(result){
         this.life = this.life - result;
        console.log(this.name + " now has " + this.life + " remaining HP")
    };

    attacco(attacked) {
        console.log(this.name + " attacks " + attacked.name);
        console.log("with " + this.weapon.name);
        let result = this.weapon.damage * this.level;
        console.log("and inflicts " + result + " damage");
        attacked.receiveDamage(result);
    };
};

const main = new Person("Bob", 12, 100);
main.weapon.name = "sword";
main.weapon.damage = 7;

const enemy = new Person("Carl", 10, 80);
enemy.weapon.name = "dagger";
enemy.weapon.damage = 4;

main.attacco(enemy);