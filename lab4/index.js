const Express = require("express");
const App = Express();
// port 80 
const port = 4200; 
//pokemon declaration
const pokemons = require('json-pokemon');


App.get("/:id/getPokemon/:id", (req, res)=>{
    res.send(req.params.id);
});

App.get("/:name/getPokemon/:name", (req,res)=> {
    res.send(req.param);
});

App.listen(port, ()=>{
    console.log("Server is up!")
});