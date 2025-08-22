title: Basic to Advance Spreadsheet Formulas
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, formulas, currency, calculations
description: Learn how to use spreadsheet-like formulas on your JavaScript data grid.



# Excel-like Formulas

The example below shows how to use excel-like formulas on your javascript spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ 'Crayons Crayola only (No Rose Art)', 2, '5.01', '=B1*C1' ],
    [ 'Colored Pencils Crayola only', 2, '4.41', '=B2*C2' ],
    [ 'Expo Dry-erase Markers Wide', 4, '3.00', '=B3*C3' ],
    [ 'Index Cards Unlined', 3, '6.00', '=B4*C4' ],
    [ 'Tissues', 10, '1.90', '=B5*C5' ],
    [ 'Ziploc Sandwich-size Bags', 5, '1.00', '=B6*C6' ],
    [ 'Thin Markers Crayola only', 2, '3.00', '=B7*C7' ],
    [ 'Highlighter', 4, '1.20', '=B8*C8' ],
    [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '=SUM(D1:D8)' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', title:'Product', width:'300' },
        { type: 'text', title:'Qtd', width:'80' },
        { type: 'text', title:'Price', width:'100', mask:'#.##,00', decimal:',' },
        { type: 'text', title:'Total', width:'100' },
    ],
    updateTable:function(instance, cell, col, row, val, label) {
        if (cell.innerHTML == 'Total') {
            cell.parentNode.style.backgroundColor = '#fffaa3';
        }

        if (col == 3) {
            if (parseFloat(label) > 10) {
                cell.style.color = 'red';
            }  else {
                cell.style.color = 'green';
            }
        }
    },
    columnSorting:false,
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
