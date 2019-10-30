const { installer } = require('./installer');

const dependencies = [
  'react',
  'react-dom'
];

function installDependencies(path) {
  installer(path, dependencies, true);
}

module.exports = installDependencies; 