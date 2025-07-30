describe('Lamborghini', () => {
  
  it('Lamborghini - Tour', () => {

    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.wait(2000)
    cy.get('[aria-label="Open menu"]').click()
    cy.get('.lev-2-toggler').eq(0).click()
    cy.get('.lev-3-toggler').eq(2).click()
    cy.get('[href="/en-en/models/urus"]').click()
    cy.wait(1000)
    cy.get('.btn-accent').scrollIntoView()
    cy.get('.btn-accent').click()
    cy.wait(1000) 

    cy.origin('https://configurator.lamborghini.com/', () => {
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click()  
    cy.get('[aria-label="Start configuration"]').click()
    cy.wait(3000)
    cy.get('[aria-label="Hide menu"]').click()
    for (let i = 0; i < 9; i++) { 
    cy.get('[aria-label="Next"]').click()
    cy.wait(1000)

    }
    
    cy.get('[aria-label="Setting menu"]').click()
    cy.get("[lccariahidden='']").eq(0).click({force : true})
    cy.get('.option-button').eq(1).click()
    cy.get('.carline-card').click()
    cy.get('.button-container > .dark-filled-button').click()
    cy.wait(5000)
    for (let i = 0; i < 10; i++) { 
    cy.get('[aria-label="Next"]').click()
    cy.wait(1000)
     
    }

    cy.get('[aria-label="Setting menu"]').click()
    cy.get("[lccariahidden='']").eq(0).click({force : true})
    cy.get('.option-button').eq(0).click()
    cy.get('.carline-card').click()
    cy.get('.button-container > .dark-filled-button').click()
    cy.wait(5000)
    for (let i = 0; i < 10; i++) { 
    cy.get('[aria-label="Next"]').click()
    cy.wait(1000)

    }
  
    })
   
  })

})

