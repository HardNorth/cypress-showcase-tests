import LoginPage from "../pageobjects/pages/login-page";
import LoginService from "../services/ui/login";

describe('User Sign-up and Login', () => {
    beforeEach(function () {
        cy.visit('/');
    });

    it('Verify Login Page details at open', () => {
        LoginPage.expect.toHaveTitle("Cypress Real World App");
        LoginPage.expect.toHaveURL(/\/signin$/);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after credentials enter', () => {
        LoginPage.loginForm.fillCredentials(LoginService.randomUser);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toHaveLoginButton();
    });

    it('Verify Login Page details after just username enter', () => {
        LoginPage.loginForm.fillUsername(LoginService.randomUser.username);
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveAllNoErrors();
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page empty username error message', () => {
        LoginPage.loginForm.focusUsername();
        LoginPage.loginForm.focusPassword();
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toHaveUsernameError('Username is required');
        LoginPage.loginForm.expect.toNotHavePasswordError();
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });

    it('Verify Login Page short password error message', () => {
        LoginPage.loginForm.fillUsername(LoginService.randomUser.username);
        LoginPage.loginForm.fillPassword('123');
        LoginPage.loginForm.focusUsername();
        LoginPage.loginForm.expect.toHaveAllElements();
        LoginPage.loginForm.expect.toNotHaveUsernameError()
        LoginPage.loginForm.expect.toHavePasswordError('Password must contain at least 4 characters');
        LoginPage.loginForm.expect.toNotHaveLoginButton();
    });
});
