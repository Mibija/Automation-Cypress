describe('Verify the registration functionality', () => {

    beforeEach('to visit registration page', () =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp')
    })

    it('check the create new button functionality', () =>{
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/login')
        cy.get('.form-footer > a').click();
        cy.url().should('be.equal','https://flamboyant-allen-00cf47.netlify.app/signUp')
    })

    it('check the registration with null data', () =>{
        //cy.get('.btn').click();
        //cy.get(':nth-child(1) > .error-messages > .invalid-text').should('have.text',' Name is Required ')
        //cy.get(':nth-child(2) > .error-messages > .invalid-text').should('have.text', ' Gender is Required ')
        //cy.get(':nth-child(3) > .error-messages > .invalid-text').should('have.text', ' Date of Birth is Required ')
        //cy.get(':nth-child(2) > .invalid-text').should('have.text',' Phone Number is Required ')
        //cy.get(':nth-child(5) > .error-messages > :nth-child(1)').should('have.text',' Email is Required ')
        
    })

    it('Registration  with valid data', () =>{
        cy.get('#name').type('Mibija')
        cy.get('[type="radio"]').check('Female',{force: true})
        cy.get('.mat-form-field-infix').type('2002/03/08')
        cy.get('.iti__selected-flag').click();
        cy.get('#phone').type('9841226735');
        cy.get('#email').type('test321@gmail.com');
        cy.get('.btn').click();
        cy.url().should('be.equal','https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
        cy.get(':nth-child(1) > #password').type('Test@123')
        cy.get(':nth-child(2) > #password').type('Test@123')
        cy.get('.btn').click();
    })

    it('check wrong format of password', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
        cy.get('#password').type('aaa')
        cy.get('.error-messages > :nth-child(1)').should('have.text',' Must Be atleast 8 characters! ')
        cy.get('.error-messages > :nth-child(2)').should('have.text',' Must contain atleast 1 number! ')
        cy.get('.error-messages > :nth-child(3)').should('have.text',' Must contain atleast one uppercase character! ')
        cy.get('.error-messages > :nth-child(5)').should('have.text',' Must contain atleast one special character! ')
        cy.get('.error-messages > :nth-child(4)').should('have.text',' Must contain atleast one lowercase character! ')
    })

    it('check if new password and conform password are different', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
        cy.get('#password').type('aaa')
        cy.get(':nth-child(2) > #password').type('bbb')
        cy.get(':nth-child(2) > .error-messages > .invalid-text').should('have.text',' Password Must Match ')

    })
    it('check if  if user can click "Sign Up " button  with same new and confirm password', () => {
        cy.visit('https://flamboyant-allen-00cf47.netlify.app/signUp/setPassword')
        cy.get('#password').type('aaa')
        cy.get(':nth-child(2) > #password').type('aaa')
        cy.get('.btn').click();

    })

    
})