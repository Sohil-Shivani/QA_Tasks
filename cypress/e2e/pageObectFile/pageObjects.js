export default class ContactUsPage {
    navigateToContactUsPage() {
        cy.get('a:contains("Say Hello")').click()
    }
    getFirstName() {
        cy.get('input[name="firstname"]').type('First Name')
    }
    getLastName() {
        cy.get('input[name="lastname"]').type('Last Name')
    }
    getEmail(tempemail) {
        cy.get('input[name="email"]').type('gmai@gmail.com')
    }
    getMobilePhone() {
        cy.get('input[name="mobilephone"]').type('0123456789')
    }
    selectDropDown() {
        cy.get('select[name="how_did_you_hear_about_us_"]').select(1)
    }
    writeMessage(tempmsg) {
        cy.get('textarea[name="message"]').type(tempmsg)
    }
    clickOnSubmit() {
        cy.get('input[type="submit"]').click()
    }
    validateSuccessMsg() {
        cy.get('.submitted-message > p').contains("Thank you for your message. We'll get back to you as soon as possible.")
    }
    validateMandatoryField() {
        cy.get('.hs-error-msg').should('contain', 'Please complete this required field')
    }

}