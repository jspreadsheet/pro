title: Spreadsheet Column Editors
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, table, column editors
description: Integrate native or custom editors to your spreadsheets to create a great a better user experience.



# Editors

Jspreadsheet input editors is a powerful feature and help users to input data into cells. It is possible to integrate rich and responsive web components to improve the user experience. There are several native editors available such as `text, numeric, hidden, dropdown, checkbox, radio, calendar, image, color, email URL, progress bar, rating, auto number, rich text, percent and notes`. The following template would make it possible to go beyond the native editors. Using the template developers would be able to integrate any JavaScript plugin and create a custom data input tool on any online spreadsheet. 

## Basic editor template


{.ignore}
```javascript
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
```

### Using a custom editor

Considering the custom `clockEditor` above, the property `type` can be used to define the custom editor.

```html
<div id="spreadsheet"></div>
<script>
let data = [
    ['PHP', '14:00'],
    ['Javascript', '16:30'],
];

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

jspreadsheet(document.getElementById('spreadsheet'), {
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
     license: '39130-64ebc-bd98e-26bc4',
});
</script>
```
  

### Append the new editor object to the Jspreadsheet controllers

To include a custom editor in the Jspreadsheet distribution. You can use the following syntax.


```html
<div id="spreadsheet"></div>
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

// Append the new editor to the Jspreadsheet editor controllers
jspreadsheet.editors.clock = clockEditor;

// After that the usabe can called using a string
let data = [
    ['PHP', '14:00'],
    ['Javascript', '16:30'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'text', width: '300px' },
        { type: 'clock', width: '200px' },
     ],
     license: '39130-64ebc-bd98e-26bc4',
});
</script>
```
  

## Editors in a cell level

Using the initialization property `cells` is possible to overwrite the column definitions to a cell level.


```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="width:200px;height:auto;"><br><h3>Vehicle Payment Calculator</h3>', ''],
    ['Purchase price', '19700'],
    ['Down payment', '1000'],
    ['Trade-in value', '500'],
    ['Interest rate', '0.0305'],
    ['Length of loan (in months)', '60'],
    ['', ''],
    ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
    ['Total cost', '=-(B8*B6)+(B3+B4)'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { width:'300px' },
        { width:'200px' },
    ],
    mergeCells: {
        A1: [2, 1]
    },
    rows: {
        0: { height:'200px' }
    },
    cells: {
        A1: { type:'html' },
        B2: { type:'text', mask:'$ #,##0.00', decimal:'.' },
        B3: { type:'text', mask:'$ #,##0.00', decimal:'.' },
        B4: { type:'text', mask:'$ #,##0.00', decimal:'.' },
        B5: { type:'percent' },
        B8: { type:'text', mask:'[-]$ #,##0.00', disabledMaskOnEdition: true, decimal:'.' },
        B9: { type:'text', mask:'[-]$ #,##0.00', disabledMaskOnEdition: true, decimal:'.' },
    },
    license: '###license###',
});
</script>
</html>
```
