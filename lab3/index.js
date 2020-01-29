//Making the express server
const Express = require("express");
const App = Express();
const port = 4200;
// add the html file
const index = require("./index.html");

App.get("/", function(Request,Response){
    Response.send("hello world");
});

App.get("/index.html", function(Request, Response){
    Response.send(index);
});

App.listen(port, function(){
    console.log("Server up!");
});