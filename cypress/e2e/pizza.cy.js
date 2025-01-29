

describe('Form Submission', () => {


    it('Should fill out the form with required inputs and submit successfully', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="btn-aciktim"]').click();
        cy.url().should('include', 'OrderPage')

        cy.get('[data-cy="siparis-btn"]').should('be.disabled');


        cy.get('[data-cy="large-size"]').check();
        cy.get('[data-cy="thickness-input"]').select('Klasik Hamur')
        cy.get('[data-cy="additional-input-Sosis"]').check();
        cy.get('[data-cy="additional-input-Soğan"]').check();
        cy.get('[data-cy="additional-input-Biber"]').check();
        cy.get('[data-cy="additional-input-Ananas"]').check();
        cy.get('[data-cy="additional-input-Jalepeno"]').check();

        cy.get('[data-cy="adSoyad-input"]').type('mustafa doganguzel');

        cy.get('[data-cy="siparis-btn"]').should('be.visible');
        cy.get('[data-cy="siparis-btn"]').click();

        cy.url().should('include', 'Success')

    })


})
