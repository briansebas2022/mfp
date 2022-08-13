const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; //get url from prod
//filename: '[name].[contenthash].js', // [name]->filename ,contenthash->caching purpose
//publicPath: '/container/latest/' //Only Prod setup => so that webpack understand that it has to load this path before injecting it to html file

const prodConfig = {
  mode: 'production', 
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/',
},
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
