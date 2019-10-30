const writeFile = require('./writer').write;
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/.travis.yml', 'utf8')
  writeFile(data, path + './.travis.yml')
}

module.exports = write; 