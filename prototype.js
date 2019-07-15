let person = { name: "chris" };
let objectBase = Object.getPrototypeOf(person); // same thing as person.__proto__
console.log(objectBase); // the __proto__ of an object literal is Object
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

// remember this is also how you add getters and setters!
Object.defineProperty(person, 'name', {
  writable: false, // if true allows you to change the value of the key
  enumerable: false, // if true allows you to enumerate over the object
  configurable: false // if true allows you to delete the key
});

delete person.name;
person.name = 'Bill';

console.log('person', person); // person -> {name:"chris"}
console.log('keys', Object.keys(person)); // keys -> []

/**
 * prototype 
 * -vs-
 * __proto__
 */
let obj = {};
console.log(obj.constructor); // Object()

// the follow prooerties point to the same thing!
console.log(obj.__proto__);
console.log(Object.prototype); 

// __proto__ - is a property on an Object, and points to that objects prototype
// prototype - is a property on a Function, and is the object to use iff that function is used as a constructor.


// Constructor Function Inheritance
/**
 * circle.__proto__ --> Circle
 * Circle.__proto__ --> Object
 */
function OldCircle(radius) {
  console.log('this', this);
  this.radius = radius;

  this.draw = function() {
    console.log('Draw Function Has Been Called');
  }
}

// if we have 10000 circle objects, 
// then each instantiation of the circle object will have a copy of the draw method.
const c1 = new OldCircle(20);
const c2 = new OldCircle(20);

console.log(OldCircle.prototype === c1.__proto__); // true




function NewCircle(radius) {
  console.log('this', this);
  this.radius = radius;
}

// by adding the draw method to the prototype, each instantiation no long has to carry its own copy of the draw method.
// Instead when .draw() is called, the object will look first on itself and then (if it is not there) on its prototype.
NewCircle.prototype.draw = function() {
  console.log('Draw Function Has Been Called');
}

const c3 = new NewCircle(20);
const c4 = new NewCircle(20);



