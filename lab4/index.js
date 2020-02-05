const Express = require("express");
const App = Express();
// port 80 
const port = 4200; 
//pokemon declaration
const pokemons = reqiure('json-pokemon');

// for(let i = 0; i < 810; i++)
// {
//     let id = pokemons.id.getPokemonById();
//     let color = ;
//     getPokemon.pop();
// }


App.get("/:id/getPokemon/:id", (req, res)=>{
    res.send(req.params.id);
});

App.get("/:name/getPokemon/:name", (req,res)=> {
    res.send(req.param);
});

App.listen(port, ()=>{
    console.log("Server is up!")
});