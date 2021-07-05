import { HTMLViewer } from "../interfaces/HTMLViewer.js";

export class AddValues {
    render(obj: HTMLViewer, header: string): void {
        const li = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.innerHTML = header;
        let p = document.createElement('p');
        p.innerHTML = obj.format();
        li.append(h4);
        li.append(p);
        const ul = document.querySelector('ul') as HTMLUListElement;
        ul.append(li);


    }
}