/**
 * new prmitive type like string / int ..
 * unique value 
 *  Symbol("description")
 *  Symbol.for("")
 *  Symbol("abc") == Symbol("abc") ... will be false 
 * 
 *  Symbol.for("abc") == Symbol.for("abc") ... will be true 
 *   cause Symbol.For depend on registry .. if value exist will reference to the sam e thing 
 * 
 */

var x = Symbol("abc")
var y = Symbol("abc")
console.log(x);
console.log(x == y);

console.log('*******************************');

var xx = Symbol.for("abc")
var yy = Symbol.for("abc")
console.log(xx);
console.log(xx == yy);
console.log(xx.description); // new property Es9
console.log(Symbol.keyFor(xx));

/**
 * was private .. 
 * Symbol.replace()  .. used in string object 
 * Symbol.match() 
 */