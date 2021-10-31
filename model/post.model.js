const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: 'title is required'
    },
    subTitle: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: 'slug is required'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    content: {
        type: String,
        required: 'content is required'
    },
    file: {
        type: String,

    },
    meta_keywords: {
        type: String
    },
    meta_description: {
        type: String
    },
    meta_title: {
        type: String
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports = mongoose.model('Post', postSchema)