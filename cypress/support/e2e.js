// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require("@neuralegion/cypress-har-generator/commands");
const options = {
  collectTypes: ["cons:error", "cy:command"],
};
require("cypress-terminal-report/src/installLogsCollector")(options);
// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import "cypress-fail-fast";
import "cypress-mochawesome-reporter/register";
import "cypress-terminal-report/src/installLogsPrinter";
import "cypress-terminal-report/src/installLogsPrinter";
