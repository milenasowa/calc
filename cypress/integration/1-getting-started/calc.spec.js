context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/calc/index.html')
    })

    it('.calc-display-main - contain 0', () => {
        // https://on.cypress.io/type
        cy.get('.calc-display-main').contains('0')
    })

})