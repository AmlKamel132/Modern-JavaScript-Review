/**
 * object representing the event complete or failure of asynchronous operation 
 * 
 * pending then complete or failed then settled 
 */

var p = new Promise(function(reslove,reject){
           reslove();
});

// p.then(()=> console.log('success'))
//  .catch(() => console.log('Error'))
//  .finally(() => console.log('Finallly'));

 /**
  * Promise Methods ...
  *  
  * all ([]) cause all success reslsove
  * race ([]) depend on first promise returned 
  * reject ... 
  * reslove ...
  */



  var p1 = new Promise(function(reslove,reject){
      setTimeout(() => {
        reslove('p1  ' );
      },1000)
    
});


var p2 = new Promise(function(reslove,reject){
    setTimeout(() => {
      reject('p2  ' );
    },2000)
  
});




var p3 = new Promise(function(reslove,reject){
    setTimeout(() => {
      reject('p3  ' );
    },3000)
  
});


/**
 * case all resloved .. wil return array of all resloved message
 * case reject .. will return first reject message only 
 */
Promise.all([p1,p2,p3])
       .then(console.log)
       .catch(console.log);

/** 
*  will return first (reslove or reject ....)
*/

Promise.race([p1,p2,p3])
       .then(console.log)
       .catch(console.log);

