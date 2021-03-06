var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'cross-menu.min.js' : 'cross-menu.js',
    library: 'crossMenu',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      // https://github.com/babel/babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
