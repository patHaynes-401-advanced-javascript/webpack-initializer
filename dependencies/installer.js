function installer(path, arr, dev) {
  const { execSync } = require('child_process');
  console.log('Installer Started');
  execSync(`npm i ${dev ? '-D' : ''} ${arr.join(' ')}`, {
    cwd: path,
    stdio: 'inherit'
  });
  console.log('installer finished');
}

module.exports = installer;