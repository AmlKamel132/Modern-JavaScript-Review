/**
 * destructure == decomposing structure
 * you can set default values y=10 which means if undefined set it with 10
 */
var arr1 = [1,2,3,4,5];
var [x,,,z,,,y=10]= arr1;
console.log(x); // x = arr1[0]
console.log(z); // z = arr1[3]
console.log(y);  // z =  if arr[6] undefined set 10 (y=10) , 10 default value otherwise set it with arr1[6]
console.log('*********************************');


/*
  gathering operator .. 
  must be at the end .. 
  operation likes spread .. 
  means add all remaining to x3 as array
  
*/


var [x1,x2,...x3] = arr1;
console.log(x1);
console.log(x2);
console.log(x3);
console.log('*****************************************');

function info (){
    return ['a','b','c'];
}

var [a,b,c] = info() || [];
console.log(a);
console.log('**************************************');


var obj = {};
 [obj.x1,obj.x2,...(obj.x3)] = arr1;
 console.log(obj);
console.log(obj.x1);
console.log(obj.x2);
console.log(obj.x3);
console.log('*****************************************');



/**
 * you can define variables before destruct 
 */

var xx1,xx2,xx3;
 [xx1,xx2,...(xx3)] = arr1;
console.log(xx1);
console.log(xx2);
console.log(xx3);

