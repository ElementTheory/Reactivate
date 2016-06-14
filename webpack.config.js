/*  Get paths to asset directories
******************************************/
const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  html: path.join(__dirname, 'app/assets/html-template'),
  css: path.join(__dirname, 'app/assets/css'),
  scss: path.join(__dirname, 'app/assets/scss'),
  compass: path.join(__dirname, 'node_modules/compass-mixins/lib'),
  breakpoint: path.join(__dirname, 'node_modules/breakpoint-sass/stylesheets')
};

/*  Plugins, see package.json
******************************************/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
      filename: filenameStructure,
      // This is used for require.ensure. The setup
      // will work without but this is useful to set.
      chunkFilename: '[name]-[chunkhash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        title: 'Reactivate',
        template: PATHS.html + '/index.ejs'
      })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss']
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
      common('prod'), { devtool: 'source-map' },
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react', 'react-dom']
      }),
      parts.extractCSS(PATHS, ExtractTextPlugin),
      parts.babel(PATHS),
      parts.minify(),
      parts.clean(PATHS.build, CleanWebpackPlugin)
    );
    break;

  default:
    config = merge(
      common(), { devtool: 'eval-source-map' },
      parts.babel(PATHS),
      parts.setupSASS(PATHS),
      parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

module.exports = config;
