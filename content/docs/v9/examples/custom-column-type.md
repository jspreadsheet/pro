title: Custom Column Types in Jspreadsheet Version 9
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom editors, custom columns
description: The following example shows how to integrate a third-party clock plugin as a custom column



# Custom Column Type

Jspreadsheet is a powerful grid that gives developers a lot of flexibility. The following example shows how to integrate a third-party clock plugin as a custom column. From version 8, the editor is created once, and it is the same during the entire lifecycle of the application. See also: [React Spreadsheet Editor](https://codesandbox.io/s/react-custom-editor-for-jspreadsheet-ic6h3l)  

## Example

A basic integration with a third party component. 

A custom column based on the [clockpicker plugin](https://weareoutman.github.io/clockpicker/) by weareoutman.

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/clockpicker@0.0.7/dist/jquery-clockpicker.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clockpicker@0.0.7/dist/jquery-clockpicker.min.js"></script>

<div id="custom"></div>

<script>
let clockEditor = function() {
    // Create the editor once to persist the whole lifecycle of the spreadsheet
    let editor = document.createElement('input');
    editor.classList.add('jss_object');
    editor.type = 'text';
    editor.style.width = '100%';

    // Close event
    let closeEvent = null;

    // Create instance of the clock picker
    $(editor).clockpicker({ afterDone: function() {
        closeEvent();
    }});

    // JSS editor
    let methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        cell.innerHTML = value;
    }

    methods.updateCell = function(cell, value, x, y, instance, options) {
        if (cell) {
            cell.innerHTML = value;
        }
    }

    methods.openEditor = function(cell, value, x, y, instance, options) {
        // Append the clock picker to the input container
        instance.parent.input.appendChild(editor);
        // Make sure input container is not editable
        instance.parent.input.setAttribute('contentEditable', false);
        // Set the current value
        editor.value = value;
        // Focus to open the clock picker
        editor.focus();
        // Make sure JSS object class is set to keep the focus on the spreadsheet
        if (! document.querySelector('.clockpicker-popover').classList.contains('jss_object')) {
            document.querySelector('.clockpicker-popover').classList.add('jss_object');
        }
        // Update close event
        closeEvent = function() {
            instance.closeEditor(cell, true);
        }
    }

    methods.closeEditor = function(cell, save, x, y, instance, options) {
        if (save) {
            cell.innerHTML = editor.value;
        } else {
            cell.innerHTML  = '';
        }
        // Return value
        return cell.innerHTML;
    }

    return methods;
}();

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('custom'), {
    worksheets: [{
        data: [
            ['PHP', '14:00'],
            ['Javascript', '16:30'],
        ],
        columns: [
            {
                type: 'text',
                title: 'Course Title',
                width: '300px'
            },
            {
                type: clockEditor,
                title: 'Time',
                width: '200px'
            },
         ]
    }]
});
</script>
</html>
```
 
