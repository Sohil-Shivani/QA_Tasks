const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/e2e/specFile/*.js'
  },
  env:{
    url: 'https://www.founderandlightning.com/'
  },
  "chromeWebSecurity": false,
});
