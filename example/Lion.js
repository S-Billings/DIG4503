const Cat = reqiure("./Cat.js");

class Lion extends Cat{
    constructor(color, age, weight){
        // Calls the parent
        super(color, age);
        this.weight = weight;
    }
}
module.exports = Lion;