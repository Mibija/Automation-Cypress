describe('Verify the registration functionality', () => {

    beforeEach('to visit registration page', () =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
    })

    

    it('to register', () =>{
        cy.get('#name').type('Mibija') 
        cy.wait(2000)
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click();
        cy.wait(2000)
        cy.get('.mat-form-field-infix').type('1999-01-01');
        cy.get('.iti__selected-flag.dropdown-toggle').click()
        cy.get('.iti__country-list').should('be.visible');
        cy.get('.iti__country-list').contains('Nepal').click();
        cy.wait(2000)
        cy.get('#phone').type('9841226735');
        cy.wait(2000)
        cy.get('#email').type('test321@gmail.com');
        cy.wait(2000)
        cy.get('.btn').click();

        cy.get(':nth-child(1) > #password').type('Test@123')
        cy.get(':nth-child(2) > #password').type('Test@123')
        cy.get('.btn').click();

    })

})