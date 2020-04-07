// Make a Shape Object that contains the Duplicate method
// Have Circle and Square inherit the Shape prototype

function Shape() { }

Shape.prototype.duplicate = function() {
  console.log('Duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); <-- this is the default inheritance when you create a new constructor :)
Circle.prototype = Object.create(Shape.prototype);

/**
 * Note that resetting the prototype: Circle.prototype = Object.create(Shape.prototype);
 * has some consequences regarding the constructor function of the Circle Object (function).
 * 
 * Before resetting the prototype the constructor for the Circle Objects prototype was Circle:
 * Circle.prototype.constructor = Circle;
 * 
 * So the following operations were the same:
 * new Circle.prototype.constructor() => new Circle();
 *  
 * But now, after resetting the Circle Objects prototype, the Circle Object has a new constructor:
 * Circle.prototype.constructor = Shape;
 * 
 * So now we have:
 * new Circle.prototype.constructor() => new Shape();
 * 
 * But this is a flaw of javascript. When you override a prototype the original link to the constructor is gone. 
 * Even though an instance of Circle Object first inherits from the Circle constructor, once you override the prototype
 * you no longer have access to that constructor. This can be very sad if you want to do something dynamically with
 * the objects prototype constructor property !!!
 * 
 * As a best practice if you override or reset an objects prototype, then you should also rest its constructor !!!
 */

// Maintain the original constructor relationship, i.e. reset the constructor
Circle.prototype.constructor = Circle;

// now we can extend the Circle prototype to have additional properties and methods
Circle.prototype.draw = function() {
  console.log('Draw');
}

const s = new Shape();
const c = new Circle();