const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs'); //this line of code will set the template engine to ejs

//this line of code will tell the location of of our views folder where all the 
//views are located and bind it to the engine. 
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
    return res.render('home',{title:"ChetanKomal"});
})


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})