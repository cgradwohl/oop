// Every object (except the root object) has a prototype (parent). 
// To get the prototype of an object:
Object.getPrototypeOf(obj); 

// In Chrome, you can inspect "__proto__" property. But you should 
// not use that in the code. 

// each property on an object has 'attributes':

// value: - the value associated with the property
// configurable: true/false -  if true the property may be deleted from the corresponding object.
// enumerable: true/false - if true this property will show up in the enumeration of the object
// writable: true/false - if true the property may be changed
// get: function() - a function that serves as the getter function
// set: function() - a function that serves as the setter function 


// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, 'propertyName');

// To set the attributes for a property:
Object.defineProperty(obj, 'propertyName', {
    configurable: false,
    writable: false,
    enumerable: false,
    get: function() {},
    set: function() {},
});

// __proto__ - is a property on an Object, and points to that objects prototype
// prototype - is a property on a Function, and is the object to use iff that function is used as a constructor.

// Functions have a "prototype" property, and are meant to be used by Constructor function. 
// It returns the object that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({})
Array.prototype === Object.getPrototypeOf([])

// All objects created with the same constructor will have the same prototype. 
// A single instance of this prototype will be stored in the memory. 
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true 

// Any changes to the prototype will be immediately visible to all objects 
// referencing this prototype. 

// When dealing with large number of objects, it's better to put their
// methods on their prototype. This way, a single instance of the methods
// will be in the memory. 
Circle.prototype.draw = function() {}

// ONLY RETURNS INSTANCE or OWN MEMBERS !!!
Object.keys(obj);

// RETURNS INSTANCE AND PROTOTYPE MEMBERS !!! 
for (let key in obj) {}