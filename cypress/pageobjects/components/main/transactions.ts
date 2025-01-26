import {Component, ComponentAssertions} from "../../interfaces";

export class Transactions extends Component<Transactions> {
    private readonly assertions: TransactionsAssertions

    constructor(prefix: string) {
        super(`${prefix} div.TransactionList-paper`);
        this.assertions = new TransactionsAssertions(this);
    }

    get expect(): TransactionsAssertions {
        return this.assertions;
    }
}

class TransactionsAssertions extends ComponentAssertions<Transactions> {
    constructor(transactions: Transactions) {
        super(transactions);
    }
}
