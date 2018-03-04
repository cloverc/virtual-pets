const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  })
  it('sets the name property',() => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  })
  it('has an initial age of 0',() => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  })
  it('has an initial hunger of 0',() => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  })
  it('has an initial fitness of 10',() => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
  })
})

describe('isAlive',() => {
  it('returns false if the pets fitness is 0 or less and hunger is 10 0r more and age is 30 or more', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    pet.hunger = 11
    pet.age = 31
    expect(pet.isAlive).toBe(false);
  })
  it('returns true if the pets fitness is more than 0 and hunger is less than 10 and age less than 30', () => {
    const pet = new Pet('Fido');
    pet.fitness = 2;
    pet.hunger = 9;
    pet.age = 29;
    expect(pet.isAlive).toBe(true);
  })
})

describe('growUp',() => {
  it('increaases age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  })
  it('increases hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  })
  it('decreases fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  })
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.growUp).toThrow('Your pet is no longer alive :(');
  });
})

describe('walk',() => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  })
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.walk).toThrow('Your pet is no longer alive :(');
  });
})

describe('feed',() => {
  it('decrease pets hunger to minimum of 0', () => {
    const pet = new Pet('fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.feed).toThrow('Your pet is no longer alive :(');
  });

})

describe('checkup',() => {
  it('returns I need a walk if fitness is 3 or less', () => {
    const pet = new Pet('fido');
    pet.fitness = 2;
    expect(pet.checkup()).toBe('I need a walk');
  });
  it('returns I am hungry if hunger is 5 or more', () => {
    const pet = new Pet('fido');
    pet.hunger = 5;
    expect(pet.checkup()).toBe('I am hungry');
  });
  it('returns I am hungry AND I need a walk if fitness 3 or less & hunger is 5 or more', () => {
    const pet = new Pet('fido');
    pet.fitness = 1;
    pet.hunger = 5;
    expect(pet.checkup()).toBe('I am hungry AND I need a walk');
  });
  it('returns I feel great if fitness is more than 3 and hunger is less than 5', () => {
    const pet = new Pet('fido');
    pet.fitness = 5;
    pet.hunger = 4;
    expect(pet.checkup()).toBe('I feel great!');
  });
  it('returns your pet is no longer alive if pet is not alive', () => {
    const pet = new Pet('Fido');
    pet.age = 31;
    expect(pet.checkup()).toBe('Your pet is no longer alive :(');
  });
})