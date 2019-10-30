const installer = require('./installer');

const devDependencies = [
  '@babel/core',
  '@babel/plugin-proposal-class-properties',
  '@babel/preset-env',
  '@babel/preset-react',
  'autoprefixer',
  'babel-eslint',
  'babel-loader',
  'clean-webpack-plugin',
  'css-loader',
  'enzyme',
  'enzyme-adapter-react-16',
  'enzyme-to-json',
  'eslint',
  'eslint-plugin-babel',
  'eslint-plugin-react',
  'file-loader',
  'html-webpack-plugin',
  'identity-obj-proxy',
  'jest',
  'postcss-import',
  'postcss-loader',
  'postcss-nested',
  'postcss-simple-vars',
  'prop-types',
  'style-loader',
  'url-loader',
  'webpack',
  'webpack-cli',
  'webpack-dev-server'
];

function installDependencies(path) {
  installer(path, devDependencies, true);
}

module.exports = installDependencies; 