title: Jspreadsheet to XSL export
keywords: Jspreadsheet, Jexcel, javascript, cases, data persistence, database, spreadsheet, Jspreadsheet to excel, Jspreadsheet to xls
description: How to export the spreadsheet data to a XLS file.

Examples


# Export to XLS

You can now export from Jspreadsheet to a XLS file using a export plugin, as below. 

Note: A security message should appear due the form the file is generated

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="/v7/plugins/download.js"></script>

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Export to XLS' id="exportbtn" />

<script>
let data1 = [
    ['Cheese', 10, 6.00, "=B1*C1"],
    ['Apples', 5, 4.00, "=B2*C2"],
    ['Carrots', 5, 1.00, "=B3*C3"],
    ['Oranges', 6, 2.00, "=B4*C4"],
];

let data2 = [
    ['20%', "=SHEET1!D1"],
    ['20%', "=SHEET1!D2"],
    ['20%', "=SHEET1!D3"],
    ['20%', "=SHEET1!D4"],
];

let jss = jspreadsheet(document.getElementById('spreadsheet'), [
    {
        data: data1,
        defaultColWidth: '100px',
        minDimensions: [5,5],
        license: '###license###'
    },
    {
        data: data2,
        defaultColWidth: '100px',
        minDimensions: [5,5],
        license: '###license###'
    }
]);

document.getElementById("exportbtn").onclick = () => jspreadsheet.download(jss[0].el);
</script>
</html>
```
  

## Export to XLS plugin

This plugin is free and open source. The official repository: <https://github.com/jspreadsheet/plugins>

 

## Exporting using Jspreadsheet API

Alternatively, it is possible to export the spreadsheet using Jspreadsheet Api

[Jsfiddle example](https://jsfiddle.net/spreadsheet/1zf82mj6/)

 
