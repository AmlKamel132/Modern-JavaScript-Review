/**
 * arrow function 
 */
var event = {
    names : [1,2,3],
    display1:function (){
               console.log('Not Arrow Function ....');
               console.log(this);
    },
    displayEvent1(){
              setTimeout(function(){
                  console.log('Not Arrow Function ....')
                  console.log(this);
              },2000)
    },
    displayEvent2(){
       setTimeout(() =>{
        console.log(' Arrow Function ....')
           console.log(this);
       },2000)
   },
   display2 : () => {
        console.log(' Arrow Function ....');
        console.log(this);
    }
}

event.display2();
event.displayEvent2();


event.display1();
event.displayEvent1();