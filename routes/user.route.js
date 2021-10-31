const Route = require('express').Router()
const userController = require('../controller/user.controller.js')
const { userValidation } = require('../middleware/validation.js')
Route.post('/register', userValidation, userController.register)
Route.get('/', userController.getAll)
Route.get('/:id', userController.getUserById)
Route.delete('/:id', userController.delete)
Route.put('/:id', userController.update)

module.exports = Route