const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const PRODUCTION_DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${PRODUCTION_DOMAIN}/marketing/latest/remoteEntry.js`,
        auth: `auth@${PRODUCTION_DOMAIN}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${PRODUCTION_DOMAIN}/dashboard/latest/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
