const Express = require("express");
const App = Express();
// port 80 
const port = 4200; 
//pokemon declaration
const pokemons = require('json-pokemon');


App.get("/id/:id", (req, res)=>{
    let pokemonsId = getPokemonById();
    console.log(pokemonId);
    res.send(req.params.id);

});

App.get("/name/:name", (req,res)=> {
    let pokenames = getPokemonByName();
    console.log(pokenames);
    res.send(req.param.name);
});

App.listen(port, ()=>{
    console.log("Server is up!")
});