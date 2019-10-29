const { installer } = require('./installer');
const fe = require('fs');

const dependencies = [
  'react',
  'react-dom'
]

function installDependencies(path) {
  installer(path, dependencies, true)
}

module.exports = installDependencies; 