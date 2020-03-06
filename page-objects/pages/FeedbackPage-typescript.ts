import { Selector, t } from 'testcafe';

class FeedbackPage {
    form_name: Selector = Selector('#name');
    form_email: Selector = Selector('#email');
    form_subject: Selector = Selector('#subject');
    form_comment: Selector = Selector('#comment');
    form_submitButton: Selector = Selector('input').withAttribute(
        'value',
        'Send Message'
    );
    message: Selector = Selector('div');

    async submitFeedback(t: TestController) {
        await t
            .typeText(this.form_name, "name", { paste: true, replace: true })
            .typeText(this.form_email, 'email@email.com', { paste: true, replace: true })
            .typeText(this.form_subject, 'subject', { paste: true, replace: true })
            .typeText(this.form_comment, 'comment', { paste: true, replace: true })
            .click(this.form_submitButton)
        }
}

export default FeedbackPage;