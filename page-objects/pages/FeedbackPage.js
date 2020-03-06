import { Selector, t } from 'testcafe';
import BasePage from './BasePage';

class FeedbackPage extends BasePage {
    constructor() {
        this.form_name = Selector('#name');
        this.form_email = Selector('#email');
        this.form_subject = Selector('#subject');
        this.form_comment = Selector('#comment');
        this.form_submitButton = Selector('input').withAttribute('value', 'Send Message');
        this.message = Selector('div');
    }
}

export default FeedbackPage;