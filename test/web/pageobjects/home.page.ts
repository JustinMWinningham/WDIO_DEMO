/**
 * This class holds selectors and related action methods for the web landing page (www.drayalliance.com) 
 */
class HomePage {

    get loginButton () {
        return $('#app > header > nav > a')
    }

    get getStartedButton() {
        return $('#app > header > nav > div > button')
    }

    /**
     * Selects the desired dropdown based on a provided index on the home menu 'getting started' dropdown
     * @param {number} idx Index of the 'getting started' menu button we want to click, starts at 0
     * @returns {Element}
     */
    getStartedMenuButton(idx: number) {
        return $('#app > header > nav > div > div > div > a:nth-child(' + idx + ')')
    }


    // *******************************************************
    // *** Getters above this point, Methods and actions below
    // *******************************************************


    // Note no Async on these functions. We want to interact with the elements, not the promise
    /**
     * Clicks the desired dropdown of the 'Getting Started' button options
     * @param {number} idx idx Index of the 'getting started' menu button we want to click, starts at 0
     */
    clickGettingStartedMenu(idx: number) {
        // need to mouse over the 'get started' button for DOM to render the following buttons
        this.getStartedMenuButton(idx).click()
    }
};
export default new HomePage()