const path = require('path');
const htmlWebPlugin=require("html-webpack-plugin");
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
    open:true,
    port:3000,
    contentBase:"src",
    hot:true
  }
  ,
  module: {
    rules: [
     { test:/\.css$/,use:["style-loader",'css-loader'],},
     { test:/\.scss$/,use:["style-loader",'css-loader','sass-loader'],},
      {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:["url-loader"],},
      {test:/\.(ttf|eot|svg|woff|woff2)$/,use:["url-loader"],},
      {test:/\.js$/,use:"babel-loader",exclude:/node_modules/,},
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  plugins:[
    new htmlWebPlugin({
      template:path.join(__dirname,"./src/index.html"),
      filename:"index.html"
    })
  ],
  resolve:{
    alias:{"vue$":"vue/dist/vue.js"
  }
  }
};