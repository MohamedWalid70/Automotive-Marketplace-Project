const express = require('express');
const fs = require("fs");

let app = new express();

const bodyParser = require('body-parser');
/ *Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
const { json } = require('body-parser');
const send = require('send');
app.use(cors());

// This makes the server points to the folder where the page files exist
app.use(express.static('User interface'));


const server = app.listen(8000, () => {

    console.log("started running a local server on port 8000");
});


app.post("/update", (req, res) =>{
   
    // console.log("we are here at update");
    // console.log(req.body);

    try {

        fs.writeFileSync("User interface/files/selectedObj.json", JSON.stringify(req.body));

    } catch (error) {
        // logging the error
        console.error(error);
      
        throw error;
    }
    
});


app.get("/download", (req, res) =>{
   
    //console.log(req.body);

    // console.log("we are here at download");

    try {

        const cars = fs.readFileSync("User interface/files/cars.json");
        res.send(cars);

    } catch (error) {
        // logging the error
        console.error(error);
      
        throw error;
    }
    
});


app.get("/downloadChange", (req, res) =>{
   
    //console.log(req.body);

    // console.log("we are here at downloadChange");

    try {

        const car = fs.readFileSync("User interface/files/selectedObj.json");
        res.send(car);

    } catch (error) {
        // logging the error
        console.error(error);
      
        throw error;
    }
    
});