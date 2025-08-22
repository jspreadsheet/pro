const calendar = function() {
    const methods = {};
    let editor = null;

    const validDate = function(date) {
        date = ''+date;
        if (date.substr(4,1) === '-' && date.substr(7,1) === '-') {
            return true;
        } else {
            date = date.split('-');
            if ((date[0].length == 4 && date[0] == Number(date[0]) && date[1].length == 2 && date[1] == Number(date[1]))) {
                return true;
            }
        }
        return false;
    }

    methods.updateCell = function(cell, value, x, y, instance, options) {
        if (cell) {
            let ret = value;
            let format = methods.getFormat(options);

            if (ret > 0 && Number(ret) == ret) {
                ret = jSuites.calendar.numToDate(ret);
            }

            // Try formatted date
            if (! validDate(ret)) {
                let tmp = jSuites.calendar.extractDateFromString(ret, format);
                if (tmp) {
                    ret = tmp;
                }
            }

            // Create calendar cell
            let label = jSuites.calendar.getDateString(ret, format);
            if (label) {
                cell.textContent = label;
                if (value !== ret) {
                    return ret;
                }
            } else {
                cell.textContent = '';
                return '';
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
        let calendarOptions = options.options || {};
        calendarOptions.opened = true;
        calendarOptions.onclose = function() {
            instance.closeEditor(cell, true);
        }

        if (typeof(options.timepicker) !== 'undefined') {
            calendarOptions.time = isTrue(options, 'timepicker') ? true : false;
        }
        if (typeof(calendarOptions.readonly) !== 'undefined') {
            calendarOptions.readonly = options.readonly;
        }
        calendarOptions.value = value || null;
        calendarOptions.placeholder = calendarOptions.format;

        // Create jSuites instance
        editor = createEditor('input', cell, value, instance);
        jSuites.calendar(editor, calendarOptions);

        if (editor.calendar.options.readonly === false) {
            editor.focus();
        }
    }

    methods.closeEditor = function(cell, save) {
        // Close and ignore events
        let ret = editor.calendar.close(true, editor.value ? true : false);
        let val;
        if (editor.value) {
            val = ret;
        } else {
            val = '';
        }
        // Return value
        if (save) {
            return val;
        }
    }

    methods.getFormat = function(options) {
        if (options && options.format) {
            return options.format;
        } else if (options && options.options && options.options.format) {
            return options.options.format;
        } else {
            return 'YYYY-MM-DD';
        }
    }

    methods.get = function(options, val) {
        let format = methods.getFormat(options);
        return jSuites.calendar.getDateString(val, format);
    }

    return methods;
}();