const { writeJson } = require('./writer');
const fs = require('fs');

function write() {
  const data = fs.readFileSync('files-to-copy/webpack.config.js', 'utf8')
  write(data, path + './webpack.config.js')
}

module.exports = write; 