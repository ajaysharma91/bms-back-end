const Route = require('express').Router()
const { postController } = require('../controller/post.controller')
const multer = require('multer')
const path = require('path')
var stor = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join() + '/upload/')
    },
    filename: function (req, file, cb) {
        var filename = file.originalname;
        var fileExtension = filename.split(".")[1];
        cb(null, Date.now().toString() + "." + fileExtension);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({
    storage: stor,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})
Route.post('/create', upload.single('postFile'), postController.createPost)
Route.get('/', postController.getAll)
Route.get('/:id', postController.getById)
Route.delete('/', postController.delete)
// Route.put('/:id', postController.createPost)

module.exports = Route