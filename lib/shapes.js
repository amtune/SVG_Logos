// Parent class, Shape
class Shape {
    constructor(shapeColor) {
      this.shapeColor = shapeColor;
    };
    // For use in testing, really only here to meet Acceptance Criteria, inherited by child classes
    setColor(shapeColor) {
      if(shapeColor) {
        return this.shapeColor = shapeColor;
      }
      return this.shapeColor;
    };
  };
  
  // Circle, child class of Shape
  class Circle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    };
    // Render function tested in shapes.test.js, returns svg code line for circle dimensions
    render() {
      return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
    };
  };
  
  // Square, child class of Shape
  class Square extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    };
    // Render function tested in shapes.test.js, returns svg code line for square dimensions
    render() {
      return `<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}" />`
    };
  };
  
  // Triangle, child class of Shape
  class Triangle extends Shape {
    constructor(shapeColor) {
      super(shapeColor);
    };
    // Render function tested in shapes.test.js, returns svg code line for triangle dimensions
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    };
  };
  
  // Exports child classes
  module.exports = { Circle, Square, Triangle };