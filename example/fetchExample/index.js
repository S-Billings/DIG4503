const Express = require("express");
const App = Express(); 
const port = 80;

App.use("/", Express.static("public"));

App.get("/api", (req,res)=>{
    res.json({"error: Error Message"});
}); 

App.listen(port()=>{
    console.log("server is up up up");
});