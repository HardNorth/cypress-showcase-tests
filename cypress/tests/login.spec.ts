import {LoginPage} from "../pageobjects/pages/login-page";
import {Login} from "../services/ui/login";

describe('User Sign-up and Login', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('Verify Login Page details at open', () => {
        const loginPage = new LoginPage();
        loginPage.expect.toHaveTitle("Cypress Real World App");
        loginPage.expect.toHaveURL(/\/signin$/);
        loginPage.loginForm.expect.toHaveAllElements();
        loginPage.loginForm.expect.toHaveAllNoErrors();
        loginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after credentials enter', () => {
        const loginPage = new LoginPage();
        loginPage.loginForm.fillCredentials(Login.randomUser);
        loginPage.loginForm.expect.toHaveAllElements();
        loginPage.loginForm.expect.toHaveAllNoErrors();
        loginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after just username enter', () => {
        const loginPage = new LoginPage();
        loginPage.loginForm.fillUsername(Login.randomUser.username);
        loginPage.loginForm.expect.toHaveAllElements();
        loginPage.loginForm.expect.toHaveAllNoErrors();
        loginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page empty username error message', () => {
        const loginPage = new LoginPage();
        loginPage.loginForm.focusUsername();
        loginPage.loginForm.focusPassword();
        loginPage.loginForm.expect.toHaveAllElements();
        loginPage.loginForm.expect.toHaveUsernameError('Username is required');
        loginPage.loginForm.expect.toNotHavePasswordError();
        loginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page short password error message', () => {
        const loginPage = new LoginPage();
        loginPage.loginForm.fillUsername(Login.randomUser.username);
        loginPage.loginForm.fillPassword('123');
        loginPage.loginForm.focusUsername();
        loginPage.loginForm.expect.toHaveAllElements();
        loginPage.loginForm.expect.toNotHaveUsernameError()
        loginPage.loginForm.expect.toHavePasswordError('Password must contain at least 4 characters');
        loginPage.loginForm.expect.toNotHaveLoginButton();
    });
});
