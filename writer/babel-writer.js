const { writeJson } = require('./writer');
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/.babelrc', 'utf8');
  writeJson(data, path + '/src/.babelrc');
}

module.exports = write; 