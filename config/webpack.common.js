import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: {
    app: "./src/modules/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(import.meta.dirname, "../dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "services.html",
      template: "./src/services.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "brows.html",
      template: "./src/brows.html",
    }),
    new HtmlWebpackPlugin({
      filename: "wax.html",
      template: "./src/wax.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [{ tag: "img", attribute: "src", type: "src" }],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff2?|woff?|ttf|otf|eot)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
};
