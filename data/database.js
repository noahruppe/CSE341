const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;

let database;

const initdb = (callback) => {
    if(database){
        console.log("db is already running");
        return callback(null,database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) =>{
            database = client;
            callback(null,database);
        })
        .catch((err)=>{
            callback(err);
        });
};

const getDatabase = () =>{
    if(!database){
        throw Error("database is not running");
    }
    return database;
}

module.exports ={
    initdb,
    getDatabase
};

