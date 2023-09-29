class FormConstructor {
    constructor() {}

    static tip(label) {
        return `<div class="abuser-from-checkbox-list"><span class="abuser-from-input-tip">${label}</span></div>`
    }

    static item(index, label, content, tip = '') {
        return `<div class="abuser-from-row"><label for="form-item-${index}">${label}</label>${content}</div>${tip != '' ? FormConstructor.tip(tip) : ''}`;
    }

    static input(index, label, def, tip = '', type = 'text') {
        return FormConstructor.item(
            index,
            label,
            `<input type="${type}" name="form-item-${index}" class="form-item-${index} abuser-form-item" data-index="${index}" value="${def}" data-default="${def}">`,
            tip
        );
    }

    static inputNum(index, label, def, tip = '') {
        return FormConstructor.input(index, label, def, tip, 'number');
    }

    static checkbox(index, label, def, tip = '') {
        return FormConstructor.item(
            index,
            '',
            `<button role="checkbox" aria-selected="${def ? 'true' : 'false'}" class="checkbox ${def ? 'selected' : ''}">
                <span class="icon"></span>
                <span class="text">${label}</span>
                <input type="hidden" name="form-item-${index}" class="form-item-${index}" value="${def}" data-default="${def}">
            </button>`,
            tip
        );
    }

    static sideItem(name, title) {
        return `<button class="abuser-fn-item" role="tab" aria-selected="false" data-name="${name}"><span class="title">${title}</span></button>`
    }

    static sideGroup(title) {
        return `<div class="abuser-fn-group"><span class="title">${title}</span></div>`
    }
}