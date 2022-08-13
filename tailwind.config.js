/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/*.js",
  ],
  theme: {
    extend: {},
  },
  important: "#w1",
  plugins: [],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
