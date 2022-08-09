const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");

const path = require("path");

// refernce: https://github.com/dilanx/craco/blob/master/packages/craco/README.md#configuration-file

module.exports = {
  // style: {
  //   postcss: {
  //     plugins: [require("tailwindcss"), require("autoprefixer")],
  //   },
  // },
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      ...(process.env.NODE_ENV === "development"
        ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
        : []),
    ],

    configure: (config, { paths }) => {
      paths.appBuild = config.output.path = path.resolve("lib");

      // https://webpack.js.org/plugins/split-chunks-plugin
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      // https://webpack.js.org/configuration/optimization
      config.optimization.runtimeChunk = false;

      config.optimization.minimize = false;

      // CSS
      // https://webpack.js.org/plugins/mini-css-extract-plugin
      const cssPluginIdx = config.plugins
        .map((p) => p.constructor.name)
        .indexOf("MiniCssExtractPlugin");
      if (cssPluginIdx !== -1) {
        config.plugins[cssPluginIdx].options.filename = "index.css";
      }

      // https://webpack.js.org/configuration/output
      config.output.library = {};
      config.output.filename = "index.js";
      config.output.library.type = "umd";

      config.externals = {
        react: {
          commonjs: "react",
          commonjs2: "react",
          amd: "react",
          root: "React",
          module: "react",
        },
        "react-dom": {
          commonjs: "react-dom",
          commonjs2: "react-dom",
          amd: "react-dom",
          root: "ReactDOM",
          module: "react-dom",
        },
      };

      config.entry = path.resolve(__dirname, `./src/components/index.js`);

      return config;
    },
  },
};
