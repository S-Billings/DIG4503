//Making the express server
const Express = require("express");
const App = Express();
const port = 4200;

App.get("/", function(Request,Response){
    Response.send("hello world");
});

App.listen(port, function(){
    console.log("Server up!");
})