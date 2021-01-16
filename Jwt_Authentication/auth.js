const Jwt = require('jsonwebtoken');

module.exports = (req, res,next)=>{
    tokan = req.headers.authorization;
    decoded = Jwt.verify(tokan,"this is secret_key");
    console.log(decoded);
    if (decoded =="deepak20@navgurukul.org"){
        res.send('match successfully Jwt token')
        next()
    }else{
        console.log("you have done some mistek in email");
    };
};
