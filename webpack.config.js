// webpackの共通設定ファイル

// ファイルパスに関するモジュール
const path = require("path");



module.exports = {

  //webpackのモードを設定 
  mode: "development",
  // エントリーポイント(解析する開始点となるファイル)
  entry: {
    main: "./src/js/app.js",
    free: "./src/js/free.js"
  },
  /*** 出力の設定 ***/
  output: {
    // 出力先ファイルパス
    path: path.resolve(__dirname, "build/js"),
    publicPath: "/build/js/",
    // 出力ファイル名
    filename: "[name].bundle.js",
  },
  /*** ファイル変換の設定 ***/
  module: {
    rules: [
      {
        // 対象のファイル
        test: /\.js$/,
        // 対象外のファイルパス
        exclude: /node_modules/,
        // ローダーの処理対象となるファイルパス
        include: path.resolve(__dirname, 'src/js'),
        use: [
          {
            // ローダーの設定
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  /*** ローカルサーバーの設定(webpack-dev-server) ***/
  devServer: {
    contentBase: "public/",
    publicPath: "/build/js/",
    watchContentBase: true,
    open: true,
    // openPage: "public/",
  },
};
