const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;

  let dinosuar_1;
  // let dinosuar2;
  // let dinosuar3;
  // let dinosuar4;

  beforeEach(function () {
      park = new Park('Jurrassic Park', 50);
      dinosuar_1 = new Dinosaur('T-rex', 'Carnivore', 50);
      // dinosuar2 = new Dinosaur('Velociraptor', 'Chickens', 40);
      // dinosuar3 = new Dinosaur('Stegosaurus', 'Lettuce', 30);
      // dinosuar4 = new Dinosaur('Triceratops', 'Children', 15);
      
  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'Jurrassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.entryFee
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosuars.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosuar( dinosuar_1);
    const actual = park.hasDinosuar(dinosuar_1);
    const expected = true;
    assert.strictEqual(actual, expected);

  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
