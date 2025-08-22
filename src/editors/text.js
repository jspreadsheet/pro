// General editor
const text = function() {
    const methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        // Make sure those are numbers
        if (typeof(x) !== 'number') {
            x = parseInt(x);
        }
        if (typeof(y) !== 'number') {
            y = parseInt(y);
        }

        // Masking?
        let opt = getMask(options);
        // Update
        let update = null;
        // Keep numeric in the raw data
        if (value !== '' && ! isFormula(value) && typeof(value) !== 'number' && (typeof(value) == 'string' && value.trim() !== '')) {
            if (opt) {
                // Parse
                let t = jSuites.mask.extract(value, opt, true);
                if (t && t.value !== '') {
                    update = t.value;
                }
            } else {
                let autoCasting = instance.parent.config.autoCasting === false || options.autoCasting === false ? false : true;
                if (autoCasting === true) {
                    if (options.type === 'number' || options.type === 'numeric' || options.type === 'percent') {
                        let t = jSuites.mask.extract(value, options, true);
                        if (t && t.value !== '') {
                            update = t.value;
                        }
                    } else {
                        if (jSuites.isNumeric(Number(value))) {
                            update = Number(value);
                        }
                    }
                }
            }
        }

        if (update !== null) {
            value = update;
        }

        // Parse the value
        let ret = methods.parseValue(x, y, value, instance, options, cell);

        // If that cell exists
        if (cell) {
            // Apply value to the cells
            if (isDOM(ret)) {
                cell.textContent = '';
                cell.appendChild(ret);
            } else {
                if (options.rotate) {
                    let rotate;
                    if (cell.children[0] && cell.children[0].classList.contains('jss_rotate')) {
                        rotate = cell.children[0];
                    } else {
                        rotate = document.createElement('span');
                        rotate.classList.add('jss_rotate');
                        cell.innerHTML = '';
                        cell.appendChild(rotate);
                    }
                    rotate.style.transform = 'rotate(' + parseInt(270 - options.rotate) + 'deg)';
                    rotate.textContent = ret;
                } else if (options.url) {
                    let url;
                    if (cell.children[0] && cell.children[0].classList.contains('jss_url')) {
                        url = cell.children[0];
                    } else {
                        url = document.createElement('a');
                        url.classList.add('jss_url');
                        cell.appendChild(url);
                    }
                    url.href = options.url;
                    url.textContent = ret;
                } else {
                    cell.textContent = ret; // TODO - prepapar um filtro para nao aceitar qualquer HTML sanitize.
                }
            }
        }

        if (update !== null) {
            return update;
        }
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance, options) {
        let o = instance.parent.input;
        // Onblur event
        o.onblur = function() {
            if (! o.classList.contains('jss_formula')) {
                instance.closeEditor(cell, true);
            }
        }

        // No wrap for numbers
        if (options.type === 'number' || options.type === 'numeric' || options.type === 'percent') {
            o.classList.add('jss_nowrap');
            // If is not formula
            if (! isFormula(value)) {
                // Numeric keyboard
                if (! options.inputmode) {
                    options.inputmode = 'decimal';
                }
            }
        }

        // Format
        let opt = null;

        // Apply format when is not a formula
        if (! isFormula(value)) {
            // Input mode
            if (options.inputmode) {
                o.setAttribute('inputmode', options.inputmode);
            }
            // Format
            opt = getMask(options);
            if (opt) {
                // Masking
                if (! options.disabledMaskOnEdition) {
                    if (options.mask) {
                        let m = options.mask.split(';')
                        o.setAttribute('data-mask', m[0]);
                    } else if (options.locale) {
                        o.setAttribute('data-locale', options.locale);
                    }

                    // Input
                    opt.input = o;
                    // Configuration
                    o.mask = opt;
                    // Do not treat the decimals
                    jSuites.mask.render(value, opt, false);
                }
            } else {
                if (options.type === 'percent') {
                    if (value) {
                        value = jSuites.mask.adjustPrecision(value*100);
                    }
                    o.classList.add('jss_percent');
                }
            }
        }

        if (! opt || options.disabledMaskOnEdition) {
            // Set value
            o.textContent = value;
            // Set focus
            jSuites.focus(o);
        }
    }

    methods.closeEditor = function(cell, save, x, y, instance, options) {
        // Get the editor
        let o = instance.parent.input;
        // The content from the editor. Keep white space as 32 not 160
        let value = save ? o.textContent.replace(/\u00A0/g, ' ') : '';

        // Percent
        if (isFormula(value)) {
            // Remove line breaks
            value = value.replace(/(\r\n|\n|\r)/gm, "");
        } else {
            if (! getMask(options)) {
                if (options.type === 'percent') {
                    value = jSuites.mask.adjustPrecision(value/100);
                    o.classList.remove('jss_percent');
                }
            }
        }

        return value;
    }

    methods.parseValue = function(x, y, value, instance, options, cell) {
        let DOMElement = false;
        // Formula?
        if (instance.parent.config.parseFormulas === true && isFormula(value)) {
            value = instance.executeFormula(value, x, y);
            if (isDOM(value)) {
                DOMElement = true;
            }
        }
        // Not a DOM element apply mask and other properties to the cell
        if (! DOMElement) {
            value = Cells.applyFormat(cell, value, options);
        }

        return value;
    }

    methods.get = function(options, val) {
        let opt = getMask(options);
        if (opt) {
            return jSuites.mask.render(val, opt, true);
        } else if (options.type === 'percent') {
            return parseFloat(val) * 100;
        }
        return val;
    }

    methods.destroyCell = function(cell) {
        cell.classList.remove('jss_number');
    }

    return methods;
}();
