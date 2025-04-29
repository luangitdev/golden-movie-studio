describe('US-012-Funcionalidade: Cadastro de membros', () => {
  /// <reference types="cypress" />
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `luan${Date.now()}@email.com`
    cy.preencherCadastro('Luan', 'Silva', email, '11999999999', 'Teste@123456')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar a mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Luan20', 'Silva', 'luan@email.com', '11999999999', 'Teste@123456')
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar a mensagem de erro com o campo email inválido', () => {
    cy.preencherCadastro('Luan', 'Silva', 'luanemail.com', '11999999999', 'Teste@123456')
    cy.get('#signup-response').should('contain', 'E-mail deve ser um email válido')
  })

  it('Deve validar a mensagem de erro com o campo senha fraca', () => {
    cy.preencherCadastro('Luan', 'Silva', 'luan@email.com', '11999999999', '123456')
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula')
  })
})