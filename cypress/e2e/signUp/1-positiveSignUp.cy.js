
describe('Automate the process of signup on the test app till you get to the OTP page', () =>
    {
        beforeEach( () => {
            cy.visit('/');
            cy.get('button[class="sc-imWYAI dLIPIJ"]').should('be.visible').click()
            cy.get('h3.Login_logintext__title__0DSKp.Login_mb_10__mYSNi').should('contain', 'Sign Up').and('be.visible')
        })

    it('User signs up with valid input, with no referral code and all fields (required and optional) filled', () => {
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
        cy.get('input[id="website"]').type('https://www.dev.oze.shop/myfood')
        cy.get('input[id="instagramHandle"]').type('beatK')
        cy.get('input[id="twitterHandle"]').type('beatK')
        cy.get('.sc-cPiKLX').click()
        
        cy.get('.sc-jEACwC.biUzeP > div.MimaDropdown_select__options__xLi7K:nth-child(3)').click()
        cy.get('input[id="password"]').type('Beatrice23@')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('p[class="Onboarding_text__bold__Z-e69 Onboarding_text__color__primary__ilPVg"]').should('have.text', 'Please enter the code below')
    });

    it('User signs up with all mandatory and single optional field filled only ( Business Registration Number (Optional))', () => {
        cy.get('input[id="fullname"]').type('Hyllo Lushy')
        cy.get('input[id="businessname"]').type('Heyllo Enterprises')
        cy.get('input[id="businessemail"]').type('yijahv9418@inveitro.com')
        cy.get('#businessphonenumber').type('09063111601')
        cy.get('input[id="businessRegNum"]').type('NO111012')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible')
            })
        cy.get('.sc-cPiKLX').click()
        cy.get('.sc-jEACwC.biUzeP > div.MimaDropdown_select__options__xLi7K:nth-child(3)').click()
        cy.get('input[id="password"]').type('Beatrice23@')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('p[class="Onboarding_text__bold__Z-e69 Onboarding_text__color__primary__ilPVg"]').should('have.text', 'Please enter the code below')
       });

    it('User signs up with no optional fields filled', () => {
        cy.get('input[id="fullname"]').type('Hallo Lushy')
        cy.get('input[id="businessname"]').type('Halloy Enterprises')
        cy.get('input[id="businessemail"]').type('yijygv9428@inveitro.com')
        cy.get('#businessphonenumber').type('09063191201')
        // cy.get('input[id="businessRegNum"]').type('NO111312')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('.Login_rightside__back__W5kq5')
            .within(() => {
                cy.get('svg:nth-child(1) > path:nth-child(1)').should('exist')
                .and('be.visible')
            })
        cy.get('.sc-cPiKLX').click()
        cy.get('.sc-jEACwC.biUzeP > div.MimaDropdown_select__options__xLi7K:nth-child(3)').click()
        cy.get('input[id="password"]').type('Beatrice23@')
        cy.get('button[class="sc-imWYAI fDRXF"]').click()
        cy.get('p[class="Onboarding_text__bold__Z-e69 Onboarding_text__color__primary__ilPVg"]').should('have.text', 'Please enter the code below')
      
    });
});
            