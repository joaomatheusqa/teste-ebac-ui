/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('Deve selecionar um produto da lista', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProdutoLista(produto)
        cy.get('.product_title').should('contain', produto)
        
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
        
    });

    it('Deve visitar a página de produto', () => {
        produtosPage.visitarProduto('argus all weather tank')
        cy.get('.product_title').should('contain', 'Argus All-Weather Tank')
        
    });

    it.only('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('argus all weather tan')
        produtosPage.addProdutoCarrinho('M', 'Gray', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
        
    });

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)

                cy.get('.product_title').should('contain', dados[1].nomeProduto)
            
        })


    });
});