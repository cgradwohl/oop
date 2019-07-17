// The simplest way to create an object is using an object literal 
const circle = { 
   radius: 1, 
   draw: function() {}
}; 
   
// To create multiple objects with the same structure and behaviour (methods), use a factory or a constructor. 

// Factory function 
function createCircle(radius) { 
   return {
      radius, 
      draw: function() {}
   } 
} 

// Constructor function 
function Circle(radius) { 
    this.radius = radius; 
    this.draw = function() {}
} 

/**
 * A constructor function does 4 things to create an object:
 * 1. creates a fresh object literal: let obj = {}
 * 2. set the prototype of obj to be the prototype prop of the constructor: Object.setPrototypeOf(obj, constructor.prototype)
 * 3. execute the constructor with the 'this' keyword as the obj: constructor.apply(obj, Array.from(arguments).slice(1))
 * 4. return the created object: return obj (if the constructor does not have a return statement)
 */

    
// Every object has a "constructor" property which returns the function that was used to construct or create that object. 
const x = {};
x.constructor; // returns Object() 
   
// In JavaScript, functions are objects. They have properties and methods. 
Circle.name; 
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function 
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference. 
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array 
   
// JavaScript objects are dynamic. You can add/remove properties: 
circle.location = {};
circle['location'] = {};
                      
delete circle.location; 
                      
// To enumerate the members in an object: 
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); 
                      
// To see if an object has a given property
if ('location' in circle)
                      
// Abstraction means hiding the complexity/details and showing only the essentials. 
// We can hide the details by using private members. Replace "this" with "let". 

function Circle(radius) { 
   // Public member 
   this.radius = radius; 

   // Private member                       
   let defaultLocation = {};                      
}                       

// To define a getter/setter, use Object.defineProperty():
Object.defineProperty(this, 'defaultLocation', {
    get: function() { return defaultLocation; },
    set: function(value) { defaultLocation = value; }
});