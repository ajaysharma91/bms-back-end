const jwt = require('jsonwebtoken')
const User = require('../model/user.model')
const Category = require('../model/category.model')
const Post = require('../model/post.model')
const { userConfig } = require('../config/user.config')
const mongoose = require('mongoose')
exports.auth = {
    isLoggedin: async (req, res, next) => {
        // return null
        try {
            let token = req.headers.authorization
            console.log(token)
            if (token === undefined || token === null) {
                return res.status(403).json({ success: false, message: 'Please pass your token with request' })
            }
            else token = token.split(' ')[1];
            jwt.verify(token, process.env.SECRET_TOKEN, (err, username) => {
                if (err) return res.status(403).json({ success: false, message: 'You are not loggedIn' })
                req.username = username
                console.log(username)
                next()
            })
        } catch (error) {
            console.log(error)
        }
    },
    isPermission: async (req, res, next) => {

        let token = req.headers.authorization.split(' ')[1]
        const user = await User.findOne({ username: username })
        if (user.role !== userConfig.roles.admin && user.user_token === token) {
            return res.status(403).json({ success: false, message: 'You are not right for this operation' })
        }
        next()
    },
    cateAccess: async (req, res, next) => {
        const { id } = req.params
        const user = await User.findOne({ username: req.username })
        const category = await Category.findOne({ _id: id })
        if (user.role === userConfig.roles.admin || JSON.stringify(user._id) === JSON.stringify(category.created_by)) {
            return next()
        }
        return res.status(403).json({ success: false, message: 'You are not right for this operation' })
    },
    postAccess: async (req, res, next) => {
        const { id } = req.params
        const user = await User.findOne({ username: req, username })
        const post = Post.findOne({ _id: id })
        if (user.role === userConfig.roles.admin || JSON.stringify(user._id) === JSON.stringify(post.created_by)) {
            next()
        }
        return res.status(403).json({ success: false, message: 'You are not right for this operation' })
    }
}
