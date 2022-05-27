const { postService } = require('../services/post.service')
const { postMiddleware } = require('../middleware/post.js')
exports.postController = {
    createPost: async (req, res) => {
        try {
            const postData = req.body
            let { path } = req.file || ''
            const post = await postService.createPost(postData, path)
            res.status(201).json({ success: true, data: post, message: 'Post Created Successfully' })

        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req, res) => {
        try {
            const posts = await postService.getAll()
            res.status(200).json({ success: true, data: posts, message: '' })

        } catch (error) {

        }
    },
    getById: async (req, res) => {
        try {
            const post = await postService.getById(req.params.id)
            res.status(200).json({ success: true, data: post, message: '' })

        } catch (error) {

        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.body
            const post = await postService.delete(id)
            if (post !== null) {
                await postMiddleware.unlinkFile(post.file)
            }
            res.status(200).json({ success: true, data: post, message: '' })

        } catch (error) {

        }
    }
}