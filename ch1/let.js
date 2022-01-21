/**
 * let block scope 
 * var function scope 
 * const block scope 
 * hoist only for var 
 * hoist means =>  allocates memory for all variables and functions defined in the program before execution.
 * Reassigned => you can reassigned var and let .. const No 
 */

console.log(i); //undefined
for(var i=0;i<5;i++){

}
console.log(i); // 5


for(let j=0;j<5;j++){

}
console.log(j); // error j is not defined 