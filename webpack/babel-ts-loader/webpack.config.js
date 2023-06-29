const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = !isProduction;

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? "static/js/[name].[contenthash:8].js" : "static/js/bundle.js",
    chunkFilename: isProduction ? "static/js/[name].[contenthash:8].chunk.js" : "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[name].[hash][ext]",
    clean: true,
  },
  target: "browserslist",
  stats: "errors-warnings",
  devtool: isProduction ? "source-map" : "eval-source-map",
  devServer: {
    open: true,
    hot: true,
    host: "localhost",
    port: 3000,
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.(js|jsx)$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
        ],
        exclude: /node_modules/,
      },
      // TypeScript
      {
        test: /\.(ts|tsx)$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [isDevelopment && "react-refresh/babel"].filter(Boolean),
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      // CSS / CSS modules
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[1]_[local]__[hash:base64:5]",
                localIdentRegExp: /([^/\\]*)\.module\.css$/i,
                exportLocalsConvention: "camelCaseOnly",
              },
            },
          },
        ],
      },
      // SCSS / SCSS modules
      {
        test: /\.scss$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: "[1]_[local]__[hash:base64:5]",
                localIdentRegExp: /([^/\\]*)\.module\.scss$/i,
                exportLocalsConvention: "camelCaseOnly",
              },
            },
          },
          "sass-loader",
        ],
      },
      // Assets
      {
        test: /\.(png|jpg|jpeg|bmp|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    // Performs type checking asynchronously
    new ForkTsCheckerWebpackPlugin(),

    // Copies static resources to the output folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public"),
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),

    // Extracts CSS into separate files
    isProduction &&
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),

    // Generates the HTML file with injected resources
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),

    // Enables Hot Module Replacement (HMR) for React
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  optimization: {
    // Only runs for production builds
    minimizer: [new CssMinimizerPlugin(), "..."],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};
