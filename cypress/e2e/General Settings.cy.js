describe('Homescreen of planning OS', () => {
    it('General Settings Menu', () => {
  
      cy.visit('/')
      cy.get('#username').type('lagos.admin')
      cy.get('#password').type('1234')
      cy.get('.MuiButton-root').click()
      cy.contains('General Settings').click()
      //Affirming that we are on general settings page
    let url ='http://planning.uat.agric-os.com/general-settings'
    cy.url().should('equal', url) 
     
    //Headings that should be present in the app
    const headings =[
        "Select Country",
        "Default Language",
        "Time Zone",
        "Select Currency",
        "Crop Types",
        "Season",
        "Network Types",
        "Clearance Threshold",
    ]

    //Checking if the first 8 headings are present
    let i=1
    while(i<headings.length+1){
    cy.get(':nth-child('+i+') > .css-1rgwm5s-MuiTypography-root').should('contain',headings[i-1]).and('be.visible')
      i++
    }
     //selecting country
  cy.get('#companyCountry').click()
  cy.get('.MuiMenuItem-root').should('contain', 'Nigeria')
     
//  //selecting country
//  cy.get('#companyCountry').click()
//  cy.get('.MuiMenuItem-root').should('contain', 'Nigeria')

    })
  })