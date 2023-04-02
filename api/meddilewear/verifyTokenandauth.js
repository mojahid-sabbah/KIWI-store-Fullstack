const { userModel } = require('../DB/models/user.models');
var jwt = require('jsonwebtoken');        // npm i jsonwebtoken 

const auth = () => { //verfiytoken
    return async (req, res, next) => {
        try {
            const { token } = req.headers;
            if (!token.startsWith(process.env.bearerToken)) {
                res.json({ message: "invalid beraer token" })
            } else {
                mytoken = token.split(process.env.bearerToken)[1];
                const decoded = jwt.verify(mytoken, process.env.loginToken)
                const user = await userModel.findById(decoded.id)
                req.user = user
                next();
            }
        } catch (error) {
            res.status(477).json({ message: "auth catch error", error })
        }
    }
} 
 
const verifyToken = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json("You are not authorized");
  }

  try {
    mytoken = token.split(process.env.bearerToken)[1];
    const decoded = jwt.verify(mytoken, process.env.loginToken)
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json("Token is not valid");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You are not allowed to do that");
    }
  });
};

const verifyTokenAndAdmin = async (req, res, next) => {
    verifyToken(req, res, async() => {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        if (user.isAdmin) {
            next();
        } else {
            return res.status(403).json({ message: "You are not allowed to do that" });
        }
    });
};



module.exports = { auth ,verifyToken ,verifyTokenAndAdmin  ,verifyTokenAndAuthorization}