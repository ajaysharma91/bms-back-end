const User = require('../model/user.model')
exports.userExist = async(email)=>{
    return await User.findOne({email});
}