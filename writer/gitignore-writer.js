const { writeJson } = require('./writer');
const fs = require('fs');

function write() {
  const data = fs.readFileSync('files-to-copy/.gitignore.js', 'utf8')
  write(data, './.gitignore.js')
}

module.exports = write; 