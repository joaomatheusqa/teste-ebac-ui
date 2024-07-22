/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {        
        cy.get('#username').type('testeebac@ebac.com.br')
        cy.get('#password').type('123teste@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, testeebac (não é testeebac? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {        
        cy.get('#username').type('errotesteebac@ebac.com.br')
        cy.get('#password').type('123teste@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')        
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {        
        cy.get('#username').type('testeebac@ebac.com.br')
        cy.get('#password').type('erro123teste@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida')        
    })
})