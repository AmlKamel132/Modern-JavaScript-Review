class Person{
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
        return `I'm ${this.personName}`;
    }
}

// we can define new function by this way ...
Person.prototype.getAge = function(){
    return `${this.personAge}`;
}


var person = new Person('Aml',25);
console.log(person.toString());

console.log(person.getAge());


