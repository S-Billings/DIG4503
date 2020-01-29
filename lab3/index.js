//Making the express server
const Express = require("express");
const App = Express();
const port = 4200;

//watches directory
App.use("/public",Express.static("public"));

App.get("/", function(Request,Response){
    Response.send("hello world");
});

App.get("/index.html", function(Request, Response){
    Response.send(index);
});

App.listen(port, function(){
    console.log("Server up!");
});