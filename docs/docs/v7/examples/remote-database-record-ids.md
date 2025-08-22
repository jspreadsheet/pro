title: Data Grid sync with Database Record IDs
keywords: Jspreadsheet, Jexcel, javascript, remote database synchronization, remote ids
description: Learn how to manage and sync remote IDs of database records with your spreadsheets.

# Remote database ids and actions

The following example shows a few important concepts.

  * How to load the data with IDS that are not shown to the user;
  * How to create custom data grid columns, in this example adding icon with actions;
  * Get a new remote id every single row added to the system;

NOTE: the example handles with one new line, but you can interact to get more ids in case more than one rows are added

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let action = function() {
    let methods = {};

    methods.createCell = function(cell, value, x, y, instance, options) {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            let id = instance.getRowId(y);
            // Do some action
            alert(id);
        }

        cell.appendChild(input);
    }

    return methods;
}();

jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        { id:'1', data:['Google', '5', ''] },
        { id:'2', data:['Bing', '4', ''] },
        { id:'3', data:['Yahoo', '1', ''] },
        { id:'4', data:['Duckduckgo', '5', ''] },
    ],
    columns: [
        { type: 'text', width:'400px' },
        { type: 'rating', width:'100px' },
        { type: action, width:'100px', readOnly: true },
    ],
    persistance: '/jspreadsheet/save',
    oninsertrow: function(a,b,c,d,e) {
        // Inserted before?
        let rowNumber = e == false ? b + 1 : b;
        // Go in remotely get the id and return to the cell
        jSuites.ajax({
            url: '/jspreadsheet/id',
            method: 'GET',
            dataType: 'json',
            success: function(result) {
                // The new id is
                alert('The new row has id: ' + result);
                // set row id
                a.jexcel.setRowId(rowNumber, result);
            }
        })
    },
    license: '###license###',
});
</script>
</html>
```
