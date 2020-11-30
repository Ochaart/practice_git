const fs = require('fs');
const contentsInJSON = fs.readFileSync('../package.json', 'utf-8')
const contentsAsJS = JSON.parse(contentsInJSON);
console.log(contentsAsJS);
fs.writeFileSync('file.json',contentsInJSON)

