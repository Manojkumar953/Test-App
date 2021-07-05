import { HTMLViewer } from "../interfaces/HTMLViewer.js";

export class Invoice implements HTMLViewer {
    constructor(public user: string, public details: string, public amount: number) {
        this.user = user;
        this.details = details;
        this.amount = amount;
    }
    format(): string {
        return `${this.user} owes £${this.amount} for ${this.details}`;
    }
}