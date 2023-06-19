const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');



dotenv.config();
//cors
const app = express();
app.use(bodyParser.json());
app.use(cors());


// middleware



//Bruce

// User infos:
let users = {
    'user1': '123',
    'user2': '123'
};

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //check the password
    if (users[username] === password) {
        // create token
        let token = jwt.sign({username: username}, 'secret', {expiresIn: '1h'});
        res.status(200).json({token: token});
    } else {
        res.status(401).send('Error: Invalid username or password');
    }
});

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

    try {//trans token to username
        let decoded = jwt.verify(token, 'secret');
        console.log(decoded.username);
    } catch(err) {
        console.log(err);
    }


}

















// listen
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
})