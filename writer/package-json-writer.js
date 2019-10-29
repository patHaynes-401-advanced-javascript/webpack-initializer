const { writeJson } = require('./writer');
const fs = require('fs');

function write(path) {
  const data = fs.readFileSync('files-to-copy/package.json', 'utf8')
  writeJson(data, path + '/src/package.json')
}

module.exports = write; 
