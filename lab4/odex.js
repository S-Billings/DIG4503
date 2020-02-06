const Express = require ("express");
const App = Express();
const port = 4200; 

const pokemons = require("json-pokemon");
const pokeArray = pokemons;
console.log(pokeArray[25]);


for(let i = 0; i < ; i++){
    let name =Pokemon.name.getPokemonByName();
    let id = Pokemon.id.getPokemonById();
}

App.get("/name/:name", (req,res)=>{
    let pokemonName = 
    Pokemon.forEach((value)=>{
        if(value.name == req.params.name){
            res.send(value);
        }
    });
    res.send("Invalid!");
});

App.get("/id/:id", (req, res)=>{
    Pokemon.forEach((value)=>{
        if(value.id == req.params.id){
            res.send(value);
        }
    });
    res.send("Invalid.");
})

App.listen(port,()=>{
    console.log("Server is up, up, up.");
});