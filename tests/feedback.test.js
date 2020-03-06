import { Selector } from 'testcafe';

// prettier-ignore
fixture `Feedback Form Test`
    .page `http://zero.webappsecurity.com/index.html`

    test('User can submit feedback via form', async t => {
        
        // Get selectors section
        const linkToFeedback = Selector('#feedback');
        const form_name = Selector('#name');
        const form_email = Selector('#email');
        const form_subject = Selector('#subject');
        const form_comment = Selector('#comment');
        const form_submitButton = Selector('input').withAttribute('value', 'Send Message');
        const message = Selector('div').innerText;

        // Actions Section
        // Click FEEDBACK tab
        await t.click(linkToFeedback);

        // Enter Name into 'Your Name' input box 
        await t.typeText(form_name, 'Andrew', { paste: true });

        // Enter Email into 'Your email address' input box 
        await t.typeText(form_email, 'test@email.com', { paste: true })

        // Enter Subject into 'Subject' input box 
        await t.typeText(form_subject, 'Test Subject', { paste: true })

        // Enter feedback text into 'Type your questions here...' input box 
        await t.typeText(form_comment, 'This is some review comments...', { paste: true });

        // Click the 'Send Message' button
        await t.click(form_submitButton);

        // Assertions Section
        // Check that 'Thank you for your comments' text appears on page
        await t.expect(message).contains('Thank you for your comments');
        
    });
