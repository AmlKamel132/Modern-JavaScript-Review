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

class User extends Person{
    constructor(name,age,salary){
        super(name,age);
        this._salary = salary;
    }
    toString(){
        return super.toString();
    }
}



var user = new User('Aml',25,2000);
console.log(user.toString());


