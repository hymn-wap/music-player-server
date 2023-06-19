const express = require("express");
const path = require("path");
// const dotenv = require("dotenv");
const songRouter = require('./routes/songRouter');
const playListRouter = require('./routes/playListRouter');
// dotenv.config();
const cors = require('cors');
const app = express();

// middleware
// Serve static files from the "public" directory
app.use(express.static('public'));

app.use(cors());
app.use(express.json()); //post, put req.body = {}
app.use('/songs',songRouter);
app.use('/playList',playListRouter);

app.use((req, res, next) => {
    res.status(404).send('API not supported!');
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});


// listen
// const port = process.env.PORT;
// app.listen(port, ()=>{
//     console.log(`Server listening on port: ${port}`);
// })
app.listen(3000);


