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
}

console.log(Person.WelcomeMessage);
console.log('*******************');
var person = new Person('Aml',25);
console.log(person.PersonName);
person.PersonName = "TestNewName";
console.log(person.PersonName);
