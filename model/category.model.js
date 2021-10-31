const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Name Field is Required.'
    },
    type: {
        type: String,
        required: 'Type Field is Required.'
    },
    is_active: {
        type: Boolean,
        default: true
    },
    created_by: {
        type: Number,
        default: 1
    },
    updated_by: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Category', categorySchema)