const path = require('path')

function myname() {
    let file = module.parent.filename
    let name = path.basename(file, path.extname(file))
    delete require.cache[__filename]
    return name
}

module.exports = myname