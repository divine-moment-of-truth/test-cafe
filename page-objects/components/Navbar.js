import { Selector, t } from 'testcafe';

class Navbar {
    constructor() {
        // Selectors
        this.searchBox = Selector('#searchTerm');
        this.signInButton = Selector('#signin_button');
        this.loggedInIcon = Selector('.icon-user');
        this.logoutButton = Selector('#logout_link');
    }

    async search(text) {
        await t
            .typeText(this.search, text, { paste: true, replace: true })
            .pressKey('enter');
    }
};

export default Navbar;
