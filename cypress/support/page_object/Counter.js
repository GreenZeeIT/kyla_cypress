export class Counter {
    
    openCounter(){
        
        cy.visit( Cypress.env("counterUrl") );
        
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .should('be.visible');
        }); 
    }
    
    checkInitialValue( baseValue ){
        
        let strBaseValue = baseValue.toString();
        
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .find("h2")
            .invoke("prop" , "innerText")
            .should("eq", strBaseValue);
        });   
    }
    
    increaseCounterByOne(){
        
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .contains("+1")
            .click( { force : true } );
        });
    }
    
    verifyIfIncreasedByOne(baseValue){
        
        baseValue ++;
        let strBaseValue = baseValue.toString();
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .find("h2")
            .invoke("prop" , "innerText")
            .should("eq", strBaseValue);
        }); 
    }
    
    decreaseCounterByOne(){
        
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .contains("-1")
            .click( { force : true } );
        });
    }
    
    verifyIfDecreasedByOne(baseValue){
        
        baseValue --;
        let strBaseValue = baseValue.toString();
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .find("h2")
            .invoke("prop" , "innerText")
            .should("eq", strBaseValue);
        }); 
    }
    
    resetCounter(){
        
        cy.get("div[id='app']").then(($mainContainer) =>{
            cy.wrap($mainContainer)
            .contains("Reset")
            .click( { force : true } );
        });
    }
    
}

export const counter = new Counter();