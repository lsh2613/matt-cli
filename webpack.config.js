const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      '@': path.resolve(__dirname, './src/'), // ./ 경로를 @으로 설정
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        loader: 'source-map',
      },
    ],
  },
}
