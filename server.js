const express = require('express');
const app = express();

 
const port = 3000;

app.use('/', require('./routes/lesson1'));

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});