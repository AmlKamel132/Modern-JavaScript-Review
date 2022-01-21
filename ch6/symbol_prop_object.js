/**
 * Non-enumerable 
 * anonymous ... 
 * 
 */

 var sym = Symbol(10);
 var obj = {
      [sym]:{aa:'aaaa'}, // which means Symbo(10):{aa:'aaaa'} , you can access it with obj[sym] ,  without [] will be as any property not symbol .. 
       [Symbol(10)]:"xyz",// not reachable 
      [Symbol.for(10)]:"123",
       name:"a"
}
console.log(obj.name);
console.log(obj['name']);
console.log(obj[Symbol(10)]); // will be undefined ... 

console.log('************************');
console.log(obj[Symbol.for(10)]); // will be '123'
obj[Symbol.for(10)] = 5 ;
console.log(obj[Symbol.for(10)]); // will be 5

console.log('************************');

for(var i in obj){
    console.log(obj[i]); // will not access any symbol cause it non enumerable 
}
console.log('******************************');
console.log(JSON.stringify(obj))
console.log('******************************');
console.log(obj[sym]);
console.log('******************************');
console.log(Object.getOwnPropertySymbols(obj)); // will return array of all symbols that our object contains 
