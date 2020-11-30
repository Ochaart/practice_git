const path = require('path');
console.log(path.join(path.relative(__filename,"/path.js")));

const fs = require('fs')
fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err)
  } else {
    console.log(files)
  }
})


const files = fs.readdirSync('.')
const stats = fs.stat('test.js',(err,stats) => {
    if (err) {
        throw err;
    } else {
        console.log(stats);
    }
});
console.log(files)
console.log(stats)