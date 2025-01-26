import {Component, ComponentAssertions} from "../../interfaces";

export class UserSettings extends Component<UserSettings> {
    private readonly assertions: UserSettingsAssertions

    private readonly userSettingsFormLocator: string;
    private readonly userFirstNameFieldLocator: string;
    private readonly userLastNameFieldLocator: string;
    private readonly userEmailFieldLocator: string;
    private readonly userPhoneNumberFieldLocator: string;
    private readonly submitButtonLocator: string;

    constructor(prefix: string) {
        super(`${prefix} div.UserSettingsContainer-paper`);
        this.assertions = new UserSettingsAssertions(this);
        this.userSettingsFormLocator = `${this.prefix} form[data-test="user-settings-form"]`;
        this.userFirstNameFieldLocator = `${this.userSettingsFormLocator} input#user-settings-firstName-input`;
        this.userLastNameFieldLocator = `${this.userSettingsFormLocator} input#user-settings-lastName-input`;
        this.userEmailFieldLocator = `${this.userSettingsFormLocator} input#user-settings-email-input`;
        this.userPhoneNumberFieldLocator = `${this.userSettingsFormLocator} input#user-settings-phoneNumber-input`;
        this.submitButtonLocator = `${this.userSettingsFormLocator} button[data-test="user-settings-submit"]`;
    }

    get expect(): UserSettingsAssertions {
        return this.assertions;
    }

    get userFirstName() {
        return cy.get(this.userFirstNameFieldLocator);
    }

    get userLastName() {
        return cy.get(this.userLastNameFieldLocator);
    }

    get userEmail() {
        return cy.get(this.userEmailFieldLocator);
    }

    get userPhoneNumber() {
        return cy.get(this.userPhoneNumberFieldLocator);
    }

    get submitButton() {
        return cy.get(this.submitButtonLocator);
    }
}

class UserSettingsAssertions extends ComponentAssertions<UserSettings> {
    constructor(userSettings: UserSettings) {
        super(userSettings);
    }

    toHaveUserFirstName() {
        this.component.userFirstName.should('be.visible').should('be.enabled');
    }

    toHaveUserLastName() {
        this.component.userLastName.should('be.visible').should('be.enabled');
    }

    toHaveUserEmail() {
        this.component.userEmail.should('be.visible').should('be.enabled');
    }

    toHaveUserPhoneNumber() {
        this.component.userPhoneNumber.should('be.visible').should('be.enabled');
    }

    toHaveSubmitButton() {
        this.component.submitButton.should('be.visible').should('be.enabled');
    }

    toHaveAllElements() {
        this.toHaveUserFirstName();
        this.toHaveUserLastName();
        this.toHaveUserEmail();
        this.toHaveUserPhoneNumber();
        this.toHaveSubmitButton();
    }
}
