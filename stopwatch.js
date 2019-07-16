function Stopwatch() {
  let startTime, stopTime, isRunning, duration = 0;

  this.start = function() {
    console.log('start');
    if(isRunning){
      throw new Error("Stopwatch has already been started.")
    }
    startTime = Date.now();
    isRunning = true;
  }

  this.stop = function() {
    if(!isRunning){
      throw new Error("Stopwatch needs to be started first.")
    }
    stopTime = Date.now();
    duration += (stopTime - startTime) / 1000;
    isRunning = false;
  }

  this.reset = function() {
    startTime, stopTime, isRunning = 0;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
  })
}



const swOG = new Stopwatch();
// console.log(sw.duration);
// sw.start()
// sw.stop()
// sw.reset()

// duration
// start() - only can be called once
// stop() - only can be called once
// reset()