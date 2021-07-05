export class AddValues {
    render(obj, header) {
        const li = document.createElement('li');
        let h4 = document.createElement('h4');
        h4.innerHTML = header;
        let p = document.createElement('p');
        p.innerHTML = obj.format();
        li.append(h4);
        li.append(p);
        const ul = document.querySelector('ul');
        ul.prepend(li);
    }
}
