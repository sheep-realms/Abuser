class FormConstructor {
    constructor() {}

    static item(index, label, content) {
        return `<div class="abuser-from-row"><label for="form-item-${index}">${label}</label>${content}</div>`;
    }

    static input(index, label, def, type = 'text') {
        return FormConstructor.item(
            index,
            label,
            `<input type="${type}" name="form-item-${index}" class="form-item-${index} abuser-form-item" data-index="${index}" value="${def}" data-default="${def}">`
        );
    }

    static inputNum(index, label, def) {
        return FormConstructor.input(index, label, def, 'number');
    }

    static checkbox(index, label, def) {
        return FormConstructor.item(
            index,
            '',
            `<button role="checkbox" aria-selected="${def ? 'true' : 'false'}" class="checkbox ${def ? 'selected' : ''}">
                <span class="icon"></span>
                <span class="text">${label}</span>
                <input type="hidden" name="form-item-${index}" class="form-item-${index}" value="${def}" data-default="${def}">
            </button>`
        );
    }

    static sideItem(name, title) {
        return `<div class="abuser-fn-item" aria-selected="false" data-name="${name}"><span class="title">${title}</span></div>`
    }
}