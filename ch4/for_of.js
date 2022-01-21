/**
 * work only in iteratable object ..
 * 
 */

var myMap = new Map([['a',1],['b',2],['c',3]]);
for(i of myMap){
    console.log(i);
}

for([key,val] of myMap){
    console.log(`key ${key} , value ${val}`);
}