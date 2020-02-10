const Express = require("express");
const App = Express(); 
const port = 80;

App.use(Express.json());

App.use("/", Express.static("public"));

App.get("/api", (req,res)=>{

    let result = {"error": "Error Message"};

    if(req.params.value == 5){
        result ={"secret":"hey bby u want sum fook?"};
    }
    res.json(result);
}); 

App.listen(port,() =>{
    console.log("server is up up up");
});