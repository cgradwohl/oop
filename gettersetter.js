/**
 * In this constructor function we have local variables that are acting like private methods and properties of the Circle object.
 * But the are technically not on the Circle object.
 * 
 * What if we want to read the PRIVATE default location from our program. WE ONLY WANT TO READ IT.
 * 
 */


function Circle(radius) {
  // private prop
  let defaultLocation = { x:0, y:0 };

  // one solution is to define another public method that returns our private variable
  this.getDefaultLocation = function() {
    return defaultLocation;
  }
  
  // public property
  this.radius = radius;

  // public method
  this.draw = function() {
    console.log('draw');
  }

  // another solution is to use a computed property
  // get creates a READ ONLY property - run this function when you get a property i.e. const value = obj.property
  // set creates a WRITE ONLY property - run this function when you set a property i.e. obj.property = value
  Object.defineProperty(this, 'defaultLocation', {
      get: function() { 
        return defaultLocation;
      },
      set: function(value) {
        if( !value.x || !value.y ){
          throw new Error('Invalid location.');
        }
        defaultLocation = value;
      }
  });
}

const circle = new Circle(10);
circle.draw();
console.log('circle.defaultLocation', circle.defaultLocation);

