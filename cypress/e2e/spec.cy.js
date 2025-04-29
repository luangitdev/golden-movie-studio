describe('US-012-Funcionalidade: Cadastro de membros', () => {
  /// <reference types="cypress" />
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `luan${Date.now()}@email.com`
    cy.get('#signup-firstname').type('Barcelona')
    cy.get('#signup-lastname').type('Castro')
    cy.get('#signup-email').type(email)
    cy.get('#signup-phone').type('11999999977')
    cy.get('#signup-password').type('Teste@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})