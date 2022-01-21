/**
 * ES7
 * ES8
 * ES9
 * 
 * 
 */

/**
 * ES7 
 * Array.includes  => [1,2,3].includes(1)
 * Exponentail operator ** (2**3 == 2^3)
 */
console.log('*******ES7*************');
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(10));
console.log(2**3);
console.log('*******************************');

/**
 * padStart ... fill to be the same length at start 
 * padEnd  .. fill to be the same length at start 
 */


 console.log('*******ES8*************');
var name="Aml";
console.log(name.padStart(15)); // will put 12 space at the start .. cause name 3 character 
console.log(name.padStart(15,'*')); // will put 12 * at the start .. cause name 3 character 
console.log(name.padEnd(15)); // will put 12 space at the end .. cause name 3 character 
console.log(name.padEnd(15,'#')); // will put 12 # at the end .. cause name 3 character 
console.log('*************************************************');

/**
 * Object.getOwnPropertyDescriptors(String)
 * you can find alot of things .. for example ..
 * configurable true => we can delete it 
 * enumerable true => we can iterate 
 *  writable true => we can modifiy value of it ..
 *
 * 
 * */

 Object.getOwnPropertyDescriptors(String);
 delete String.prototype.trim;
//  console.log("ddd ".trim()) // will through exception ...cause we delete it .. 
 console.log('*************************************************');



 /**
  * Object.keys(obj1) .. return object keys(property Names .. also includes methods names )
  * Object.values(obj2) .. return object values ( values ....)
  * 
  */
  var obj1 ={
      name:'A',
      age:25,
      
  };
  console.log(Object.keys(obj1));
  console.log(Object.values(obj1));
console.log('*******************************');

var obj2 ={
    name:'A',
    age:25,
    welcome:function(){
        return "Hello !"
    }
    
};
console.log(Object.keys(obj2));
console.log(Object.values(obj2));



console.log('***************************************');
/**
 * ES9
 * Symbol.description 
 * finally for promise  it' same as finally for try.. catch 
 * try .. catch => without catch(error) .. it's implicity ...
 */

var x = Symbol("a");
console.log(x.description);
console.log('***************************************');


try{
   throw new Error('aaa')
}catch{
    console.log('Error ');
}

console.log('***************************************');
