const fs = require('fs').promises;
const path = require('path')
exports.postMiddleware = {
    unlinkFile: async (filepath) => {
        try {
            console.log(`./${filepath}`)
            await fs.unlink(`./${filepath}`)
        } catch (error) {
            console.log(error)
        }
    }
}