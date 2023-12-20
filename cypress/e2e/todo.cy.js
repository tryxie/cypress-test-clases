describe('Nueva tarea cypress', () => {
    it('login con usario invalido y contrasena validos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("123456")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Username is wrong")
  })
    })
    