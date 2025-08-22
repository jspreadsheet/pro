title: Project Management Spreadsheet Example
keywords: Jspreadsheet, Jexcel, javascript, cases, project management
description: A simple project management spreadsheet using Jspreadsheet.



# Project management spreadsheet

A simple online task management spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ '=B1', '2', 'New products section', '2019-02-12', '80' ],
            [ '=B2', '2', 'API integration', '2019-03-01', '100' ],
            [ '=B3', '4', 'Deck', '2018-11-10', '30' ],
            [ '=B4', '2', 'Prototype', '2019-01-12', '0' ],
        ],
        columns: [
            {
                type: 'text',
                width: '60px',
                title: 'Photo',
                readOnly: true
            },
            {
                type: 'dropdown',
                width: '140px',
                title: 'Name',
                source: [{
                    id: '2',
                    name: 'Jorge'
                }, {
                    id: '4',
                    name: 'Paul'
                }]
            },
            {
                type: 'text',
                width: '200px',
                title: 'Task'
            },
            {
                type: 'calendar',
                width: '100px',
                title: 'When'
            },
            {
                type: 'progressbar',
                width: '200px',
                title: '%'
            },
        ],
    }],
    updateTable: function(instance, cell, col, row, val, label, cellName) {
         if (col == 0) {
             let n = instance.options.data[row][col+1];
             if (n) {
                 let tmp = '<img src="/templates/default/img/' + n + '.jpg" class="users-small" />';
             } else {
                 let tmp = '<img src="/templates/default/img/nophoto.jpg" class="users-small" />';
             }
             // Only update when the content is different
             if (cell.innerHTML != tmp) {
                cell.innerHTML = tmp;
             }
         }
    },
});
</script>
</html>
```
 
