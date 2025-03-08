const express = require('express');
const app = express();
const mongodb = require("./data/database")
 
const port =process.env.PORT || 3000;

app.use('/', require('./routes/lesson1'));


mongodb.initdb((err)=>{
    if(err){
        console.log(err)
    }
    else{
        app.listen(port, () => {
            console.log('Database is listening at port ' + (port));
          });
    }
})
