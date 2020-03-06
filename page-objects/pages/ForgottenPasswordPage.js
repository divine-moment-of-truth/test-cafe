import { Selector, t } from 'testcafe';

class ForgottenPasswordPage {
    constructor() {
        this.emailInput = Selector('#user_email');
        this.sentPasswordText = Selector('div').innerText;
    }
}

export default ForgottenPasswordPage;