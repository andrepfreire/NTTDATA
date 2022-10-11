const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,
  reporter: "mochawesome",

  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://trello.com",
    excludeSpecPattern: "*.json",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
