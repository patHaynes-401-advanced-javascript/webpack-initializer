const { writeJson } = require('./writer');
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/.eslintrc', 'utf8')
  writeJson(data, path + '/src/.eslintrc')
}

module.exports = write; 