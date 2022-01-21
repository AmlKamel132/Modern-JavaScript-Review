/**
 * tagged template .. 
 * string array that contains all string values .. 
 *  last element will be space if there's un element before it and there's nothing or there's space after it ....
 * values aray that contain all literal values 
 * 
 */
function func(string,...values){
     console.log(string);
     console.log(values);
}
var name ="aml";
var x=1,y=2,z=3;
func`my name is ${name} , we have 3 values ${x} , ${y} and ${z}`; 