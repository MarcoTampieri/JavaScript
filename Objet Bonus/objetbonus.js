class Person {
    constructor(name, life, hunger, ) {
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
    
    restoreHealth() {
        this.life = this.life + this.medicine.life + this.food.life;
        this.hunger = this.hunger + this.medicine.hunger + this.food.hunger;
    }

    restoreLife() {
        this.life += this.medicine.life;
        this.hunger += this.medicine.hunger;
    }

    resoreHunger() {
        this.life +=
    }

    statusUpdate() {
        if (this.life >= 100 && this.hunger <= 0) {
            console.log("All good!")
            this.life -= 3;
            this.hunger += 3;
            console.log("Life: " + this.life + "Hunger: " + this.hunger);
        } else if (this.life < 100 && this.hunger > 0) {
            restoreHealth()
            console.log("Health Restored: +" + this.medicine.life + "life. -" + this.food.hunger + " hunger.");
            console.log("Life is " + this.life + ". Hunger is " + this.hunger);
        } else if (this.life < 100) {
            restoreLife()
            console.log("Life Restored: +" + this.medicine.life + ". Hunger increased by: " + this.medicine.hunger);
            console.log("Life is " + this.life + ". Hunger is " + this.hunger);
        } else if (this.hunger > 0) {

        }


    };
};
let hungerRandom = Math.floor(Math.random() * 15) - 1;
let lifeRandom = Math.floor(Math.random() * 15) + 1;
const main = new Person("Bob", 11, 0);

main.statusUpdate();
main.food.life = -5;
main.food.hunger = hungerRandom;
main.medicine.life = lifeRandom;
main.medicine.hunger = 12;

main.statusUpdate(main);


