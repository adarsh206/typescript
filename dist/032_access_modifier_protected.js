"use strict";
// protected -> accessible inside class and subclass
class Animal {
    energy = 23;
    eat(amount) {
        this.energy = Math.min(100, this.energy + amount);
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const d = new Dog();
d.eat(10);
d.run();
d.status();
console.log(d.status());
// d.energy // it will throw error because you are accessing it from outside the class or subclass 
