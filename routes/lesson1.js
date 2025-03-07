routes = require('express').Router();

const lesson1controller = require("../controllers/lesson1")
 
routes.get('/',lesson1controller.helloroute);


module.exports = routes;