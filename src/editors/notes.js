const notes = function() {
    const methods = {};
    let editor = null;

    methods.updateCell = function(cell, value) {
        if (cell) {
            let tag = document.createElement('div');
            tag.classList.add('jss_notes');
            tag.innerHTML = value;
            cell.innerHTML = '';
            cell.appendChild(tag);
        }
    }

    methods.createCell = methods.updateCell;

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Editor options
        let opt = options && options.options ? options.options : {};
        opt.focus = true;
        opt.value = value;
        opt.border = false;
        opt.height = '145px';
        opt.toolbar = false;

        // Create dialog
        editor = createDialog(cell, value, x, y, instance, options);
        editor = jSuites.editor(editor, opt);
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.getData() : '';
    }

    return methods;
}();