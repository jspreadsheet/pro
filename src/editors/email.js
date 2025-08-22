const email = function() {
    const methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        if (cell) {
            let tag;
            if (cell.children && cell.children[0] && cell.children[0].tagName === 'A') {
                tag = cell.children[0];
            } else {
                tag = document.createElement('a');
                cell.textContent = '';
                cell.appendChild(tag);
                // Href
                if (options.options && options.options.url) {
                    tag.setAttribute('href', options.options.url);
                }
            }

            tag.textContent = value;
        }
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance) {
        instance.parent.input.classList.add('jss_nowrap');
        instance.parent.input.onblur = function() {
            instance.closeEditor(cell, true);
        }
        instance.parent.input.textContent = value;
        jSuites.focus(instance.parent.input);
    }

    methods.closeEditor = function(cell, save, x, y, instance) {
        instance.parent.input.classList.remove('jss_nowrap');
        return save ? instance.parent.input.textContent.replace(new RegExp(/\n/, 'g'), '') : '';
    }

    return methods;
}();