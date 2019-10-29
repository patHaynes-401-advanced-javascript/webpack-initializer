const { writeJson } = require('./writer');
const fs = require('fs');

function write() {
  const data = fs.readFileSync('files-to-copy/.travis.yml', 'utf8')
  write(data, path + './.travis.yml')
}

module.exports = write; 