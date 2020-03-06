import { Selector } from 'testcafe';
import FeedbackPage from '../page-objects/pages/FeedbackPage';

const feedbackPage = new FeedbackPage();

// prettier-ignore
fixture `Feedback Form Test`
    .page `http://zero.webappsecurity.com/index.html`

    test('User can submit feedback via form', async t => {
        
        // Get selectors section
        const linkToFeedback = Selector('#feedback');

        // Actions Section
        // Click FEEDBACK tab
        await t.click(linkToFeedback);

        // Enter Name into 'Your Name' input box 
        await t.typeText(feedbackPage.form_name, 'Andrew', { paste: true });

        // Enter Email into 'Your email address' input box 
        await t.typeText(feedbackPage.form_email, 'test@email.com', { paste: true })

        // Enter Subject into 'Subject' input box 
        await t.typeText(feedbackPage.form_subject, 'Test Subject', { paste: true })

        // Enter feedback text into 'Type your questions here...' input box 
        await t.typeText(feedbackPage.form_comment, 'This is some review comments...', { paste: true });

        // Use base class function
        feedbackPage.waitFor(4000);

        // Click the 'Send Message' button
        await t.click(feedbackPage.form_submitButton);

        // Assertions Section
        // Check that 'Thank you for your comments' text appears on page
        await t
            .expect(feedbackPage.message.innerText)
            .contains('Thank you for your comments');
        
    });
