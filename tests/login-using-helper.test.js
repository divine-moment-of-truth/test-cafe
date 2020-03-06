import { Selector } from 'testcafe';
import { login } from '../helper';

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async t => {

    await login('invalid username', 'invalid password');

    const errorMessage = Selector('.alert-error').innerText;

    // Assert that login error message is displayed
    await t.expect(errorMessage).contains('Login and/or password are wrong.');

});

test('User can login with valid credentials', async t => {
    
    const signInButton = Selector('#signin_button');
    const loginForm = Selector('#login_form');

    await login('username', 'password');

    const accountSummaryTab = Selector('#account_summary_tab');
    const loggedInIcon = Selector('.icon-user');
    const logoutButton = Selector('#logout_link');

    // Assert that account summary tab is displayed. If it does, then that would mean you have successfully logged in
    await t.expect(accountSummaryTab.exists).ok();

    // Check that the login form no longer exists because you have successfully logged into a new page
    await t.expect(loginForm.exists).notOk();

    // Check whether logged in user icon exists on page
    await t.expect(loggedInIcon.exists).ok();

    // Click on user logged in icon to display the drop down menu, to expose the 'Logout' option
    await t.click(loggedInIcon);
    await t.click(logoutButton);

    // Check that you have logged out successfully. Assert that the logout button is not visible, and the signin button is visible
    await t.expect(logoutButton.exists).notOk();
    await t.expect(signInButton.exists).ok();
});