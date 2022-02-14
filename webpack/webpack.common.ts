import HtmlWebpackPlugin from 'html-webpack-plugin'
import { join } from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { EnvironmentPlugin, Configuration } from 'webpack'
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

const config: Configuration = {
  entry: join(__dirname, '..', 'src', 'index.tsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '..', 'public', 'index.html'),
      title: 'Sopha',
      hash: true
    }),
    new EnvironmentPlugin(['NODE_ENV', 'SERVER_ENV']),
    new ForkTsCheckerWebpackPlugin({
      async: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg)$/,

        type: 'asset/resource'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,

        type: 'asset/resource'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,

        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    plugins: [new TsConfigPathsPlugin({ extensions: ['.ts', '.tsx', '.js', '.jsx'] })],

    extensions: [
      '.js',
      '.ts',
      '.tsx',
      '.jsx',
      '.css',
      '.jpg',
      '.png',
      '.ttf',
      '.svg',
      '.woff',
      '.eot'
    ],

    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify')
    }
  }
}

export default config
