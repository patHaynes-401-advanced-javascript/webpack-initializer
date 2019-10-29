const { writeJson } = require('./writer');
const fs = require('fs');

function write() {
  const data = fs.readFileSync('files-to-copy/.babelrc', 'utf8')
  writeJson(data, './')
}

module.exports = write; 