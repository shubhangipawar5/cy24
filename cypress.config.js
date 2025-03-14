const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      
      require('cypress-grep/src/plugin')(config)
      on("file:preprocessor", cucumber());
      
      return config
    },
  },
});