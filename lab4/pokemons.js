const Pokemon = require("./pokemon.js");
const pokes = require("json-pokemon")
const chalk = require("chalk");

class Pokemons{

    constructor(){   
        this.people = [];

        for(let i=0; i<99; i++){
            let name = faker.name.findName();
            let color = faker.commerce.color();
            this.people.push(new Person(name, color));
        }

    }

    readColor(req){
        let result = {"error": "Nothing found that matches that. :("};

        this.people.forEach((value) => {
            if(value.color == req.params.color){
                result = value;
            }
        });
    
        if(result.error){
            //in red
            console.log(req.path);
        }
        else{
            //in green
            console.log(req.path);
        }
        return result;
    }

    readName(req){

        let result = {"error": "Nothing found that matches that. :("};

        this.people.forEach((value) => {
            if(value.name == req.params.name){
                console.log(req.path);
                result = value;
            }
        });

        if(result.error){
            //in red
            console.log(req.path);
        }
        else{
            //in green
            console.log(req.path);
        }
        
        return result;
    }

}

module.exports = Pokemons;