const writeFile = require('./writer').write;
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/src/index.html', 'utf8');
  writeFile(data, path + '/src/index.html');
}

module.exports = write; 