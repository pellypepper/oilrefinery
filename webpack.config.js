const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production', // Ensures optimizations like tree-shaking
  entry: './src/index.js', // Adjust to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans output directory before build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    usedExports: true, // Enables tree-shaking
    splitChunks: {
      chunks: 'all', // Extracts common dependencies into separate files
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(), // Analyzes the bundle size
  ],
};
