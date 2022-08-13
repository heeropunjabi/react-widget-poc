const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");

const path = require("path");

console.log(process.env.NODE_ENV);
console.log(process.env.REACT_APP_TYPE, "REACT_APP_TYPE");

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

// when you want to run bundle analyser tool
// module.exports = {
//   // style: {
//   //   postcss: {
//   //     plugins: [require("tailwindcss"), require("autoprefixer")],
//   //   },
//   // },
//   webpack: {
//     plugins: [
//       new WebpackBar({ profile: true }),
//       ...(process.env.NODE_ENV === "development"
//         ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
//         : []),
//     ],
//   },
// };
if (process.env.NODE_ENV === "development") {
  return;
}

// refernce: https://github.com/dilanx/craco/blob/master/packages/craco/README.md#configuration-file

module.exports = {
  // style: {
  //   postcss: {
  //     plugins: [require("tailwindcss"), require("autoprefixer")],
  //   },
  // },
  webpack: {
    plugins: [new WebpackBar({ profile: true })],

    configure: (config, { paths }) => {
      if (process.env.REACT_APP_TYPE === "lib") {
        paths.appBuild = config.output.path = path.resolve("lib");
      } else {
        paths.appBuild = config.output.path = path.resolve("widget");
      }

      // https://webpack.js.org/plugins/split-chunks-plugin
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
      // https://webpack.js.org/configuration/optimization
      config.optimization.runtimeChunk = false;

      config.optimization.minimize = true;

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
      config.output.clean = true;
      if (process.env.REACT_APP_TYPE === "lib") {
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
      }

      if (process.env.REACT_APP_TYPE === "lib") {
        config.entry = path.resolve(__dirname, `./src/components/index.js`);
      } else {
        config.entry = path.resolve(__dirname, `./src/index.js`);
      }

      return config;
    },
  },
};
