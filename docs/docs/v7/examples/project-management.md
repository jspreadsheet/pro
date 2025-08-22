title: Project Management Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, cases, food store
description: Create a project management spreadsheet using Jspreadsheet Version 7.



# Project Management Spreadsheet

A simple example including table scripting to perform a photo update and a progress bar added to any new task.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data1 = [
    [ '=B1', '2', 'New products section', '2019-02-12', '80', '=PROGRESS(E1, "darkgreen")' ],
    [ '=B2', '2', 'API integration', '2019-03-01', '100', '=PROGRESS(E2, "darkgreen")' ],
    [ '=B3', '3', 'Deck', '2018-11-10', '30', '=PROGRESS(E3, "darkgreen")' ],
    [ '=B4', '2', 'Prototype', '2019-01-12', '0', '=PROGRESS(E4, "darkgreen")' ],
];

let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data1,
    columns: [
        { type: 'text', width: '60px', title: 'Photo', readOnly:true },
        { type: 'dropdown', width: '140px', title: 'Name', source: [ { id:'2', name: 'Jorge'}, { id:'7359', name: 'Cosme Sergio' }] },
        { type: 'text', width: '200px', title: 'Task' },
        { type: 'calendar', width: '100px', title: 'When' },
        { type: 'text', width: '50px', title: '%' },
        { type: 'text', width: '100px', title: 'Progress' },
    ],
    allowComments:true,
    updateTable: function(instance, cell, col, row, val, label, cellName) {
        if (col == 0) {
            if (instance.jexcel.options.data[row][col+1]) {
                cell.innerHTML = '<img src="/templates/default/img/' + instance.jexcel.options.data[row][col+1] + '.jpg" style="width:24px;border-radius:16px">';
            } else {
                cell.innerHTML = '<img src="/templates/default/img/nophoto.jpg" style="width:24px;border-radius:16px">';
            }
        }
    },
    license: '###license###',
});
</script>
</html>
```
