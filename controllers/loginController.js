const Login = require('../models/login');

exports.login = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    let token = Login.login(username, password);

    if (token) {
        res.status(200).json({
            "token": token,
            "userId": Login.getUserId(username)
        });
    } else {
        res.status(401).send('Error: Invalid username or password');
    }
}

exports.afterLogin = (req, res, next) => {
    res.status(200).json(Book.findById(req.params.bookId));
}