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
    calculateLife() {
        this.life = this.life + this.food.life + this.medicine.life
    };

    calculateHunger() {
        this.hunger = this.hunger + this.food.hunger + this.medicine.hunger;
    }

    statusUpdate() {
        if (this.life >= 100 && this.hunger == 0) {
            console.log("All good!")
            this.life -= 3;
            this.hunger += 3;
        } else if (this.life < 100 || this.hunger > 0) {
            console.log("Restoring " + this.name + "health: consumed medicine for " + this.medicine.life + "life and food for "
                + this.food.hunger + ".Status is:" + this.life + "life and " + this.hunger + " hunger");
        } else if (this.life <= 0 || this.hunger >= 100) {
            console.log("Game over, " + this.name + " status at the end was: " + this.life + " life and " + this.hunger + " hunger.");
        };
        main.calculateLife()
        main.calculateHunger()
    };

};

const main = new Person("Bob", 99, 0);
main.food.life = -5;
main.food.hunger = Math.floor(Math.random() - 1 * 15);
main.medicine.life = Math.floor(Math.random() + 1 * 15)
main.medicine.hunger = 12;

main.statusUpdate(main);