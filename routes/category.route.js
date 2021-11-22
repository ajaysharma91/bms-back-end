const Route = require('express').Router()
const categoryController = require('../controller/category.controller.js')
const { catValidation } = require('../middleware/validation.js')
const { auth } = require('../auth/auth')
Route.post('/create', auth.isLoggedin, auth.isPermission, catValidation, categoryController.create)
Route.delete('/', auth.isLoggedin, auth.isPermission, categoryController.delete)
Route.put('/update/:id', auth.isLoggedin, auth.cateAccess, categoryController.update)
Route.get('/', auth.isLoggedin, auth.isPermission, categoryController.getAllCategory)
Route.get('/:id', auth.isLoggedin, auth.cateAccess, categoryController.getCategoryById)

module.exports = Route