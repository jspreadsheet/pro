const dropdown = function() {
    const methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        if (options.render === 'tag') {
            cell.classList.add('jss_dropdown_tags');
        } else {
            cell.classList.add('jss_dropdown');
        }
        // Dynamic dropdown
        if (! options.source && typeof(options.dynamicSource) == 'string') {
            options.source = methods.getDynamicSource(instance, options);
        }
        // Get an element
        let val = methods.updateCell(cell, value, x, y, instance, options);
        if (val) {
            return val;
        }
    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_dropdown');
    }

    methods.updateCell = function(cell, value, x, y, instance, options) {
        // Update data and cell
        if (cell) {
            // Get element
            let label = methods.getItem(cell, value, x, y, instance, options);
            if (! label) {
                if (value) {
                    value = methods.fromLabel(cell, value, x, y, instance, options);
                    if (value.length) {
                        label = methods.getItem(cell, value, x, y, instance, options);
                        cell.innerHTML = label;
                    } else {
                        cell.innerHTML = '';
                    }
                } else {
                    cell.innerHTML = '';
                }
            } else {
                cell.innerHTML = label;
            }

            return value;
        }
    }

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Create editor
        let editor = createEditor('div', cell, value, instance);

        let delimiter = options.delimiter || ';';

        // Duplicate
        options = Object.create(options);

        // Options
        if (! options.options) {
            options.options = {};
        }
        // Dynamic dropdown
        if (typeof(options.dynamicSource) == 'string') {
            options.source = methods.getDynamicSource(instance, options);
        }
        // Source filters
        if (typeof(options.filter) == 'function') {
            options.source = options.filter(instance, cell, x, y, value, options);
        }
        // Options filters
        if (typeof(options.filterOptions) == 'function') {
            options = options.filterOptions(instance, cell, x, y, value, options);
        }

        // Create options
        let opt = options.options;

        // Source
        if (options.source) {
            opt.data = JSON.parse(JSON.stringify(options.source));
        }
        if (isTrue(options, 'multiple')) {
            opt.multiple = true;
        }
        if (isTrue(options, 'autocomplete')) {
            opt.autocomplete = true;
        }
        opt.format = true;
        opt.opened = true;
        opt.width = cell.offsetWidth - 2;
        opt.onclose = function() {
            instance.closeEditor(cell, true);
        }

        if (isTrue(options, 'multiple')) {
            if (value) {
                opt.value = (''+value).split(delimiter);
            }
        } else {
            opt.value = value;
        }

        // Render dropdown
        jSuites.dropdown(editor, opt);
    }

    methods.closeEditor = function(cell, save, x, y, instance, options) {
        // Get editor
        let editor = instance.parent.input.children[0];
        if (editor && editor.dropdown) {
            // Close editor
            let delimiter = options.delimiter || ';';
            let label = editor.dropdown.getText(true);
            let value = editor.dropdown.getValue(true);
            if (! Array.isArray(options.source)) {
                options.source = [];
            }

            for (let i = 0; i < value.length; i++) {
                if (methods.getItem(cell, value[i], x, y, instance, options) === false) {
                    options.source.push({id: value[i], name: label[i]});
                }
            }

            // Close editor
            editor.dropdown.close(true);
            // Return value
            if (save) {
                return value.join(delimiter);
            }
        }
    }

    methods.fromLabel = function(cell, value, x, y, instance, options) {
        let delimiter = options.delimiter || ';';
        // Containers
        let items = [];
        let values = [];
        // Make sure the value for multiple options
        if (!Array.isArray(value)) {
            value = ('' + value).split(delimiter)
        }
        for (let i = 0; i < value.length; i++) {
            values[value[i].trim()] = true;
        }

        let k = Object.keys(values);
        if (!isTrue(options, 'multiple') && Object.keys(k).length > 1) {
            let tmp = [];
            tmp[k[0]] = true;
            values = tmp;
        }

        // Get item
        if (options.source) {
            for (let j = 0; j < options.source.length; j++) {
                if (values[options.source[j].name]) {
                    items.push(options.source[j].id);
                }
            }
        }

        return items.join(delimiter);
    }

    methods.getItem = function(cell, value, x, y, instance, options) {
        let delimiter = options.delimiter || ';';
        // Containers
        let items = [];
        let values = [];
        let colors = [];

        // Make sure the value for multiple options
        if (! Array.isArray(value)) {
            value = (''+value).split(delimiter)
        }
        for (let i = 0; i < value.length; i++) {
            values[value[i].trim()] = true;
        }

        let k = Object.keys(values);
        if (! isTrue(options, 'multiple') && Object.keys(k).length > 1) {
            let tmp = [];
            tmp[k[0]] = true;
            values = tmp;
        }

        // Fix data format
        if (options.source) {
            if (typeof (options.source[0]) !== 'object') {
                for (let j = 0; j < options.source.length; j++) {
                    let k = options.source[j];
                    options.source[j] = {id: k, name: k};
                }
            }
            // Get item
            for (let j = 0; j < options.source.length; j++) {
                if (values[options.source[j].id] === true) {
                    let v;
                    let c = options.source[j].color;
                    if (options.render === 'color') {
                        v = c;
                    } else if (options.render === 'image') {
                        v = options.source[j].image;
                    } else {
                        v = options.source[j].name;
                    }
                    items.push(v);

                    if (typeof(c) !== 'undefined') {
                        colors.push(c);
                    } else {
                        colors.push(null);
                    }
                }
            }
        }

        if (items.length) {
            // Render in different ways
            if (typeof(options.render) !== 'undefined') {
                const render = function(i, j) {
                    if (options.render === 'color') {
                        return "<div class='jss_dropdown_icon' style='background-color: " + i + "'></div>";
                    } else if (options.render === 'image') {
                        return "<div class='jss_dropdown_icon' style='background-color: " + i + "'></div>";
                    } else if (options.render === 'tag') {
                        let c = colors[j] || 'orange';
                        return "<div class='jss_dropdown_tag' style='background-color: " + c + "'>" + i + "</div>";
                    } else {
                        return i;
                    }
                }

                for (let j = 0; j < items.length; j++) {
                    items[j] = render(items[j], j);
                }

                return items.join('');
            } else {
                for (let j = 0; j < items.length; j++) {
                    items[j] = (''+items[j]).replace('<', '&lt;');
                }
                return items.join('; ');
            }
        }

        return false;
    }

    methods.get = function(options, val) {
        // Get item
        for (let j = 0; j < options.source.length; j++) {
            if (options.source[j].id == val) {
                let v;
                if (options.render === 'color') {
                    v = options.source[j].color;
                } else if (options.render === 'image') {
                    v = options.source[j].image;
                } else {
                    v = options.source[j].name;
                }
                return v;
            }
        }
    }

    methods.getDynamicSource = function(instance, options) {
        let source = [];
        let tokens = Helpers.getTokensFromRange(options.dynamicSource);
        tokens.forEach(function(v) {
            let k = instance.getValue(v);
            let value = instance.getValue(v, true);
            source.push({ id: k, name: value });
        })
        return source;
    }

    return methods;
}();