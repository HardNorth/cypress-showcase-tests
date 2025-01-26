import {USERS} from "../../data/users";
import LoginPage from "../../pageobjects/pages/login-page";

export default class Login {

    static get randomUser() {
        return USERS[Math.floor(Math.random() * USERS.length)];
    }

    private static navigateIfNeeded() {
        cy.url().then(url => {
            if (!url.startsWith(process.env.BASE_URL)) {
                cy.visit('/');
            }
        });
    }

    static loginWithRandomUser() {
        // Login with random user
        Login.navigateIfNeeded();
        LoginPage.loginForm.login(Login.randomUser);
    }
}
