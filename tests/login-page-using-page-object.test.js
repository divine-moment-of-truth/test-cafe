import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';
import AccountSummaryPage from '../page-objects/pages/AccountSummaryPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const accountSummaryPage = new AccountSummaryPage();

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('User cannot login with invalid credentials', async t => {

    await t.click(navbar.signInButton);
    loginPage.LoginToApp('invalid username', 'invalid password');

    // Assert that login error message is displayed
    await t
        .expect(loginPage.errorMessage.innerText)
        .contains('Login and/or password are wrong.');

});

test('User can login with valid credentials', async t => {

    await t.click(navbar.signInButton);
    loginPage.LoginToApp('username', 'password');

    // Assert that account summary tab is displayed. If it does, then that would mean you have successfully logged in
    await t.expect(accountSummaryPage.accountSummaryTab.exists).ok();

    // Check that the login form no longer exists because you have successfully logged into a new page
    await t.expect(loginPage.loginForm.exists).notOk();

    // Check whether logged in user icon exists on page
    await t.expect(navbar.loggedInIcon.exists).ok();

    // Click on user logged in icon to display the drop down menu, to expose the 'Logout' option
    await t.click(navbar.loggedInIcon);
    await t.click(navbar.logoutButton);

    // Check that you have logged out successfully. Assert that the logout button is not visible, and the signin button is visible
    await t.expect(navbar.logoutButton.exists).notOk();
    await t.expect(navbar.signInButton.exists).ok();
});