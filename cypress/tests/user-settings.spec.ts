import Login from "../services/ui/login";
import {USERS} from "../data/users";
import MainPage from "../pageobjects/pages/main-page";

describe('User Settings tests', () => {
    beforeEach(function () {
        Login.login(USERS[1]);
    });

    it('Verify User Settings Page details at open', () => {
        MainPage.sideMenu.openUserSettings();
        MainPage.userSettings.expect.toHaveAllElements();
    });
});
