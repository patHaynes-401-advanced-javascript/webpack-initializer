const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('files-to-copy/.gitignore.js', 'utf8')
  write(data, path + '/src/.gitignore.js')
}

module.exports = write; 