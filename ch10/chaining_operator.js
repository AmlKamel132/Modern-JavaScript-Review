/**
 * ?.
 */

var obj = {
    name:'a',
    address:{
        lat:12,
        lang:12
    }
};

// console.log(obj.address.location.name); // will throw eception cause there's no property call location 

console.log(obj.address.location?.name); // which means if there's property called location get name .. 
