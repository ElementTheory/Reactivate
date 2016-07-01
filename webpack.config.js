/*  Get paths to asset directories
******************************************/
const path = require('path');
var PATHS = {
  // Input / Output Folders
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),

  // Static Assets
  assets: '/assets',
  css: '/assets/css',
  font: '/assets/font',
  img: '/assets/img',
  html: '/assets/html-template',
  json: '/assets/json',
  scss: '/assets/scss', // HTML Template Path

  // Direct link to Compass and Breakpoint (workaround for sass-loader)
  compass: path.join(__dirname, '/node_modules/compass-mixins/lib'),
  breakpoint: path.join(__dirname, '/node_modules/breakpoint-sass/stylesheets'),

  // Establish Host and Port if none exist
  host: process.env.HOST === undefined ? 'localhost' : process.env.HOST,
  port: process.env.PORT === undefined ? '8080' : process.env.PORT
};

/*  Plugins, see package.json
******************************************/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageLoaderPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*  Tools/Helpers, see package.json
******************************************/
const merge = require('webpack-merge');


/*  Config Parts, custom code that holds 
/*  different webpack configurations
******************************************/
const parts = require('./webpack.config.parts');

const common = function(status){

  var filenameStructure = '[name].js';

  if(status === 'prod'){
    filenameStructure = '[name]-[chunkhash].js';
  }

  return {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: filenameStructure
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        title: 'Reactivate',
        template: PATHS.app + PATHS.html + '/index.ejs'
      })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
    }
  };
}

var config;

/*  Detect how npm is run and branch based 
/*  on that. Look at the "scripts"  
/*  parameter in package.json
******************************************/
switch(process.env.npm_lifecycle_event){
  case 'build':
  case 'stats':
    config = merge(
      common('prod'), // { devtool: 'source-map' },
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
      parts.extractCSS(PATHS, ExtractTextPlugin),
      parts.babel(PATHS),
      parts.minify(),
      parts.clean(PATHS.build, CleanWebpackPlugin),
      parts.copyStaticAssets(PATHS, CopyWebpackPlugin)
    );
    break;

  default:
    config = merge(
      common(), { devtool: 'eval-source-map' },
      parts.runSASS(PATHS),
      parts.babel(PATHS),
      parts.devServer(PATHS)
    );
}

module.exports = config;
