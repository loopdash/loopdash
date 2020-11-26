const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// If you want to use BrowserSync you'll need to update the config below with the local URL
//const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const autoprefixer = require('autoprefixer');
module.exports = {
  context: __dirname,
  entry: {
    frontend: ['./scss/style.scss'],
    //frontend: ['./js/src/app.js', './scss/style.scss'],
    //customizer: './js/customizer.js'
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js'
  },
  mode: 'development',
  //devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
          test: /\.css$/i,
          use: [
              'style-loader',
              'css-loader',
              {
                  loader: 'postcss-loader',
                  options: {
                      postcssOptions: {
                          plugins: [
                              [
                                  'postcss-preset-env',
                                  {
                                    // options
                                    plugins: [
                                      require('autoprefixer')
                                    ]
                                  }
                              ]
                          ]
                      }
                  }
              }
          ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'dist/style.css'
    }),
    //new BrowserSyncPlugin({
    //  files: '**/*.php',
    //  proxy: 'http://one.wordpress.test'
    //})
  ],
  optimization: {
    minimizer: [
        //new UglifyJsPlugin({cache: true, parallel: true}), 
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: false
                        }
                    }
                ]
            }
        })
    ]
  }
};