const html = function() {
    const methods = {};

    let editor = null;

    methods.createCell = function(cell, value) {
        cell.classList.add('jss_richtext');
        let d = document.createElement('div');
        d.innerHTML = value;
        cell.appendChild(d);
    }

    methods.updateCell = function(cell, value) {
        if (cell) {
            cell.firstChild.innerHTML = value;
        }
    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_richtext');
    }

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Editor options
        let opt = options && options.options ? options.options : {};
        opt.focus = true;
        opt.value = value;
        opt.border = false;
        opt.height = '145px';

        // Create dialog
        let t = createDialog(cell, value, x, y, instance, options);
        editor = jSuites.editor(t, opt);
        editor.close = function() {
            instance.closeEditor(cell, true);
        }
        // Create tracking
        jSuites.tracking(editor, true);
    }

    methods.closeEditor = function(cell, save) {
        // Stop tracking
        jSuites.tracking(editor, false);
        // Get the value
        let value = editor.getData();
        // Finalize editor
        if (save) {
            return value;
        }
    }

    return methods;
}();