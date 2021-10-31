const Category = require('../model/category.model')
exports.catExist = async (name) => {
    return Category.findOne({ name })
}