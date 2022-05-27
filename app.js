const express = require('express');
require('dotenv')
const app = express();
const Routes = require('./routes/index')
const port = 4500
var cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/upload', express.static('upload'))
app.use(express.urlencoded({ extended: false }))
app.use('/v1/api/user', Routes.userRoute)
app.use('/v1/api/category', Routes.catRoute)
app.use('/v1/api/post', Routes.postRoute)
app.get('/', (req, res) => {
    res.send('This Is First Api')
    res.end()
})

app.listen(port, () => {
    console.log(`Server Listening at Port ${port}`)
})
