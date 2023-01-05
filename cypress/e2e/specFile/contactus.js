///reference type = 'cypress'
import ContactUsPage from "../pageObectFile/pageObjects"


describe('Contact Us page functionality', () => {
    let testData
    beforeEach(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('example').then(function (dataJson) {
            testData = dataJson
            return testData
        })

    })
    // before(() => {
    //     cy.fixture('example').then(function (dataJson) {
    //         testData = dataJson
    //         return testData
    //     })
    // })
    context('Contact US page functionality', () => {
        const contactUsObject = new ContactUsPage()

        it('Contact Us page : Validate user landed on the page.', () => {
            contactUsObject.navigateToContactUsPage()
        })
        it('Positive Case : Validate Contact Us page.', () => {
            contactUsObject.navigateToContactUsPage()
            contactUsObject.getFirstName()
            contactUsObject.getLastName()
            contactUsObject.getEmail()
            contactUsObject.getMobilePhone()
            contactUsObject.selectDropDown()
            contactUsObject.writeMessage(testData.desmsg)
            contactUsObject.clickOnSubmit()
            //contactUsObject.validateSuccessMsg()
        })
        it('Negative Case : Validate Contact Us page', () => {
            const msg = " "
            contactUsObject.navigateToContactUsPage()
            contactUsObject.getFirstName()
            contactUsObject.getLastName()
            contactUsObject.getEmail()
            contactUsObject.getMobilePhone()
            contactUsObject.selectDropDown()
            contactUsObject.writeMessage(msg)
            contactUsObject.clickOnSubmit()
            contactUsObject.validateMandatoryField()
        })

    })
})

