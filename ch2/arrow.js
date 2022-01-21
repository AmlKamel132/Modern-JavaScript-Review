/**
 * Arrow function .. Fat arrow .. Lamb expression 
 */
var add = (x,y) =>{
    console.log(x+y);
}

var dispaly = name => console.log(name);

dispaly('Aml');
add(5,7);

console.log('********************');
/**
 * old 
 */
var obj = {
    userName:"aml",
    dispaly: function(){
    setTimeout(function(){
        console.log(this.userName); // will be undefined 
    },1000)
}
}

obj.dispaly();

/**
 * old solution
 */

 var obj1 = {
    userName:"aml",
    dispaly: function(){
        var _self=this;
    setTimeout(function(){
        console.log(_self.userName); 
    },1000)
}
}

obj1.dispaly();


/**
 * arrow function make lexical binding 
 */

 var obj2 = {
    userName:"aml",
    dispaly: function(){
      
    setTimeout(() =>{
        console.log(this.userName); 
    },1000)
}
}

obj2.dispaly();



