
describe('Attempt to sign up till you get to the OTP page with invalid inputs', () =>
    {

            beforeEach( () => {
                cy.visit('/');
                cy.get('button[class="sc-imWYAI dLIPIJ"]').should('be.visible').click()
                cy.get('h3.Login_logintext__title__0DSKp.Login_mb_10__mYSNi').should('contain', 'Sign Up').and('be.visible')
            })
    
    it('User signs up with all the fields empty', () => {
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible')
            })
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
          });

    it('User signs up with invalid password value (8 characters) while other required and optional fields are filled correctly with valid inputs ', () => {
        cy.get('input[id="fullname"]').type('Hello Lushy')
        cy.get('input[id="businessname"]').type('Hello Enterprises')
        cy.get('input[id="businessemail"]').type('yijagv9418@inveitro.com')
        cy.get('#businessphonenumber').type('09063111201')
        cy.get('input[id="businessRegNum"]').type('NO111312')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible')
            })
        cy.get('.sc-cPiKLX').click()
        cy.get('.sc-jEACwC.biUzeP > div.MimaDropdown_select__options__xLi7K:nth-child(3)').click()
        cy.get('input[id="password"]').type('Beatrice')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.MimaInput_error__QkKJM').should('have.text', 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character')
      
    });

    it('User signs up with only the business email field filled', () => {
        cy.get('input[id="businessemail"]').type('yijagv9418@inveitro.com')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
    });

    it('User signs up with only the full name field filled', () => {
        cy.get('input[id="fullname"]').type('Hello Lushy')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(2) > div:nth-child(3)').should('have.text', 'Business name is required')
        });

    it('User signs up with only the Phone Number field filled', () => {
        cy.get('#businessphonenumber').type('09063111201')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
        });

    it('User signs up with only valid Password value field filled', () => {
        // cy.get('input[id="businessemail"]').type('yijagv9418@inveitro.com')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('input[id="password"]').type('Beatrice23@')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
        });

    it('User signs up with only single optional field filled only ( Business Registration Number (Optional))', () => {
        cy.get('input[id="businessRegNum"]').type('NO111312')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
        
    });

    it('User signs up with a business email and an optional field filled only (Business Registration Number (Optional))', () => {
        cy.get('input[id="businessemail"]').type('yijagv9418@inveitro.com')
        cy.get('input[id="businessRegNum"]').type('NO111312')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
    
    });

    it('User signs up with a business email and an optional field filled only (Twitter handle)', () => {
        cy.get('input[id="businessemail"]').type('yijagv9418@inveitro.com')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('input[id="twitterHandle"]').type('beatK')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible').click({force: true})
            })
        cy.get('div.sc-iGgWBj:nth-child(1) > div:nth-child(3)').should('have.text', 'Full Name is required')
        });

    it('User signs up with invalid website value while other required and optional fields are filled correctly with valid inputs ', () => {
        cy.get('input[id="fullname"]').type('Aveoni Lushy')
        cy.get('input[id="businessname"]').type('Lashy Enterprises')
        cy.get('input[id="businessemail"]').type('yijajav9418@inveitro.com')
        cy.get('#businessphonenumber').type('09063111101')
        cy.get('input[id="businessRegNum"]').type('NO110312')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible')
            })
        cy.get('input[id="website"]').type('devoze')
        cy.get('input[id="instagramHandle"]').type('beatK')
        cy.get('input[id="twitterHandle"]').type('beatK')
        cy.get('.sc-cPiKLX').click()
        
        cy.get('.sc-jEACwC.biUzeP > div.MimaDropdown_select__options__xLi7K:nth-child(3)').click()
        cy.get('input[id="password"]').type('Beatrice23@')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.MimaInput_error__QkKJM').should('have.text', 'Please enter a correct website address')
        });
});
            