// User infos:
const jwt = require("jsonwebtoken");
let users = {
    'user1': ['123',1],
    'user2': ['123',2]
};


module.exports=class Login {
    constructor() {
    }

    static checkPassword(username, password) {
        return users[username] && users[username][0] === password;
    }

    static getUserId(username) {
        return users[username] ? users[username][1] : null;
    }


    static login(username, password) {
        if (this.checkPassword(username, password)) {
            let userId = this.getUserId(username);
            return jwt.sign({userId: userId}, 'secret', {expiresIn: '1h'});
        }
        return null;
    }



}