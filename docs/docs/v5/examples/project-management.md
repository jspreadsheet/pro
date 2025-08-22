title: Project Management Spreadsheet
keywords: Jspreadsheet, javascript, cases, food store
description: How to create a online project management using Jspreadsheet.



# Project Management Spreadsheet

A simple example including table scripting to perform a photo update and a progress bar added to any new task.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data1 = [
    [ '=B1', '1', 'New products section', '2019-02-12', '80', '=PROGRESS(E1, "darkgreen")' ],
    [ '=B2', '1', 'API integration', '2019-03-01', '100', '=PROGRESS(E2, "darkgreen")' ],
    [ '=B3', '7359', 'Deck', '2018-11-10', '30', '=PROGRESS(E3, "darkgreen")' ],
    [ '=B4', '1', 'Prototype', '2019-01-12', '0', '=PROGRESS(E4, "darkgreen")' ],
];

let mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data1,
    columns: [
        { type: 'text', width: '60px', title: 'Photo', readOnly:true },
        { type: 'dropdown', width: '140px', title: 'Name', source: [ { id:'1', name: 'Richard'}, { id:'7359', name: 'Cosme Sergio' }] },
        { type: 'text', width: '200px', title: 'Task' },
        { type: 'calendar', width: '100px', title: 'When' },
        { type: 'text', width: '50px', title: '%' },
        { type: 'text', width: '100px', title: 'Progress' },
    ],
    allowComments:true,
    updateTable: function(instance, cell, col, row, val, label, cellName) {
        if (col == 0) {
            if (instance.jspreadsheet.options.data[row][col+1]) {
                cell.innerHTML = '<img src="/templates/default/img/' + instance.jspreadsheet.options.data[row][col+1] + '.jpg" style="width:24px;height:24px;border-radius:16px">';
            } else {
                cell.innerHTML = '<img src="/templates/default/img/nophoto.jpg" style="width:24px;height:24px;border-radius:16px">';
            }
        }
    },
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
