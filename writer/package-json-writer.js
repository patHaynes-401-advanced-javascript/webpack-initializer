const { writeJson } = require('./writer');
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/package.json', 'utf8');
  writeJson(data, path + '/src/package.json');
}

module.exports = write; 
