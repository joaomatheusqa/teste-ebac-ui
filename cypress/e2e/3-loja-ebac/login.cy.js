/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
        cy.get('#username').type('testeebac@ebac.com.br')
        cy.get('#password').type('123teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.form-row-first > label').should('contain' , 'First name *')
    })
})