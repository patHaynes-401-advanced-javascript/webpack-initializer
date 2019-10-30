const writeFile = require('./writer').write;
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/.gitignore', 'utf8')
  writeFile(data, path + '/src/.gitignore')
}

module.exports = write; 