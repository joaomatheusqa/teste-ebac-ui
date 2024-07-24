/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um preoduto da lista', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProdutoLista(produto)
        cy.get('.product_title').should('contain', produto)
        
    });

    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
        
    });

    it('Deve visitar a página de produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});