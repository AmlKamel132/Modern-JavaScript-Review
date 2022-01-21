/**
 * object destructuring 
 * we can destruct the same property more than one
 * 
 */
var obj = {x:10,y:5,n:20};
var {x:name,y:age,z="default"} = obj; // x:name => set x value to name variable  
console.log(name)
console.log(age);
console.log(z);
console.log('*********************');


/**
 * you can define variables before destruct .. but you must use () otherwise will lead to problem 
 */

var firstName,lastName ;
({x:firstName,y:lastName} = obj);
console.log(firstName);
console.log(lastName);
console.log('********************');

/**
 * ...b gathering operator 
 * must be last 
 * set all remaining at b 
 */
var {y:a,...b} = obj;
console.log(b);
console.log("*********************");

/**
 * destruct same property more than one 
 */
var {x:c,x:v} = obj ;
console.log(c);
console.log(v);
console.log('*********************');

