// Imports the file that has the test subjects
const { Circle, Square, Triangle } = require('./shapes.js');

// Test for render function from Circle class, passes if fill color can be set and returns a correct string
describe('Circle', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a circle', () => {
      const shape = new Circle();
      // This is all this dumb function does
      shape.setColor("green");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
    });
  });
});

// Test for render function from Square class, passes if fill color can be set and returns a correct string
describe('Square', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a square', () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="red" />');
    });
  });
});

// Test for render function from Triangle class, passes if fill color can be set and returns a correct string
describe('Triangle', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});