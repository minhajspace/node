const { basename } = require('path');
const path = require('path');
const filename = path.join(__filename);
console.log(filename)
const basenaam =path.basename(filename)
console.log(basename);
const extension =path.extname(basenaam)
console.log(extension)