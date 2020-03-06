import Navbar from  '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

// prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can request a new password to be sent to their email', async t => {

    // Actions
    // Click signin button
    await t.click(navbar.signInButton);

    // Click forgot password link
    await t.click(loginPage.linkToForgottenPassword);

    // Enter email address into email input box
    await t.typeText(forgottenPasswordPage.emailInput, 'email@email.com', { paste: true, replace: true });
    
    // Press enter key
    await t.pressKey('enter');

    // Assertions
    // Assert that sent email with password text contains the submitted email address
    await t
        .expect(forgottenPasswordPage.sentPasswordText)
        .contains('email@email.com')

    // Assert that the emailInput box no longer exists on the screen
    await t
        .expect(forgottenPasswordPage.emailInput.exists)
        .notOk();

})