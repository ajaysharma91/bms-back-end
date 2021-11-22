const Route = require('express').Router()
const { userController } = require('../controller/user.controller.js')
const { userValidation } = require('../middleware/validation.js')
const { auth } = require('../auth/auth')
Route.post('/register', userValidation, userController.register)
Route.get('/', auth.isLoggedin, auth.isPermission, userController.getAll)
Route.get('/:id', auth.isLoggedin, auth.isPermission, userController.getUserById)
Route.delete('/', auth.isLoggedin, auth.isPermission, userController.delete)
Route.put('/:id', auth.isLoggedin, auth.isPermission, userController.update)
Route.post('/login', userController.login)

module.exports = Route