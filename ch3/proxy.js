/**
 * proxy .. 
 * used to customiz behavior for fundamental behavior 
 * sometimes used for validation ...
 * value correction  ...
 * tracing property ...
 * 
 * target 
 * handler => is object that contains trapping methods to control the behavior of the target 
 */

  var target = { name:'aml',age:25};
  var handler = {
      set(obj,prop,val){
          if(obj.hasOwnProperty(prop)){
              if(prop == "age" && val < 25){
                  console.log('min age is 25');
              }else{
                obj[prop] = val;
              }
          }else{
              console.log(`sorry propert not exist `);
          }
      },get(obj,prop){
          if(prop in obj){
              if(prop == "name"){
                  return `your name is ${obj[prop]}`;
              }

          }else{
              console.log('property not find');
          }
      }
  }

  var p = new Proxy(target,handler);
  p.name="ssss";
  p.age = 26;
  console.log(p);
  p.x = 10;
  p.age = 15;
  console.log(p.name);
