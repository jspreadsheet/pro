title: JSS Data Grid Cell Types
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, autonumber, autoincrement column type
description: Learn how to add native or custom editor types to the cells in your javascript data grid using Jspreadsheet Version 7.


# Data Grid Cell Types

A new feature in Jspreadsheet Pro v7 is the ability to define custom type based on individual cells. The following example overwrites the default column type definition by custom parameters based on the cellName, as follows.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="max-width:200px;"><br><h3>Vehicle Payment Calculator</h3>', ''],
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
 
