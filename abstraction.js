function Circle(radius) {
  // private prop
  let defaultLocation = { x:0, y:0 };
  
  // private method
  let computeOptimumLocation = function(factor) {
  
  }


  // public property
  this.radius = radius;

  // public method
  this.draw = function() {
    computeOptimumLocation(0.1);

    console.log('draw');
  }
}

const circle = new Circle(10);
circle.draw();
console.log('circle', circle);
 