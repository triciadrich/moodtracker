const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    jwt.verify(
        req.cookies.usertoken,
        process.env.secretKey,
        (err, payload) => {
            if(err){
                res.status(401).json({ verified: false });
            }
            else{
                console.log("User authenticated");
                next();
            }
        }
    );
};

module.exports = {
    authenticate
}