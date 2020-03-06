import { Selector } from 'testcafe';

// prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request a new password to be sent to their email', async t => {

    // Get selectors
    const signInButton = Selector('#signin_button');
    const linkToForgottenPassword = Selector('a').withExactText('Forgot your password ?');
    const emailInput = Selector('#user_email');
    const sentPasswordText = Selector('div').innerText;
    
    // Actions
    // Click signin button
    await t.click(signInButton);

    // Click forgot password link
    await t.click(linkToForgottenPassword);

    // Enter email address into email input box
    await t.typeText(emailInput, 'email@email.com');
    
    // Press enter key
    await t.pressKey('enter');

    // Assertions
    // Assert that sent email with password text contains the submitted email address
    await t.expect(sentPasswordText).contains('email@email.com')

    // Assert that the emailInput box no longer exists on the screen
    await t.expect(emailInput.exists).notOk();

})