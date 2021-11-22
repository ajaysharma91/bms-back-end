const User = require('../model/user.model')
const jwt = require('jsonwebtoken')
exports.userExist = async (email) => {
    return await User.findOne({ email });
}
exports.generateJWTtoken = async(username) => {
    return jwt.sign(username, process.env.SECRET_TOKEN)
}
