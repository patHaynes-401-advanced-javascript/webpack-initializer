const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('files-to-copy/.babelrc', 'utf8')
  writeJson(data, path + '/src/.babelrc')
}

module.exports = write; 