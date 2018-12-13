const express = require('express'); //you get a function
const path = require('path');
const app = express(); // this function returns an object w/ methods
app.use('/light',express.static(path.join(__dirname,'Static')));
        //fake name to outsiders          //string that leads to real name
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','STVring.mp3'));
});

app.listen(3000);

// Express get requests

app.get('/ext',(req,res)=>{
    res.send('Examp Route');
// get to that by going localhost:3000/ext
});

app.get('/ext/:world/:country',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    // get value of world and country
    res.send("Examp and Route Params" + req.params.world);
});
