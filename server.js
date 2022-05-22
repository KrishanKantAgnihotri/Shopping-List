const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');
const app = express();


//bodyParser Middleware
 app.use(bodyParser.json());

 //db config
 const db =  require("./config.js/keys").mongoURI;

 
 //connect to mongodb
 mongoose
    .connect(db)   
    .then(()=> console.log("mongoDB connected...."))
    .catch(err => console.log(err));

 //routes
 app.use("/api/items",items);   

 if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(res,req)=>{
       res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
 }

const port = process.env.PORT||5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));


