const path = require("path")

module.exports = {
  // 设置入口文件
  entry: "./src/main.js",
  // 设置出口文件及打包后的文件名
  output: {
    // 这里必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    // 在rules中配置loader
    rules: [
      {
        // test用于对 resource（资源）进行匹配的，通常会设置成正则表达式；
        test: /\.css$/, // 正在表达式 以css结尾的
        use: [
          "style-loader",
          // 先使用的css-loader再styel-loader（从后往前）
          {
            loader: 'css-loader',
            options: {
              // 处理过的loader再处理一次
              importLoaders: 1
            }
          },
          "postcss-loader"

          // 对一下进行抽离
          // {
          //   loader: 'postcss-loader',
          //   // postcss-loader需要使用autoprefixer插件s
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         // autoprefixer：用于给一些css样式增加浏览器前缀
          //         // require("autoprefixer"),
          //         // postcss-preset-env：增加浏览器前缀，同时将现代css装化为大部分浏览器可以执行的css，所以postcss-preset-env使用较多
          //         // postcss-preset-env 里面已经包含了 autoprefixer
          //         // require("postcss-preset-env")
          //         // 简写（但不是所有的插件都可以这样简写）
          //         "postcss-preset-env"
          //       ]
          //     }
          //   }
          // }
          // 简写 "css-loader"
        ]
        // 简写：loader: "css-loader",
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
}