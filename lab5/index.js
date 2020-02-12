const Express = require("express");
const App = Express();
const port = 420;
const chalk = require("Chalk"); 
const pokemon = require("json-pokemon");

App.use(Express.json());
App.use("/", Express.static("/public"));

App.get("/id/:id", (req,res)=>{
    let result = {"error": "Invalid"};

    pokemon.forEach((value) =>{
        if (value.id == req.params.id){
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    } else{
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.get("/name/:name", (req,res)=>{
    let result = {"error": "Invalid"};

    pokemon.forEach((value) =>{
        if (value.id == req.params.id){
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
    } else{
        console.log(chalk.green(req.path));
    }
    res.send(result);
});

App.listen(port,()=>{
    console.log("Server is up, up, up.");
});