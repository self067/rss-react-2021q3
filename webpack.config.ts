const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const cssLoaders = extr => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    'css-loader',
  ];
  if (extr !== '') loaders.push(extr);
  return loaders;
};

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      failOnError: true,
    }),
    new HTMLWebpackPlugin({
      template: '../public/index.html',
      minify: !isDev,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/.htaccess'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'public/_redirects'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'public/images/'),
          to: path.resolve(__dirname, 'dist/public/images'),
        },
        { from: 'assets/images', to: 'images' },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ];
  // if( !isDev) base.push( new WebpackBundleAnalyzer())
  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // mode: 'development',
  entry: {
    main: ['./index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'store': path.resolve(__dirname, './src/store'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: ['...', new CssMinimizerPlugin()],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    open: true,
    host: 'localhost',
  },
  devtool: 'source-map',

  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(''),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },

      {
        test: /\.svg/,
        type: 'asset/resource',
        // use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
};
