/**
 * Public Interface:
 * start()
 * stop()
 * reset()
 * duration  - read only
 */
function Stopwatch() {
  // this has destroyed the interface of the Stopwatch !!!
  this.startTime = 0;
  this.stopTime = 0;
  this.isRunning = 0;

  this.duration = 0;
}

Stopwatch.prototype.start = function() {
  console.log('start');
  if(this.isRunning){
    throw new Error("Stopwatch has already been started.")
  }
  this.startTime = Date.now();
  this.isRunning = true;
}
Stopwatch.prototype.stop = function() {
  if(!this.isRunning){
    throw new Error("Stopwatch needs to be started first.")
  }
  this.stopTime = Date.now();
  this.duration += (this.stopTime - this.startTime) / 1000;
  this.isRunning = false;
}

Stopwatch.prototype.reset = function() {
  this.startTime = 0;
  this.stopTime = 0;
  this.isRunning = 0;
  this.duration = 0;
}

// main
const sw = new Stopwatch();

// !!!!!!!!!!!!!!!!!
// we can modify the duration property, and we have access to the internal variables
// adding start, stop and reset to the prototype breaks the Abstraction principle because now we had to expose
// the inner workings of the object in the public interface!
// this.startTime = 0; this.stopTime = 0; this.isRunning = 0; are now all public !!!
// In addition we had to make duration publicly writable, which breaks the original interface requirement!!!

// PREMATURE IS THE ROOT OF ALL EVILS !!!