/**
 * iterable object if has @@iterator [Symbol.iterator]() function 
 */


 var arr = [1,2,3,4,5];
 
 var iter = arr[Symbol.iterator]()

 iter.next() // return {value: -- , done: false or true} if true finsihed 
