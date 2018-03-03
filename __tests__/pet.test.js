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
})

describe('feed',() => {
  it('decrease pets hunger to minimum of 0', () => {
    const pet = new Pet('fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
})

describe('checkup',() => {
  it('returns I need a walk if fitness is 3 or less', () => {
    const pet = new Pet('fido');
    pet.fitness = 2;
    expect(pet.checkup()).toBe("I need a walk");
  });
  it('returns I am hungry if hunger is 5 or more', () => {
    const pet = new Pet('fido');
    pet.hunger = 5;
    expect(pet.checkup()).toBe("I am hungry");
  });
  it('returns I am hungry AND I need a walk if fitness 3 or less & hunger is 5 or more', () => {
    const pet = new Pet('fido');
    pet.fitness = 1;
    pet.hunger = 5;
    expect(pet.checkup()).toBe("I am hungry AND I need a walk");
  });
  it('returns I feel great if fitness is more than 3 and hunger is less than 5', () => {
    const pet = new Pet('fido');
    pet.fitness = 5;
    pet.hunger = 4;
    expect(pet.checkup()).toBe("I feel great!");
  });
})