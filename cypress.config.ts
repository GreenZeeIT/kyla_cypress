const { defineConfig } = require("cypress");
const { install } = require("@neuralegion/cypress-har-generator");

module.exports = defineConfig({
  videoCompression: 4,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    inlineAssets: true,
    reportPageTitle: "Kyla report",
    embeddedScreenshots: true,
    ignoreVideos: false,
    quiet: false,
    saveAllAttempts: true,
    debug: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        outputRoot: "cypress/logs/",
        outputTarget: {
          "cypresslog.txt": "txt",
          "cypresslog.json": "json",
        },
        logToFilesOnAfterRun: true,
        printLogsToConsole: "never",
        printLogsToFile: "onFail",
      };
      install(on);
      require("cypress-fail-fast/plugin")(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      require("cypress-terminal-report/src/installLogsPrinter")(on, options);
    },
    specPattern: [
      "cypress/e2e/automated_cases/Test_Case_1_Increment_the_Counter.cy.js",
      "cypress/e2e/automated_cases/Test_Case_2_Decrement_the_Counter.cy.js",
      "cypress/e2e/automated_cases/Test_Case_3_Increment_and_Decrement_Alternately.cy.js",
      "cypress/e2e/automated_cases/Test_Case_4_Reset_the_Counter.cy.js"

    ],
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  numTestsKeptInMemory: 30,
  viewportHeight: 1080,
  viewportWidth: 1920,
});
