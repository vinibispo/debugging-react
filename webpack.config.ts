import commonConfig from './webpack/webpack.common';
import devConfig from './webpack/webpack.dev';
import prodConfig from './webpack/webpack.prod';
import { merge } from 'webpack-merge';

module.exports = () => {
  if (
    process.env.NODE_ENV === 'staging' ||
    process.env.NODE_ENV === 'production'
  ) {
    return merge(commonConfig, prodConfig);
  }
  return merge(commonConfig, devConfig);
};
