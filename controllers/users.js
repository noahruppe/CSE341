const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

const getAll = async(req, res) =>{
    const result = await mongodb.getDatabase().db().collection("users").find();
    result.toArray().then((users) =>{
        res.setHeader("Content-type", "application/json");
        res.status(200).json(users);
    });
};

const getSingle = async(req, res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection("users").find({_id: userId});
    result.toArray().then((users) =>{
        res.setHeader("Content-type", "application/json");
        res.status(200).json(users[0]);
    });
};

const createUser = async(req,res) =>{
    const user ={
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        favoritecolor:  req.body.favoritecolor,
        birthday: req.body.birthday
    };
 const response = await mongodb.getDatabase().db().collection("users").insertOne(user);
 if(response.acknowledged > 0){
    res.status(204).send();
 }
 else
 {
    res.status(500).json(response.error || "Some error occured while inserting the user");
 }
};

const updateUser = async(req, res) =>{
    const userId = new ObjectId(req.params.id);
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        favoritecolor: req.body.favoritecolor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db().collection("users").replaceOne({_id: userId}, user);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else
    {
        res.status(500).json(response.error || "Some error occured while updating the user" );
    }
};

const deleteUser = async(req, res) =>{
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection("user").remove({_id: userId}, true);

    if(response.deletCount >0){
        res.status(204).send();
    }
    else
    {
        res.status(500).json(response.error || "Some error occured while deleting");
    }
}


module.exports = {
    getAll,
    getSingle,
    createUser,
    updateUser,
    deleteUser
};

