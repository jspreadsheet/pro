const color = function() {
    const methods = {};

    let editor = null;

    methods.updateCell = function(cell, value, x, y, instance, options) {
        if (cell) {
            if (options.render === 'square') {
                let color = document.createElement('div');
                color.className = 'color';
                color.style.backgroundColor = value;
                cell.textContent = '';
                cell.appendChild(color);
            } else {
                cell.style.color = value;
                cell.textContent = value;
            }
        }
    }

    methods.createCell = methods.updateCell;

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Duplicate
        options = Object.create(options);

        // Customize the behavior of the calendar
        if (typeof(options.filterOptions) == 'function') {
            options = options.filterOptions(instance, cell, x, y, value, options);
        }
        // Options
        let colorOptions = options.options || {};
        // Options for the calendar
        colorOptions.value = value;
        colorOptions.onclose = function() {
            instance.closeEditor(cell, true);
        }

        // Create editor
        editor = createEditor('input', cell, value, instance);
        editor = jSuites.color(editor, colorOptions);
        editor.open();
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.close(true) : '';
    }

    methods.get = function(options, value) {
        let color = document.createElement('div');
        color.style.width = '100px';
        color.style.height = '10px';
        color.style.backgroundColor = value;

        return color.outerHTML;
    }

    return methods;
}();