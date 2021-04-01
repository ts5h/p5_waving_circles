// Reference
// https://github.com/mitsuyacider/p5-starter/blob/master/webpack.config.js
// https://qiita.com/mitsuya_bauhaus/items/c31b146fb9649469f8d1
// https://qiita.com/fuubit/items/02a78744196e17869548
// https://qiita.com/KZ-taran/items/b4e5a5c20d1b1e02ed23

const MODE = 'development';
const enabledSourceMap = MODE === 'development';

const webpack = require('webpack');
const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || '/';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH,
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  mode: MODE,
  devtool: 'source-map',

  // Set Loaders
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, 'css'),
              esModule: false,
            }
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: enabledSourceMap,

              // Set 2 for processing Sass+PostCSS
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,

              // Do not include the url() method in CSS
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    grid: true,
                  }),
                  require('css-declaration-sorter')({
                    order: 'concentric-css',
                  })
                ]
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // To resolve .ts file on import statements
    extensions: [
      '.ts', '.tsx',
      '.js', '.jsx'
    ]
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      inject: 'head'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['dist']
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCssAssetsPlugin()
    ]
  }
}