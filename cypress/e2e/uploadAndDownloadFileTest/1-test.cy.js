
describe('Automate the process of signup on the test app till you get to the OTP page', () =>
    {
        beforeEach( () => {
            cy.visit('/');
        })

    it.only('Download File Using Cypress', () => {
        cy.get('a[href*="/download-file-demo"]').click()
        cy.downloadFile('https://www.lambdatest.com/resources/images/LambdaTest.pdf', 'cypress/downloads', 'LambdaTest.pdf')
        
        cy.readFile('cypress/downloads/LambdaTest.pdf').should('exist');

    });

    it("Upload a file using Cypress Method", () => {
        cy.get('a[href*="/upload-file-demo"').click()
        cy.get('input[type="file"]').selectFile('example.pdf')
        cy.contains('File Successfully Uploaded').should('be.visible')
    })

     it("Upload a file using Cypress Plugin", () => {
        cy.get('a[href*="/upload-file-demo"').click()
        cy.get('input[type="file"]').attachFile('examples.pdf')
        cy.contains('File Successfully Uploaded').should('be.visible')
    })
    
});
            