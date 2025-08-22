const radio = function() {
    const methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        let element = document.createElement('input');
        element.type = 'radio';
        element.name = options.name || 'col_' + x;
        element.checked = isMarked(value);
        element.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ((options && options.readOnly === true) || ! instance.isEditable()) {
                return false;
            }
            setTimeout(function() {
                instance.setValue(cell, true);
            });
        }

        // Append to the table
        cell.innerHTML = '';
        cell.appendChild(element);
    }

    methods.updateCell = function(cell, value, x, y, instance) {
        // Force boolean format
        value = isMarked(value);
        if (cell) {
            cell.children[0].checked = value;
        }

        // Remove value from other cells
        if (value === true) {
            let records = [];
            for (let j = 0; j < instance.options.data.length; j++) {
                if (y != j && Value.call(instance,x,j)) {
                    records.push({ x: x, y: j, value: 0 })
                }
            }

            if (records.length) {
                instance.setValue(records);
            }
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