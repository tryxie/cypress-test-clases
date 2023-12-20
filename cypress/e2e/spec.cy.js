describe('Pruebas heroku app', () => {
  it('login con usario y contrasena validos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("You logged into a secure area")
  })
  it('login con usario invalido y contrasena validos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("123456")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
  })
  it('login con usario valido y contrasena invalidos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123456")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
  })
  it('login con usario invalido y contrasena invalidos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("to7891011")
    cy.get('#password').type("123456")
    cy.get('.fa').click()
    cy.get('#flash').contains(" Your username is invalid!")
  })
})
