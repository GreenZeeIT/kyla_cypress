import { counter }                        from "../../support/page_object/Counter";

describe('Test Case 1 : Increment the Counter', () => {
    
    let
    baseValue = Cypress.env("initialValueOfTheCounter");                           // Initial value of the counter
    
    it('Step 1 : Open the "Counter App"', () =>{
        
        counter.openCounter();
    });
    
    it('Step 2 : Check the initial value of the counter', () =>{
        
        counter.checkInitialValue( baseValue );                
    });
    
    it('Step 3 : Click the increment button', () =>{
        
        counter.increaseCounterByOne();
    });
    
    it('Step 4 : Verify that the counter value has increased by one', () =>{
    
        counter.verifyIfIncreasedByOne(baseValue);
    });
    
    

});