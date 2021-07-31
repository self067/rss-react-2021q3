const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

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

const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
  };
  if (preset) {
    if (Array.isArray(preset)) opts.presets.push(...preset);
    else opts.presets.push(preset);
  }

  return opts;
};

// const jsLoaders = () => {
//   const loaders = {
//     loader: ["babel-loader"],
//     options: babelOptions()
//   };
//   if( isDev) {
//     loaders.loader.push('eslint-loader');
//   }
//   return loaders;
// }

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: !isDev,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
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
    main: ['@babel/polyfill', './index.tsx'],
    // analytics: './analytics.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.png', '.jpg'],
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      //     '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: ['...', new CssMinimizerPlugin()],
  },

  devtool: 'source-map',

  // devServer: {
  //   port: 4200,
  //   hot: isDev
  // },
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
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        // use: ['file-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,

        use: 'ts-loader',

        // use: {
        //   loader: 'babel-loader',
        //   options: babelOptions('@babel/preset-typescript'),
        // },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(['@babel/preset-typescript', '@babel/preset-react']),
        },
      },
    ],
  },
};
