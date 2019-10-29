const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('files-to-copy/.eslintrc', 'utf8')
  writeJson(data, path + '/src/.eslintrc')
}

module.exports = write; 