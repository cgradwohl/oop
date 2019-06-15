/**
 * Procedural Example
 * properties and methods are decoupled
 */

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime* rate);
}
getWage(baseSalary, overtime, rate); // many params
/**
 * OOP Example
 * properties and methods are coupled into an object
 */
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
}
employee.getWage(); // no params, the best functions are those with no params!