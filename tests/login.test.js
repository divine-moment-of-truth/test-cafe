import { Selector } from 'testcafe';

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async t => {
    const signInButton = Selector('#signin_button');
    const loginForm = Selector('#login_form');
    const usernameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    const submitButton = Selector('.btn-primary');
    const errorMessage = Selector('.alert-error').innerText;

    // Click the sign in button
    await t.click(signInButton);

    // Assert that loginForm appears
    await t.expect(loginForm.exists).ok();

    // Paste an invalid username into username input box
    await t.typeText(usernameInput, 'invalid username', { paste: true })

    // Paste an invalid password into password input box
    await t.typeText(passwordInput, 'invalid password', { paste: true })

    // Click submit button to submit form
    await t.click(submitButton);

    // Assert that login error message is displayed
    await t.expect(errorMessage).contains('Login and/or password are wrong.');

});

test('User can login with valid credentials', async t => {
    const signInButton = Selector('#signin_button');
    const loginForm = Selector('#login_form');
    const usernameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    const submitButton = Selector('.btn-primary');
    const accountSummaryTab = Selector('#account_summary_tab');
    const loggedInIcon = Selector('.icon-user');
    const logoutButton = Selector('#logout_link');

    // Click the sign in button
    await t.click(signInButton);

    // Assert that loginForm appears
    await t.expect(loginForm.exists).ok();

    // Paste an invalid username into username input box
    await t.typeText(usernameInput, 'username', { paste: true })

    // Paste an invalid password into password input box
    await t.typeText(passwordInput, 'password', { paste: true })

    // Click submit button to submit form
    await t.click(submitButton);

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