const MongoDBClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://samanthabillings:78oln2ltIERaQL8n@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection){
    
    let database = connection.db("DIG4503-78");
    let collection = database.collection("Movies");

    if(error){
        throw error;
    }

   
    
    
    console.log(collection);
    
    connection.close();


});