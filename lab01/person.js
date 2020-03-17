 const chalk = require('chalk');

 class Person {
    constructor(name, color){
        // this.[argu.] referce to class person
        this.name = name; 
        this.color = color; 

    }

    //adding new functions to a class

    speak(){
        console.log(chalk.keyword(this.color)(this.name));
    }
}
// makes it global to other files: module.exports
module.exports = Person;