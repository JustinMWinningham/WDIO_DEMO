import Page from './page';

/**
 * This class holds selectors and related action methods for the main web login page
 */
class LoginPage extends Page {

    get inputUsername () {
        return $('#login-form > div:nth-child(1) > div > input');
    }

    get inputPassword () {
        return $('#login-form > div:nth-child(2) > div > input');
    }

    get loginBtn () {
        return $('#login-form > button');
    }

    get errorMsBox () {
        return $('#app > div.app-login-page > div.app-login-page__right > div > div.app-login-page__error-text-container > p');
    }

    // *******************************************************
    // *** Getters above this point, Methods and actions below
    // *******************************************************


    /**
     * Logs in as desired user
     * @param {string} username desired username to enter into login textbox
     * @param {string} password desired password to enter into password textbox
     * Note that async commands can be called from page object files as well if needed
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object - if there was one, this is just an unused example to show the premise
     */
    public open () {
        return super.open('login');
    }
}
export default new LoginPage();
