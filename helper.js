import { t } from 'testcafe';

export async function login(username, password) {

    // Click the sign in button
    await t.click('#signin_button');

    // Paste an invalid username into username input box
    await t.typeText('#user_login',  username, { paste: true })

    // Paste an invalid password into password input box
    await t.typeText('#user_password', password, { paste: true })

    // Click submit button to submit form
    await t.click('.btn-primary');

}