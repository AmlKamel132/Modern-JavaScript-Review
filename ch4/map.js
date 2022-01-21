/**
 * unique key only  .. value can be repeated .. case same key added will override value 
 * .set(elemet)
 * .get(element)
 * .delete(element)
 * .has(element)
 * .clear() // clear all element
 * .size // get size of map 
 * 
 */

var myMap = new Map([['a',1]]);
myMap.set('b',1111);
myMap.set('b',5);
console.log(myMap.size);
console.log(myMap.values());
console.log(myMap.keys());
console.log(myMap.entries());
console.log(myMap.get('b'));
console.log(myMap.get('c'));
console.log(myMap.has('b'));
console.log(myMap.delete('b'));


