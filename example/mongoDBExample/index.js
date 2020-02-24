const MongoDBClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://<samanthabillings>:<78oln2ltIERaQL8n>@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection){
    
    
    if(error){
        throw error;
    }


});