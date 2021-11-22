const { catExist } = require('../middleware/category')
const categoryService = require('../services/category.service')
exports.create = async (req, res) => {
    const { name } = req.body
    const id = req.headers.uid
    const existCat = await catExist(name)
    if (existCat) return res.status(403).json({ success: true, message: 'Category Already Exist.' })
    const category = await categoryService.createCategory(req.body,id)
    res.status(201).json({ success: true, data: category, message: 'Category created successfully.' })

}

exports.delete = async (req, res) => {
    const { id } = req.body
    const result = await categoryService.deleteCategory(id)
    if (result.error != null) return res.status(500).json({ success: false, data: result.error, message: 'Something went wrong' })
    res.status(200).json({ success: true, data: result.data, message: 'Category Deleted Successfully.' })
}

exports.update = async (req, res) => {
    const { id } = req.params.id
    const result = await categoryService.updateCategory(id, req.body)
    if (result.error != null) return res.status(500).json({ success: false, data: result.error, message: 'Something went wrong' })
    res.status(200).json({ success: true, data: result.data, message: 'Category Update Successfully.' })
}

exports.getAllCategory = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategory()
        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        console.log(error)
    }
}
exports.getCategoryById = async (req, res) => {
    try {
        const {id} = req.params.id
        const categories = await categoryService.getCategoryById(id)
        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        console.log(error)
    }
}