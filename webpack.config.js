module.exports = {
  entry: './site.jsx',
  output: {
    filename:'bundle.js',
    path: 'public'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module:{
    loaders:[{
      test:/\.jsx?/,
      exclude:/node_modules/,
      loader:'babel',
      query:{
        presets: ['react', 'es2015']
      }
    }]
  }
};
