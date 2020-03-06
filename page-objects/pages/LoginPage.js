import { Selector, t } from 'testcafe';

class LoginPage {
    constructor() {
        this.usernameInput = Selector('#user_login');
        this.userPassword = Selector('#user_password');
        this.submitButton = Selector('.btn-primary');
        this.errorMessage = Selector('.alert-error');
        this.loginForm = Selector('#login_form');
        this.linkToForgottenPassword = Selector('a').withExactText('Forgot your password ?');
    }

    async LoginToApp(username, password) {
        await t
            .typeText(this.usernameInput, username, { paste: true, replace: true })
            .typeText(this.userPassword, password, { paste: true, replace: true })
            .click(submitButton);
    }

}

export default LoginPage;