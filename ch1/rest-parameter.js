/**
 * reset parameter 
 * must be last parameter for function signature
 * will be as array 
 * x = 1
 * y = 2
 * z = [3,4,5,6]
 * arguments[0] // 1
 * arguments[1] // 2
 * arguments[2] //3 
 * 
 * cause of arguments is object 
 * 
 * @param {*} x 
 * @param {*} y 
 * @param  {...any} z 
 */

function add(x,y,...z){
    console.log(x);
    console.log(y);
    console.log(z);
    console.log('**********************');
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log('**********************');
    console.log(arguments);
    console.log('**********************');
    console.log(typeof arguments);

}

add(1,2,3,4,5);