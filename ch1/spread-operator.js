/**
 * spread operator 
 * solve problem of reference value
 *  instead of loop in object/array to copy all property  .. 
 */
var arr1 = [1,2,3,4];
var arr2 = [...arr1];
console.log(arr2);

function displayName(firstName,lastName){
    console.log(`FirstName is ${firstName} , LastName is ${lastName}`);
}
var name = ["aml","kamel"];
displayName(...name);
console.log('*********************************************');
var obj1 = {name:"aml"};
var obj2 = {...obj1};
obj1.name="asd";
console.log(obj1.name);
console.log(obj2.name);
