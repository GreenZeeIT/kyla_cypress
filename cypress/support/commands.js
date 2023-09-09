// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";

Cypress.Commands.add("exist", (selector) => {
  cy.get("body")
    .should("exist")
    .then(($body) => {
      return new Cypress.Promise((resolve, reject) => {
        if ($body.find(selector).length > 0 && $body.find(selector).is(":visible")) {
          console.log("cy.exist() - Matching element found in DOM!");
          resolve(true);
        } else {
          console.log("cy.exist() - Element did not exist!");
          resolve(false);
        }
      });
    });
});
