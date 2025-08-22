const image = function() {
    const methods = {};

    let editor = null;

    methods.createCell = function(cell, value, x, y, instance, options) {
        if (cell) {
            if (value) {
                if (cell.children && cell.children[0] && cell.children[0].tagName === 'IMG') {
                    cell.children[0].src = value;
                } else {
                    let img = document.createElement('img');
                    if (options.render === 'round') {
                        img.classList.add('round');
                    }
                    if (options.options) {
                        img.style.maxWidth = '100%';
                        if (options.options.absolute) {
                            cell.classList.add('jss_image');

                            img.setAttribute('tabindex', -1);
                            img.classList.add('jss_object');
                            img.classList.add('jpanel');
                            img.settings = function() {
                                instance.openEditor(cell, value, x, y, instance, options);
                            }
                            img.dblclick = function() {
                                instance.openEditor(cell, true);
                            }
                            img.delete = function() {
                                instance.setValueFromCoords(x, y, '');
                            }
                            img.refresh = function(method) {
                                if (! method) {
                                    let t = parseInt(img.style.top) || 0;
                                    let l = parseInt(img.style.left) || 0;
                                    let w = parseInt(img.style.width) || 40;
                                    let h = parseInt(img.style.height) || 40;

                                    let x = cell.getAttribute('data-x');
                                    let y = cell.getAttribute('data-y');

                                    // Send to the server
                                    instance.updateProperty([{
                                        x: x,
                                        y: y,
                                        value: {
                                            top: t,
                                            left: l,
                                            width: w,
                                            height: h,
                                        }
                                    }], null, null, true);
                                }
                            }
                        }
                        if (options.options.width) {
                            img.style.width = parseInt(options.options.width) + 'px';
                        }
                        if (options.options.height) {
                            img.style.height = parseInt(options.options.height) + 'px';
                        }
                        // Properties
                        if (options.top) {
                            img.style.top = parseInt(options.top) + 'px';
                        }
                        if (options.left) {
                            img.style.left = parseInt(options.left) + 'px';
                        }
                        if (options.width) {
                            img.style.width = parseInt(options.width) + 'px';
                        }
                        if (options.height) {
                            img.style.height = parseInt(options.height) + 'px';
                        }
                    }
                    img.src = value;
                    cell.innerHTML = '';
                    cell.appendChild(img);
                }
            } else {
                cell.innerHTML = '';
            }
        }
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Editor options
        let opt = options && options.options ? options.options : {};
        opt.value = value;

        // Create dialog
        editor = createDialog(cell, value, x, y, instance, options);

        if (value) {
            let img = document.createElement('img');
            img.src = value;
            img.classList.add('jfile');
            img.style.width = '100%';
            editor.appendChild(img);
        }

        jSuites.image(editor, options);
    }

    methods.closeEditor = function(cell, save) {
        if (save) {
            let img = editor.children[0];
            if (img) {
                return img.tagName === 'IMG' ? img.src : '';
            }
        }
    }

    methods.get = function(options, value) {
        return '<img src="' + value + '" alt="">';
    }

    return methods;
}();