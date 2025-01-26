import {Page, PageAssertions} from "../interfaces";

class MainPage extends Page<MainPage> {
    private readonly assertions: MainPageAssertions;

    constructor() {
        super();
        this.assertions = new MainPageAssertions(this);
    }

    get expect() {
        return this.assertions;
    }
}

export class MainPageAssertions extends PageAssertions<MainPage> {
    constructor(page: MainPage) {
        super(page);
    }
}

export default new MainPage();
