const Person = require ("./person.js");

class Samantha extends Person{
    constructor(name, color, age){
        super(name,color);
        this.age = age;

    }

}

module.exports = Samantha;