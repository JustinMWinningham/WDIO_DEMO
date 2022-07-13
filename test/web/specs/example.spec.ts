import Homepage from '../pageobjects/home.page';
import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

// I prefer this way of doing things, but for some reason this throws errors if i do
// Not going to loose sleep on it either way
//const Homepage = require('../pageobjects/home.page')
//const LoginPage = require('../pageobjects/login.page')
//const SecurePage = require('../pageobjects/secure.page')


describe('My Login application', () => {
    beforeEach(() => {
        // trying to make browser calls during asyncronous execution is a bad idea
        browser.url('/');
    })

    it('should validate error thrown when passing invalid credentials', async () => {

        await Homepage.loginButton.click();
        await LoginPage.login('jwinningham', 'boguspassword');
        await LoginPage.errorMsBox.waitForClickable({timeout: 3000});
        const badPwText = "The Email and Password don't match our records, please check them and try again.";
        expect(await LoginPage.errorMsBox.getText()).toEqual(badPwText);
    })

    it('should visit the shipper page without having to authenticate', async () => {

        await Homepage.getStartedButton.moveTo();
        await Homepage.getStartedMenuButton(1).click();

        var newurl = 'https://www.drayalliance.com/home/shippers/demo';
        expect(browser).toHaveUrlContaining(newurl);
    })
});