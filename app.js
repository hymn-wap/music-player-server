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
app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        // res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
        next();  //next 方法就是一个递归调用
    });

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
        let token = jwt.sign({username: username}, 'your-encryption-secret', {expiresIn: '1h'});
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








// token 验证函数
function verifyToken(req, res, next) {
    let token = req.headers['authorization'];

    if (token) {
        jwt.verify(token, 'your-encryption-secret', (err, data) => {
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
}

















// listen
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening on port: ${port}`);
})