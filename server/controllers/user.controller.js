const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
    const { body } = req;

    User.findOne({email: body.email})
    .then(query => {
        if(query) {
            res.status(400).json({error: " Email already in use"});
            return;
        };
    })
    .catch((err) => res.status(400).json(err));

    const newUser = new User(body);

    newUser.save()
    .then((createdUser) => (res.json(createdUser)))
    .catch((err) => res.status(400).json(err));
};

const login = (req, res) => {
    const { body } = req;

    User.findOne({email: body.email})
    .then((userQuery) => {
        if(userQuery === null){
            res.status(400).json({error: "Invalid login attempt."})
        }
        else {
            bcrypt.compare(body.password, userQuery.password)
            .then((validPassword) => {
                if(validPassword){
                    res.cookie(
                        "usertoken", 
                        jwt.sign({
                            id: userQuery._id,
                            email: userQuery.email
                        },
                        process.env.secretKey
                        ),
                        {
                            httpOnly: true,
                            expires: new Date(Date.now() + 9000000)
                        },
                    ).json({message: "Successfully Logged In"})
                }
                else {
                    res.status(400).json({message: "Email or password incorrect"})
                };
            })
            .catch((err) => res.status(400).json(err));
        }
    })
    .catch((err) => res.status(400).json(err))
};

const logout = (req, res) => {
    res.clearCookie("usertoken");
    res.status(200).json({message: "Successfully logged out."});
};


const getOneUser = (req, res) => {
    const { params } = req;
    User.findOne({_id: params.id})
    .then((oneUser) => res.json(oneUser))
    .catch((err) => res.status(400).json(err));
};

module.exports = {
    register,
    login,
    logout,
    getOneUser,
}