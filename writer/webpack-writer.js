const writeFile = require('./writer').write;
const fs = require('fs');

async function write(path) {
  const data = await fs.readFileSync('./files-to-copy/webpack.config.js', 'utf8')
  writeFile(data, path + '/src/webpack.config.js')
}

module.exports = write; 