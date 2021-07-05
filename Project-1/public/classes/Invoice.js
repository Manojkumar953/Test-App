export class Invoice {
    constructor(user, details, amount) {
        this.user = user;
        this.details = details;
        this.amount = amount;
        this.user = user;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.user} owes £${this.amount} for ${this.details}`;
    }
}
