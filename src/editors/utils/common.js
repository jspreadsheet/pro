const getMask = function(o) {
    if (o.format || o.mask || o.locale) {
        let opt = {};
        if (o.mask) {
            opt.mask = o.mask;
        } else if (o.format) {
            opt.mask = o.format;
        } else {
            opt.locale = o.locale;
        }

        if (o.options) {
            opt.options = o.options;
        }

        if (o.decimal) {
            if (! opt.options) {
                opt.options = {};
            }
            opt.options = { decimal: o.decimal };
        }

        // Do nothing
        if (opt.mask === '@') {
            return false;
        }

        return opt;
    }

    return null;
}

const isDOM = function(o) {
    return (o instanceof Element || o instanceof HTMLDocument || o instanceof DocumentFragment);
}

// Is a formula
const isFormula = function(value, validate) {
    return value && (typeof(value) === 'string') && (value[0] === '=' && (value[1]||validate));
}

const isTrue = function(o, property) {
    if (o[property] === true || (o.options && o.options[property] === true)) {
        return true;
    } else {
        return !!(o[property] === 'true' || (o.options && o.options[property] === 'true'));
    }
}

const isMarked = function(value) {
    return !! (value === 1 || value === true || value === 'true' || value === 'TRUE')
}

const createEditor = function(type, cell, value, instance) {
    instance.parent.input.setAttribute('contentEditable', false);
    // Editor
    let editor;
    if (type === 'input') {
        editor = document.createElement('input');
        editor.type = 'text';
        editor.value = value;
    } else {
        editor = document.createElement('div');
    }
    editor.style.width = (cell.offsetWidth - 2) + 'px';
    editor.style.height = (cell.offsetHeight - 1) + 'px';
    instance.parent.input.appendChild(editor);

    return editor;
}

const createDialog = function(cell, value, x, y, instance) {
    // Editor
    let editor = createEditor('div', cell, value, instance);
    editor.classList.add('jss_dialog');
    editor.classList.add('jclose');

    if (window.innerWidth < 800) {
        instance.parent.input.style.top = '0px';
        instance.parent.input.style.left = '0px';
    } else {
        let rect = instance.parent.input.getBoundingClientRect();
        if (window.innerHeight < rect.bottom) {
            instance.parent.input.style.marginTop = -instance.parent.input.offsetHeight;
        }
    }

    return editor;
}