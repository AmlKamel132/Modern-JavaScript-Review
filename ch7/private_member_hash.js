/**
 * define private using # 
 * must be before constructor
 */


 class Person{

    #_address = "alex";

    constructor(name,age){
           this.personName = name;
           this.personAge = age;     

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
        return `I'm  from ${this.#_address}`;
    }
}

// by define function by this way .. can't access private member  that define using #.... 
Person.prototype.getAge = function(){
    return `${this.personAge}`;
}


var person = new Person('Aml',25);
console.log(person.toString());
