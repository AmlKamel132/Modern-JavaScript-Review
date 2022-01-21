/**
 * define private using symbol
 * must be before constructor
 */


 var address = Symbol();

 class Person{

    
    constructor(name,age){
           this.personName = name;
           this.personAge = age;  
           this[address] = "Alex";   

    }

    get PersonName(){
        return this.personName;
    }


    set PersonName(val){
         this.personName = val;
    }
    static get WelcomeMessage(){
        return "Welcome ...";
    }
    toString(){
        return `I'm  ${this.PersonName}`;
    }
}

Person.prototype.getAddress = function(){
    return `${this[address]}`;
}


var person = new Person('Aml',25);
console.log(person.toString());
console.log(person.getAddress());