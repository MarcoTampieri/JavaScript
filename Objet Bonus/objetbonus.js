function restoreHealth(character) {
    character.life = character.life + character.medicine.life - character.food.life;
    character.hunger = character.hunger + character.medicine.hunger - character.food.hunger;
}

function restoreLife(character) {
    character.life += character.medicine.life;
    character.hunger += character.medicine.hunger;
}

function restoreHunger(character) {
    character.life -= character.food.life;
    character.hunger -= character.food.hunger;
}

function statusUpdate(character) {
    if (character.life >= 100 && character.hunger <= 0) {
        console.log("All good!")
        character.life -= 3;
        character.hunger += 3;
        console.log("Update life : " + character.life + ". Update hunger: " + character.hunger);
    } else if (character.life < 100 && character.hunger > 0) {
        restoreHealth(character);
        console.log("Health Restored: +" + character.medicine.life + "life. -" + character.food.hunger + " hunger.");
        console.log("Life is " + character.life + ". Hunger is " + character.hunger);
    } else if (character.life < 100) {
        restoreLife(character);
        console.log("Life Restored: +" + character.medicine.life + ". Hunger increased by: " + character.medicine.hunger);
        console.log("Life is " + character.life + ". Hunger is " + character.hunger);
    } else if (character.hunger > 0) {
        restoreHunger(character);
        console.log("Hunger Restored: -" + character.food.hunger + ". Life decreased by: " + character.food.life);
        console.log("Hunger is " + character.hunger + ". Life is " + character.life);
    }
};

class Person {
    constructor(name, life, hunger) {
        this.name = name;
        this.life = life;
        this.hunger = hunger;
        this.food = {
            life: 0,
            hunger: 0,
        };
        this.medicine = {
            life: 0,
            hunger: 0,
        };
    };
};

let hungerRandom = Math.floor(Math.random() * 15) - 1;
let lifeRandom = Math.floor(Math.random() * 15) + 1;
const main = new Person("Bob", 100, 0);
main.food.life = -5;
main.food.hunger = hungerRandom;
main.medicine.life = lifeRandom;
main.medicine.hunger = 12;

statusUpdate(main);
