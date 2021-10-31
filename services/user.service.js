const User = require('../model/user.model');
const bcrypt = require('bcrypt')
const salt = 10;
exports.createUser = async (data) => {
    const { name, username, email } = data
    let { password } = data
    password = await bcrypt.hash(password, salt)
    const user = new User({ name, username, email, password })
    return user.save();
}

exports.getAll = async () => {
    return await User.find()
}
exports.getUserById = async (id) => {
    return await User.findOne({ _id:id })
}
exports.delete = async (id) => {
    // console.log(User.findOne({_id:id}))
    return await User.findOneAndRemove({ _id:id })
}
exports.update = async (id, data) => {
    const { name, role, email, username } = data
    return await User.findOneAndUpdate({ _id:id }, {
        name,
        username,
        email,
        role
    })
}