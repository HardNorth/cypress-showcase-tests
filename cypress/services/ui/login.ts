import {Page} from "@playwright/test";
import {USERS} from "../../data/users";
import {LoginPage} from "../../pageobjects/pages/login-page";

export class Login {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    static get randomUser() {
        return USERS[Math.floor(Math.random() * USERS.length)];
    }

    private async navigateIfNeeded() {
        // Navigate to login page if needed
        if (!this.page.url().startsWith(process.env.BASE_URL)) {
            await this.page.goto(process.env.BASE_URL);
        }
    }

    async loginWithRandomUser() {
        // Login with random user
        await this.navigateIfNeeded();
        await new LoginPage(this.page).loginForm.login(Login.randomUser);
    }
}
