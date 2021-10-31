const Category = require('../model/category.model')

exports.createCategory = async (data) => {
    const { name, type } = data
    const category = new Category({ name, type })
    return await category.save()
}

exports.deleteCategory = async (id) => {
    const result = {
        error: null,
        data: null
    }
    try {
        const data = await Category.findOneAndDelete({ _id:id })
        result.data = data;
        return result
    } catch (error) {
        result.error = error
        return result
    }
}
exports.updateCategory = async (id, data) => {
    const result = {
        error: null,
        data: null
    }
    const { name, type } = data
    try {
        const data = await Category.findOneAndUpdate({ id }, {
            name,
            type
        })
        result.data = data;
        return result
    } catch (error) {
        result.error = error
        return result
    }
}

exports.getAllCategory = async () => {
    return await Category.find({})
}

exports.getCategoryById = async (id) => {
    return await Category.findOne({ id })
}