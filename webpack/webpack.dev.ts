import { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import { join } from 'path'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
const config: Configuration = {
  mode: 'development',
  devServer: {
    static: join(__dirname, '..', 'public'),
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  output: {
    publicPath: '/'
  }
}

export default config
