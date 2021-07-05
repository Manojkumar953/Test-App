import { AddValues } from "./classes/AddValues.js";
import { Invoice } from "./classes/Invoice.js";
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        let docs;
        let obj = new AddValues();
        const typeOf = document.querySelector('#type');
        const to = document.querySelector('#to');
        const details = document.querySelector("#details");
        const amount = document.querySelector('#amount');
        if (typeOf.value === 'Invoice') {
            docs = new Invoice(to.value, details.value, amount.valueAsNumber);
        }
        else {
            docs = new Invoice(to.value, details.value, amount.valueAsNumber);
        }
        obj.render(docs, typeOf.value);
    });
});
