routes = require('express').Router();

routes.use("/", require("./swagger"));
const lesson1controller = require("../controllers/lesson1")
 
routes.get("/", (req,res) =>{
    //#swagger.tags = [Hello-World]
    res.send("Hello World");
});

routes.use("/users", require("./users"));

module.exports = routes;