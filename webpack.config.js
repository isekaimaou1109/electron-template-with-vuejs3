const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

const base_config = {
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
}

const ui = {
  target: "web",
  entry: path.join(__dirname, "src", "ui", "run.js"),
  output: {
    path: path.join(__dirname, "build", "ui"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src", "ui"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Electron with VueJS3",
      filename: path.join(__dirname, "build", "ui", "index.html"),
      template: path.join(__dirname, "src", "ui", "index.html"),
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "Content-Security-Policy": {
          "http-equiv": "Content-Security-Policy",
          content: "default-src 'self' 'unsafe-eval' 'unsafe-inline'",
        },
      },
    }),
  ],
  ...base_config,
}

module.exports = [ui]
