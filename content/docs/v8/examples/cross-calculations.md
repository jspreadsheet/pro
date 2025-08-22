title: Cross Spreadsheet Calculations
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, excel-like formulas, spreadsheet-like formulas, cross spreadsheet calculations
description: This example shows how to implement calculations across different spreadsheets.



# Spreadsheet Cross Calculations

You can implement Excel-like formulas references from different spreadsheet instances to perform advance calculations. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet1"></div><br><br>

<div id="spreadsheet2"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        data: [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.13, '=B1*C1' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, '=B2*C2' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, '=B3*C3' ],
            [ 'Index Cards Unlined', 3, 6.00, '=B4*C4' ],
            [ 'Tissues', 10, 1.90, '=B5*C5' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, '=B6*C6' ],
            [ 'Thin Markers Crayola only', 2, 3.00, '=B7*C7' ],
            [ 'Highlighter', 4, 1.20, '=B8*C8' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '=SUM(D1:D8)' ],
        ],
        columns: [
            { type: 'text', title:'Product', width:'300' },
            { type: 'number', title:'Qtd', width:'80' },
            { type: 'number', title:'Price', width:'100' },
            { type: 'number', title:'Total', width:'100' },
        ],
        worksheetName: 'Products',
        columnSorting:false,
    }],
});

jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        data: [
            [ 'Price', '=SUM(Products!D1:D8)'],
            [ 'Discount', 0.1],
            [ 'Total', '=B1*(1-B2)'],
        ],
        columns: [
            { type: 'text', title:'Summary', width:'300' },
            { type: 'number', title:'Total', width:'200' },
        ],
        cells: { B2: { type:'percent' } },
        columnSorting:false,
    }],
});
</script>
</html>
```
 
