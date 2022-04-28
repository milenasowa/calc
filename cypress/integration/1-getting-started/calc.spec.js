context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })

    it('.calc-display-main - contain 0', () => {
        // https://on.cypress.io/type
        cy.get('.calc-display-main').contains('0')
    })

    it('check is calcule 1 + 2 = 3', () => {
        cy.get('.calc-display-main').contains('0')

        cy.get('#bt-1').click()
        cy.get('#bt-plus').click()
        cy.get('#bt-2').click()
        cy.get('#bt-sum').click()

        cy.get('.calc-display-main').contains('3')
    })
    it('check is clear value', () => {
        // https://on.cypress.io/clear
        cy.get('#bt-1').click()
        cy.get('#bt-plus').click()
        cy.get('#bt-2').click()
        cy.get('#bt-sum').click()

        cy.get('.calc-display-main').contains('3')
        cy.get('#bt-ce').click()
        cy.get('.calc-display-main').contains('0')

      })
      it('check is properly value', () => {
        // https://on.cypress.io/clear
        cy.get('#bt-8').click()
        cy.get('#bt-plus').click()
        cy.get('#bt-4').click()
        cy.get('#bt-sum').click()
        cy.get('.calc-display-main').contains('12')
        cy.get('#bt-minus').click()
        cy.get('#bt-5').click()
        cy.get('.calc-display-main').contains('7')
        
    

      })

})