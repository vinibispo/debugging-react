module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    ['@babel/plugin-transform-runtime', { regenerator: true }]
  ]
}
