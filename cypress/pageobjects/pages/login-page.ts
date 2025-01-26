import {Page, PageAssertions} from "../interfaces";
import {LoginForm} from "../components/login/login-form";
import {SignUpForm} from "../components/login/sign-up-form";

class LoginPage extends Page<LoginPage> {
    private readonly assertions: LoginPageAssertions
    private readonly loginFormComponent: LoginForm;
    private readonly signUpFormComponent: SignUpForm;

    constructor() {
        super();
        this.assertions = new LoginPageAssertions(this);
        this.loginFormComponent = new LoginForm('main.MuiContainer-root');
        this.signUpFormComponent = new SignUpForm('main.MuiContainer-root');
    }

    get expect() {
        return this.assertions;
    }

    get loginForm() {
        return this.loginFormComponent;
    }

    get signUpForm() {
        return this.signUpFormComponent;
    }
}

class LoginPageAssertions extends PageAssertions<LoginPage> {
    constructor(page: LoginPage) {
        super(page);
    }
}

export default new LoginPage();
