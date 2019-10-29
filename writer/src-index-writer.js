const { writeJson } = require('./writer');
const fs = require('fs');

function write() {
  const data = fs.readFileSync('files-to-copy/src/index.html', 'utf8')
  write(data, './index.html')
  write('', './index.js')
}

module.exports = write; 