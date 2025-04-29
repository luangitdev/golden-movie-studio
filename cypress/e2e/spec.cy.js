describe('US-012-Funcionalidade: Cadastro de membros', () => {
  /// <reference types="cypress" />
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.get('#signup-firstname').type('Bilbal')
    cy.get('#signup-lastname').type('Castro')
    cy.get('#signup-email').type('bilbal2@email.com')
    cy.get('#signup-phone').type('11999999988')
    cy.get('#signup-password').type('Teste@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})