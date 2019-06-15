/**
 * VALUES TYPES (PRIMITIVES)
 * Number
 * String
 * Boolean
 * Symbol
 * undefined
 * null
 */


/**
 * REFERENCE TYPES (OBJECTS)
 * Object
 * Function
 * Array
 */


// values types are copied into other variables
// they are completely independent of each other
let t1 = 10;
let t2 = t1;
t1 = 20;

// now t3 and t4 both point to the same object in memory
// the object is stored BY REFERENCE
let t3 = { value: 10 };
let t4 = t3;
t3.value = 20;



/**
 * PRIMITIVE TYPES ARE COPIED BY VALUE 
 * VS  
 * OBJECTS ARE COPIED BY REFERENCE 
 */
let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // vaslue stays at 10 NOT because of Closure but
// because number is copied by value to the parameter of the increase() function



let numberObj = {value: 10};
function increase(numberObj) {
  numberObj.value++;
}
increase(numberObj);
console.log(numberObj); // value property now changes top 11 because
// object is __passed by reference__