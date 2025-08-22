const rating = function() {
    const methods = {};

    let editor = null;

    methods.createCell = function(cell, value, x, y, instance, options) {
        return methods.setCell(cell, value, options);
    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_rating');
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance) {
        editor = createEditor('input', cell, value, instance);
        editor.type = 'number';
        editor.setAttribute('min', 0);
        editor.setAttribute('max', 5);
        editor.onblur = function() {
            instance.closeEditor(cell, true);
        }
        editor.focus();
        editor.value = value;
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.value : '';
    }

    methods.setCell = function(cell, value, options) {
        value = parseInt(value);
        if (value > 5) {
            value = 5;
        } else if (! value || value < 0) {
            value = 0;
        }

        if (cell) {
            let color = options && options.color ? options.color : 'red';
            let tag = document.createElement('div');
            tag.setAttribute('title', parseInt(value) + ' stars');
            tag.classList.add('rating');

            for (let i = 0; i < value; i++) {
                let element = document.createElement('i');
                element.className = 'material-icons';
                element.style.color = color;
                element.innerHTML = 'star';
                tag.appendChild(element);
            }

            cell.innerHTML = '';
            cell.className = 'jss_rating';
            cell.appendChild(tag);
        }

        return value;
    }

    return methods;
}();