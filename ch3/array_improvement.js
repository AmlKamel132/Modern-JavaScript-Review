var fruits = ["apple","orange","banan"];

//every .. do something like && 
var a = fruits.every((value,index) => {
     return value[0] == "a";
})

console.log('every ');
console.log(a);
console.log('*********************');

//some ||
var b = fruits.some((value,index,arr) => {
    return value[0] == "o";
})

console.log('some')
console.log(b);
console.log('*********************');


// map .. reurn new array 
var new_fruits = fruits.map(val =>  `i live ${val}`);

console.log('map');
console.log(new_fruits);
console.log('*********************');




// fruits.forEach(val => console.log(val));

/**
 * return undefined case thing not exist or return the same thing that you search about it
 */
var c = fruits.find(val => val == "banan");
console.log(`c is ${c}`);

/**
 * filter return array depend on specific condition 
 */

var fruits_A_b = fruits.filter(val=>{
    return val[0] == "a" || val[0] == "b";
});
console.log(fruits_A_b);