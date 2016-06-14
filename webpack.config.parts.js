const webpack = require('webpack');

exports.devServer = function(options){
  return {
    // /********** HMR on Windows, Ubuntu, and Vagrant **********/
    // watchOptions: {
    //   // Delay the rebuild after the first change
    //   aggregateTimeout: 300,
    //   // Poll using interval (in ms, accepts boolean too)
    //   poll: 1000
    // },
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };
}

exports.setupSASS = function(PATHS){
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
          include: PATHS.scss
        }
      ]
    },
    sassLoader: {
      includePaths: [
        PATHS.compass,
        PATHS.breakpoint
      ]
    }
  };
}

exports.extractCSS = function(PATHS, ExtractTextPlugin){
  return {
    module: {
        loaders: [
            { 
              test: /\.scss$/, 
              loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap'])
            }
        ]
    },
    sassLoader: {
      includePaths: [
        PATHS.compass,
        PATHS.breakpoint
      ]
    },
    plugins: [
      new ExtractTextPlugin("[name]-[contenthash].css")
    ]
  };
}

exports.babel = function(PATHS){
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            cacheDirectory: true,
            plugins: ['transform-runtime']
          },
          include: PATHS.app
        }
      ]
    }
  };
}

exports.minify = function(){
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}

exports.setFreeVariable = function(key, value){
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],

        // options.name modules only
        minChunks: Infinity
      })
    ]
  };
}

exports.clean = function(path, CleanWebpackPlugin) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
      })
    ]
  };
}
