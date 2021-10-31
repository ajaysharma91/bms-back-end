const userService = require('../services/user.service.js')
const userMiddleware = require('../middleware/user')

exports.register = async (req, res) => {
    const { email } = req.body;
    const isExist = await userMiddleware.userExist(email)
    if (isExist) return res.status(403).json({ success: true, message: 'User is Already Registered.!!' })
    let user = await userService.createUser(req.body)
    res.status(201).json({ success: true, data: user, message: 'User Registred Successfully..!!' })
}

exports.getAll = async (req, res) => {
    try {
        const users = await userService.getAll()
        res.status(200).json({ success: true, data: users })
    } catch (error) {
        console.log(error)
    }
}
exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params
        console.log(req.params)
        const user = await userService.getUserById(id)
        res.status(200).json({ success: true, data: user })
    } catch (error) {
        console.log(error)
    }
}
exports.delete = async (req, res) => {
    try {
        const { id } = req.body
        const user = await userService.delete(id)
        res.status(200).json({ success: true, data: user, message: 'Deleted Successfully.' })
    } catch (error) {
        console.log(error)
    }
}
exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const userData = req.body
        const user = await userService.update(id, userData)
        res.status(200).json({ success: true, data: user, message: 'Updated SuccessFully' })
    } catch (error) {
        console.log(error)
    }
}



