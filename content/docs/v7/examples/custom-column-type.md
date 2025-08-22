title: Custom Data Grid Column Types
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data, custom column type
description: How to create custom column types using Jspreadsheet. Integrate third party plugins to bring a better user experience on your online data grids.


# Custom column type

Jspreadsheet gives developers the ability to create their own custom columns. The following example shows how to integrate a third party clock plugin as a custom column on Jspreadsheet Pro v7+.

A time custom column based on the [clockpicker plugin](https://weareoutman.github.io/clockpicker/) by weareoutman.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/clockpicker@0.0.7/dist/jquery-clockpicker.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clockpicker@0.0.7/dist/jquery-clockpicker.min.js"></script>

<div id="custom"></div>

<script>
let clockEditor = function() {
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
        // Create input from the helpers
        let editor = jspreadsheet.helpers.createEditor('input', cell);
        editor.value = value;
        // Instance of the clock picker
        $(editor).clockpicker({
            afterHide:function() {
                setTimeout(function() {
                    // To avoid double call
                    if (cell.children[0]) {
                        instance.closeEditor(cell, true);
                    }
                });
            }
        });
        editor.focus();
    }

    methods.closeEditor = function(cell, save) {
        if (save) {
            cell.innerHTML = cell.children[0].value;
        } else {
            cell.innerHTML  = '';
        }

        return cell.innerHTML;
    }

    return methods;
}();

let data = [
    ['PHP', '14:00'],
    ['Javascript', '16:30'],
];

jspreadsheet(document.getElementById('custom'), {
    data: data,
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
     ],
     license: '###license###',
});
</script>
</html>
```
 
