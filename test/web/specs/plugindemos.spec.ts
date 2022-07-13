import allureReporter from '@wdio/allure-reporter'
import homepage from '../pageobjects/home.page';
import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    beforeEach(() => {
        // no await prefix in before/after hooks - not async
        // Browser object default page url is held in the conf file - so this can result in varied behavior if you run a different conf file
        browser.url('/');
    })
    it('should login with valid credentials', async () => {

        // Since the string data here is unique to this test, its ok for it to live here
        allureReporter.addLabel("TestingLabel", "valuuuuue");
        allureReporter.addFeature("POCFeature");
        allureReporter.addStory("GROW-1234");
        allureReporter.addIssue("tissueissue");
        allureReporter.addStep("Step0");
        allureReporter.addDescription("Just a description", 'text');
        
        await homepage.loginButton.click();
        // We should abstract this into a helper class - this is a fragile command that will cause a breakage if the password updates
        // if we use this account in many places we would have to update the username/password in many places to get the tests working again - thats no good
        await LoginPage.login('jwinningham', 'BadPratices');
        allureReporter.addStep("Step2");
        await LoginPage.errorMsBox.waitForClickable({timeout: 3000});
        // This could arguably be a canidate for encapsulation - if this error is all over the place then we should move it to a statics class
        // but since its unlikely that it will be used ANYWHERE else in the entire testing framework, its ok to leave it here for now
        const badPwText = "The Email and Password don't match our records, please check them and try again.";
        expect(await LoginPage.errorMsBox.getText()).toEqual(badPwText); // pure wdio method
        // The chai libary can be utilized for setting custom messages on error - instead of relying on the inbuilt error messages of WDIO
        //assert.equal(await LoginPage.errorMsBox.getText(), badPwText + 'l'); // ideal chai method for custom error messages
    })

    it('should visit the shipper page without having to authenticate', async () => {

        allureReporter.addLabel("TestingLabel", "valuuuuue");
        allureReporter.addFeature("anotherfeature");
        allureReporter.addStory("GROW-5678");
        allureReporter.addIssue("fizzledrizzle"); // this will create a href link on the allure report - still need to configure for it to work correctly
        allureReporter.addStep("Step0");
        allureReporter.addDescription("new description for new test!", 'text');

        await homepage.getStartedButton.moveTo();
        await homepage.getStartedMenuButton(1).click();
        // This is a good candidate to encapsulate elsewhere, since its likely other tests may use it at some point in the future
        var newurl = 'https://www.drayalliance.com/home/shippers/demo';
        expect(browser).toHaveUrlContaining(newurl);
    })
});