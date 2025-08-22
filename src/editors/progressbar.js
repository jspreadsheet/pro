const progressbar = function() {
    const methods = {};

    let editor = null;

    methods.createCell = function(cell, value) {
        value = parseInt(value);
        if (value > 100) {
            value = 100;
        } else if (! value || value < 0) {
            value = 0;
        }
        let tag;
        if (cell.children[0] && cell.children[0].tagName === 'DIV') {
            tag = cell.children[0];
        } else {
            tag = document.createElement('div');
            tag.classList.add('progressbar');
            cell.textContent = '';
            cell.classList.add('jss_progressbar')
            cell.appendChild(tag);
        }

        tag.style.width = parseInt(value) + '%';
        tag.setAttribute('title', parseInt(value) + '%');

    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_progressbar');
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance) {
        editor = createEditor('input', cell, value, instance);
        editor.type = 'number';
        editor.setAttribute('min', 0);
        editor.setAttribute('max', 100);
        editor.onblur = function() {
            instance.closeEditor(cell, true);
        };
        editor.focus();
        editor.value = value;
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.value : '';
    }

    return methods;
}();