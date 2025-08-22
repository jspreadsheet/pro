title: Custom Column Types: Enhance Data Input
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom editors, custom column types, data input, JavaScript integration, JavaScript components
description: Enhance data input in your Jspreadsheet data grid with custom column types, creating a dynamic and user-friendly experience for entering data into cells

# Data Grid Custom Cell Editor

The following example shows how to integrate a third-party plugin as a custom column. 

## Example

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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

### React MUI Integration

The following example shows a integration between React Mui and JSS React Spreadsheet.<br><br>

<iframe src="https://codesandbox.io/embed/custom-editors-with-react-mui-y4v8lj?fontsize=14&hidenavigation=1&theme=dark&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="Custom editors with React MUI"></iframe>
<br><br>
<a href="https://codesandbox.io/s/custom-editors-with-react-mui-y4v8lj" target="_blank">See this example on codesandbox</a>

#### More about custom editors

* [React Data Grid Validations](https://codesandbox.io/s/online-spreadsheet-with-validations-with-jspreadsheetxy777)
  How to crate a data grid with cell validations
* [MUI React as a Custom Editor](https://codesandbox.io/p/sandbox/custom-editors-with-react-mui-y4v8lj)
  React Calendar Antd Integration
* [Antd React Calendar Cell Editor](https://codesandbox.io/p/sandbox/custom-editors-with-react-antd-xjhszg)

