const mongoose = require('mongoose')

const userScheema = mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: 'Name is maindatory'
    },
    username: {
        type: String,
        required: 'username is Required'
    },
    email: {
        type: String,
        required: 'Email Is Required.'
    },
    password: {
        type: String,
        required: 'password Required..'
    },
    role: {
        type: String,
        default: 'USER',
        enum: ['ADMIN', 'USER']
    },
    is_active: {
        type: Boolean,
        default: true
    },
    user_token:{
        type:String,
        default:''
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userScheema)