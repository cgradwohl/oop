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
function increase(number) { // the value of the variable is COPIED and passed into the function as the parameter 
  number++; // the parameter is increased;
}
increase(number);
console.log(number); // then we log the variable NOT the parameter
// value stays at 10 NOT because of Closure but
// because a number is copied by value to the parameter of the increase() function



let numberObj = {value: 10};
function increase(numberObj) { // the reference to the variable is passed into function as the parameter
  numberObj.value++; // the reference to the variable is increased
}
increase(numberObj);
console.log(numberObj); // log the reference to the variable
// value property now changes top 11 because
// an object type is __passed by reference__

