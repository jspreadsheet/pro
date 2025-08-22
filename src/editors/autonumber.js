const autonumber = function() {
    const methods = {};

    let editor = null;

    methods.createCell = function(cell, value, x, y, instance, options) {
        // Make sure is a integer
        value = parseInt(value);
        if (! value) {
            if (cell && parseInt(cell.textContent) > 0) {
                value = parseInt(cell.textContent);
            }
        }
        // Make sure the sequence exists
        if (! options.sequence) {
            options.sequence = 0;
        }
        // If not value is passed to the method get the next valid sequence
        if (! value) {
            // Get next sequence
            value = options.sequence + 1;
        } else {
            // If a value is given, check for duplications
            if (! methods.isValid(value, x, y, instance)) {
                value = '#ERROR';
            }
        }
        // Value is greater than the sequence, so keep the sequence number
        if (value > options.sequence) {
            options.sequence = value;
        }
        // Update label
        if (cell) {
            cell.textContent = value;
        }
        // Update data
        return value;
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance) {
        editor = createEditor('input', cell, value, instance);
        editor.onblur = function() {
            instance.closeEditor(cell, true);
        }
        editor.focus();
        editor.value = value;
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.value : '';
    }

    methods.isValid = function(value, x, y, instance) {
        let tmp = null;
        for (let j = 0; j < instance.options.data.length; j++) {
            tmp = instance.value(x, j);
            if (tmp == value && j != y) {
                return false;
            }
        }
        return true;
    }

    return methods;
}();