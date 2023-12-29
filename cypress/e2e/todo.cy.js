describe('Nueva tarea todo', () => {
    it('Search alphanumerical caracter', () => {
    cy.visit('https://todomvc.com/examples/react/#/')
    cy.get('.new-todo').type ("bonjour 123{enter}")

    })
    it('Search alphanumerical caracter', () => {
        cy.visit('https://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type ("bonjour{enter}")
        cy.get('.toggle').click ()
    
        })
})