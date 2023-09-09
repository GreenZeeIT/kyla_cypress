import { counter }                        from "../../support/page_object/Counter";

describe('Test Case 3 : Increment and Decrement Alternately', () => {
    
    let
    baseValue = Cypress.env("initialValueOfTheCounter");                           // Initial value of the counter
    
    it('Step 1 : Open the "Counter App"', () =>{
        
        counter.openCounter();
    });
    
    it('Step 2 : Check the initial value of the counter', () =>{
        
        counter.checkInitialValue( baseValue );                                
    });
    
    it('Step 3 : Click the decrement button', () =>{
        
        counter.decreaseCounterByOne();
    });
    
    it('Step 4 : Click the increment button', () =>{
        
        counter.increaseCounterByOne();
    });
    
    it('Step 5 : Click the decrement button', () =>{
        
        counter.decreaseCounterByOne();
    });
    
    it('Step 6 : Click the increment button', () =>{
        
        counter.increaseCounterByOne();
    });
    
    it('Step 7 : Verify that the final counter value is the same as the initial value', () =>{
        
        counter.checkInitialValue( baseValue );                             
    });
    
    

});