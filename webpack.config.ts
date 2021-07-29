import path from 'path';
import webpack, { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// import CopyPlugin from 'copy-webpack-plugin';

const webpackConfig = (env): Configuration => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
    },
  },
  output: {
    publicPath: './',
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.(ts|js)x?$/, loader: 'eslint-loader' },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './public',
              // minimize: true,
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 8192 },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: './public/assets', to: path.resolve(__dirname, 'dist') },
    //     { from: path.resolve(__dirname, 'src/favicon.ico'), to: path.resolve(__dirname, 'dist') },
    //   ],
    // }),
    new ESLintWebpackPlugin({
      failOnError: true,
      failOnWarning: true,
    }),
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
});

export default webpackConfig;
