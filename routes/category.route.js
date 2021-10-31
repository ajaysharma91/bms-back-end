const Route = require('express').Router()
const categoryController = require('../controller/category.controller.js')
const { catValidation } = require('../middleware/validation.js')
Route.post('/create', catValidation, categoryController.create)
Route.delete('/', categoryController.delete)
Route.put('/update/:id', categoryController.update)
Route.get('/', categoryController.getAllCategory)
Route.get('/:id', categoryController.getCategoryById)

module.exports = Route