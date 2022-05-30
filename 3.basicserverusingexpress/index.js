const express = require('express');
const port = 8000;

const app = express(); //start the server using express

//when /ck url is hitted then show this html
app.get('/ck', function(req, res){
    res.send('<h1>CK</h1>');
})
//if / url is hitted then show this html
app.get('/', function(req, res){
    res.send('<h1>Cool, it is running! or is it?</h1>');
})//and if any url which is not defined above is hit then express will handle itself and will show "cannot get"

//server is listening as on we done it on basic node server setup
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})