const Express = require("express");
const App = Express();
// port 80 
const port = 4200; 

App.get("/:id/#id", (req, res)=>{
    res.send(req.params);
});

App.get("/:name/#name", (req,res)=> {
    res.send(req.param);
});

App.listen(port, ()=>{
    console.log("Server is up!")
});