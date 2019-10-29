const webPack = require('../writer/webpack-writer');
const babel = require('../writer/babel-writer');
const eslint = require('../writer/eslint-writer');
const gitignore = require('../writer/gitignore-writer');
const packageJson = require('../writer/package-json-writer');
const srcIndex = require('../writer/src-index-writer');
const travis = require('../writer/travis-writer');
const dependencies = require('../dependencies/dependencies-installer');
const devDependencies = require('../dependencies/dev-dependencies-installer');
const args = process.argv;
const path = process.argv[2]
const fs = require('fs');

if (path !== '.') fs.mkdirSync(path);
fs.mkdirSync(`${path}/src`);


promise.all([
  babel(path),
  eslint(path),
  gitignore(path),
  packageJson(path),
  webPack(path),
  srcIndex(path),
  travis(path),
])
.then(() => {
  devDependencies(path),
  dependencies(path)
});
