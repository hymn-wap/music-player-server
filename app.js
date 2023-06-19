const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');



dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

const songRouter = require('./routes/songRouter');
const playListRouter = require('./routes/playListRouter');
const loginRouter = require('./routes/loginRouter');

app.use(express.static('public'));
app.use(express.json()); //post, put req.body = {}
app.use('/login',loginRouter);
app.use('/songs',songRouter);
app.use('/playList',playListRouter);



app.get('/secure-endpoint', verifyToken, (req, res) => {
    // after login function
    res.send('You have access to this secure endpoint');
    console.log("11199911");
});

// token
function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, 'secret', (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.userData = data;
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
    try {//trans token to userId
        let decoded = jwt.verify(token, 'secret');
        console.log('userId: '+decoded.userId+'  token:'+token);
    } catch(err) {
        console.log(err);
    }


}



app.use((req, res, next) => {
    res.status(404).send('API not supported!');
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});













// listen
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
})