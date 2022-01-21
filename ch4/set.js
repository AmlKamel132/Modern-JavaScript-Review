/**
 * set accept only unique values expect array cause it by reference 
 * .size // to get size
 * .add(element)
 * .remove(element)
 * .has(element)
 * .clear() // clear all set values 
 * 
 * .keys()
 * .values()
 * .entries() // display them as key value 
 * 
 * new Set([]); //constructor 
 */

var newSet = new Set([1,2]);
newSet.add(1);
console.log(newSet.size);
newSet.add('1');
newSet.add([1]);
newSet.add([1]);
newSet.add([1]);
console.log(newSet);
console.log(newSet.has('2'));
console.log(newSet.has(2));
console.log(newSet.has([1]));
var arr = [1,2];
newSet.add(arr);
newSet.add(arr);
console.log(newSet.has(arr));
console.log(newSet.entries());
console.log(newSet.keys());
console.log(newSet.values());