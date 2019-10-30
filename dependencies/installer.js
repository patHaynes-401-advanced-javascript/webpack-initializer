const { execSync } = require('child_process');

function installer(path, arr, dev) {
  console.log('Installer Started')
  execSync(`npm i ${dev ? '-D' : ''} ${arr.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('installer finished');
}

module.exports = installer;