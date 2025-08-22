const tags = function() {
    const methods = {};
    let editor = null;

    methods.createCell = function(cell, value) {
        cell.classList.add('jss_tags');
        methods.updateCell(cell, value);
    }

    methods.updateCell = function(cell, value) {
        if (cell) {
            cell.innerHTML = value;
        }
    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_tags');
    }

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Editor options
        let opt = options && options.options ? options.options : {};
        opt.value = value;

        // Create dialog
        editor = createDialog(cell, value, x, y, instance, options);
        let div = document.createElement('div');
        div.style.margin = '10px';
        div.style.marginRight = '40px';
        editor.appendChild(div);

        // Create dialog
        editor = jSuites.tags(div, opt);
        div.focus();
        jSuites.focus(div)
    }

    methods.closeEditor = function(cell, save) {
        return save ? editor.getValue() : '';
    }

    return methods;
}();