/**
 * Please see creatingobjectsAndInheritance.js for an explanation of resetting prototypes and the constructor function !!!
 */

// add a color propety to shape and have Circle also inherit the color property
function Shape(color) { 
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

function Circle(radius, color) {
  // NOTE this is what super() does on a class !!!
  // this will call the Shape constructor function but using the instance of the Circle object as the 'this' keyword. 
  Shape.call(this, color);

  // Shape(color); this will set --> window.color = color !!! 

  this.radius = radius;
}

// let Circle inherit from Shape (don't forget to reset the constructor!)
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('Draw');
}

const s = new Shape();
const c = new Circle(1, 'green');