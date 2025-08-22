const checkbox = function() {
    const methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        value = isMarked(value);

        let element = document.createElement('input');
        element.type = 'checkbox';
        element.checked = value;
        element.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ((options && options.readOnly === true) || ! instance.isEditable()) {
                return false;
            }
            let currentState = this.checked;
            setTimeout(function() {
                instance.setValue(cell, currentState);
            });
        }

        // Append to the table
        cell.innerHTML = '';
        cell.appendChild(element);

        return value;
    }

    methods.updateCell = function(cell, value) {
        // Force boolean format
        value = isMarked(value);
        if (cell && cell.children[0]) {
            cell.children[0].checked = value;
        }

        return value;
    }

    methods.openEditor = function(cell, value, x, y, instance) {
        // Get value
        value = ! cell.children[0].checked;
        // Toggle value
        instance.setValue(cell, value);

        // Do not open editor
        return false;
    }

    methods.closeEditor = function() {
        return false;
    }

    methods.get = function(options, value) {
        return isMarked(value) ? T('true') : T('false');
    }

    return methods;
}();