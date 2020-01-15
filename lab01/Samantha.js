const Person = require ("./person.js");

class Samantha extends Person{
    constructor(name, age, color){
        super(name,color);
        this.age = age;

    }

}

module.exports = Samantha;