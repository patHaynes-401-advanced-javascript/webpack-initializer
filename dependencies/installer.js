const { execSync } = require('child_process');

function installer(path, arr, dev) {
  console.log('Installer Started')
  arr.forEach(dependency => execSync(`${dev ? '-D' : ''} ${dependency}`, {
    cwd: path,
    stdio: 'inherit'
  }));
    console.log('installer finished');
}

module.exports = installer;