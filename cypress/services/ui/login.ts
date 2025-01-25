import {USERS} from "../../data/users";
import {LoginPage} from "../../pageobjects/pages/login-page";

export class Login {

    static get randomUser() {
        return USERS[Math.floor(Math.random() * USERS.length)];
    }

    private navigateIfNeeded() {
        cy.url().then(url => {
            if (!url.startsWith(process.env.BASE_URL)) {
                cy.visit('/');
            }
        });
    }

    loginWithRandomUser() {
        // Login with random user
        this.navigateIfNeeded();
        new LoginPage().loginForm.login(Login.randomUser);
    }
}
