  import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMdHash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname,'src/vendor'),
    main: path.resolve(__dirname,'src/index')
},
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    //Generic an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash.css'),
    //Hash file using MD5 so that their namrs changes when the content changes.
    new WebpackMdHash(),
    
    //Use CommonsChunkPLugin to create a seprate bundle
    //of vendor libraries so that they are chached seprately
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    //Create HTML file that includes references to build  jS.
    new HtmlWebpackPlugin({
      template:'src/index.html',
      minify:{
        removeComments:true,
        collapsewhitespace:true,
        removeRedundantAttributes:true,
        useShortDocktype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      inject:true//inject necessary script tags
    }),
    //Elimate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    //minify js
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}