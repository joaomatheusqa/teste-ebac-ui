/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });

it('Deve completar detalhes da conta com sucesso ', () => {
    var nome = faker.person.firstName()
    var sobrenome = faker.person.lastName()
    var usuario = faker.person.prefix(nome.toLowerCase(), sobrenome.toLowerCase())
    cy.detalhesConta(nome, sobrenome, usuario)
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    
});

})