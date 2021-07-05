import { AddValues } from "./classes/AddValues.js";
import { Invoice } from "./classes/Invoice.js";
import { HTMLViewer } from "./interfaces/HTMLViewer.js";



document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn') as HTMLButtonElement;
    btn.addEventListener('click', () => {
        let docs: HTMLViewer;
        let obj: AddValues = new AddValues();
        const typeOf = document.querySelector('#type') as HTMLSelectElement;
        const to = document.querySelector('#to') as HTMLInputElement;
        const details = document.querySelector("#details") as HTMLInputElement;
        const amount = document.querySelector('#amount') as HTMLInputElement;

        if (typeOf.value === 'Invoice') {
            docs = new Invoice(to.value, details.value, amount.valueAsNumber)
        }
        else {
            docs = new Invoice(to.value, details.value, amount.valueAsNumber);
        }
        obj.render(docs, typeOf.value);

    });
});