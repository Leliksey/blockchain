const path = require('path')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HandlebarsPlugin = require("handlebars-webpack-plugin")
const Handlebars = require("handlebars")
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./assets/js/entry.js', './assets/scss/app.scss' ]
  },
  module: {
    rules: [
      { 
        test: /\.scss$/, 
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],   
      },
      { 
        test: /\.(js)$/,
        use: 'babel-loader' 
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
    }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
  },
  plugins: [
    new BrowserSyncPlugin({
      files: ["build/css/app.css", "build/index.html", "build/js/app.js" ],
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['build'] }
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "assets", "templates", "*.hbs"),
      output: path.join(process.cwd(), "build", "[name].html"),
      data: require("./assets/data/project.json"),
      partials: [
        path.join(process.cwd(), "assets", "templates", "*", "*.hbs")
      ],
    }),
    // new HtmlWebpackPlugin({
    //   template: ' assets/build/"[name].html" '
    // })
  ],
  mode: process.env.NODE_ENV,
}