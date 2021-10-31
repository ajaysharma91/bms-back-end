const Post = require('../model/post.model')
const path = require('path')
exports.postService = {
    createPost: async (data, filepath) => {
        const { title, slug, category, content } = data
        const post = new Post({
            title,
            slug,
            category,
            content,
            file: filepath.replace('\\', '/')

        })
        return await post.save()
    },
    getAll: async () => {
        return await Post.find({}).populate('category')
    },
    getById: async (id) => {
        return await Post.findOne({ _id: id }).populate("category")
    }
}
