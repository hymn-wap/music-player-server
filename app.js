const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware


// listen
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
})