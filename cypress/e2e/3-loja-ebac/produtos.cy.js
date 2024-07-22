/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('Deve selecionar um preoduto da lista', () => {

        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(2)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()

            cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
        
    });
});