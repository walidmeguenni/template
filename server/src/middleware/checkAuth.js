const jwt = require('jsonwebtoken');


module.exports = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth=token.length<500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData=jwt.verify(token, process.env.TOKEN_SECRET);
            req.userId=decodedData.userId
        } else {
            decodedData=jwt.decode(token)
            req.userId=decodedData.sub
        }
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};