const INITIAL_AGE = 0;
const INITIAL_HUNGER = 0;
const INITIAL_FITNESS = 10;

const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = INITIAL_AGE;
    this.hunger = INITIAL_HUNGER;
    this.fitness = INITIAL_FITNESS;
}

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }  
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }  
    if ((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }  
    if ((this.hunger - 3) >= 0) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    }
}

Pet.prototype.checkup = function () {
    if (!this.isAlive) {
        return 'Your pet is no longer alive :(';
    }
    if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    }
    if (this.fitness <= 3 && this.hunger <= 5) {
        return 'I need a walk';
    }
    if (this.fitness >=3 && this.hunger >= 5) {
        return 'I am hungry';
    } 
    if (this.fitness >= 3 && this.hunger <= 5) {
        return 'I feel great!';
    }
}

module.exports = Pet;
