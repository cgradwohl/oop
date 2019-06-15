/**
 * 1. Object Creation
 * 2. Factories and Constructor Functions
 * 3. Primitive and Reference Types
 * 4. Properties
 * 5. Private Properties
 * 6. Getters and Setters
 */

// Object Literal
const circle = {
  // properties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // methods
  draw: function() {
    console.log('Draw');
  }
};

circle.draw(); // object has only one method, object with many methods has __BEHAVIOR__


// In order to produce many objects we have to use either a Factory or a Constructor

// Factory Function
function createCircle(radius) {
  return {
    // properties
    radius,
    // methods
    draw: function() {
      console.log('Draw2');
    }
  };
}

const circle2 = createCircle(1);
circle2.draw();



// Constructor Function
function Circle(radius) {
  console.log('this', this);
  this.radius = radius;

  this.draw = function() {
    console.log('Draw3');
  }
}

// 'new' first creates a new plain object
// second 'new' binds the this keyword to that new object, where Circle() constructor function is the calling function
// finally that new object is return from Circle(), the caller, to the callee.
const circle3 = new Circle(1);
circle3.draw();


// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY!!!! 
// which references the function that was used to create that object
console.log('circle.constructor: ', circle.constructor);
// Object Literals use the built in Constructor function --> Object() !!
/**
 * ƒ Object() { [native code] }
 */

console.log('circle2.constructor: ', circle2.constructor); 
// Factory Functions use the built in Constructor function --> Object() !!
/**
 *  ƒ Object() { [native code] }
 */
console.log('circle3.constructor: ', circle3.constructor);
// We can also create our own __custom__ Constructor functions --> Circle() !!
/**
 * circle3.constructor:  ƒ Circle(radius) {
 *    console.log('this', this);
 *    this.radius = radius;
 *
 *    this.draw = function() {
 *      console.log('Draw3');
 *    }
 * }
 */


/**
 * built in Constructor functions
 */
let x = {}; // object literal uses built in Object() constructor
let x2 = new Object(); // <-- built in
console.log(x.constructor); // Object()
console.log(x2.constructor);// Object()

let y = ''; // string literal uses built on String() constructor
let y2 = ``;
let y3 = new String(); // <-- built in
console.log(y.constructor); // String()
console.log(y2.constructor);// String()
console.log(y3.constructor);// String()

let z = true; // boolean literal uses built in Boolean() constructor
let z2 = false;
let z3 = new Boolean();
console.log(z.constructor);
console.log(z2.constructor);
console.log(z3.constructor);

let u = 1; // number literal uses built in Number() constructor
let u2 = new Number();
console.log(u.constructor); // Number()
console.log(u2.constructor); // Number()


// FUNCTIONS ARE ALSO OBJECTS THAT ARE CRESTED USING CONSTRUCTORS
let v = function() {}; // function literal uses built in Function() constructor
let v2 = new Function();
console.log(v.constructor); // Function()
console.log(v2.constructor); // Function()

// define a constructor function using the built in Function() constructor
const Circle2 = new Function('radius', `
console.log('this', this);
  this.radius = radius;

  this.draw = function() {
    console.log('Draw4');
  }
`);
const circle4 = new Circle2(1);
circle4.draw(); // 'Draw4'
