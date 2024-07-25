/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {        
        cy.get('#username').type('testeebac@ebac.com.br')
        cy.get('#password').type('123teste@')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
    });
        it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
       cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario , {log: false})
            cy.get('#password').type(dados.senha , {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
       })

    });

    it('Deve fazer login com sucesso - usando comandos customizados', () => {
        cy.login(perfil.usuario,perfil.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(3)').should('contain' , 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
        
    });

})