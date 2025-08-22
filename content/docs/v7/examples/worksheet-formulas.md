title: Using formulas in multiple worksheets
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, formulas, currency, custom formulas, formulas in multiple worksheets
description: How to use formulas across multiple worksheets.


# Multiple worksheet formulas

The usage of formulas across multiple worksheets is possible using a similar Excel and Google Sheets syntax.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

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

jspreadsheet(document.getElementById('spreadsheet'), [
    {
        data: data1,
        minDimensions: [5,5],
        defaultColWidth: '100px',
        license: '###license###'
    },
    {
        data: data2,
        minDimensions: [5,5],
        defaultColWidth: '100px',
        license: '###license###'
    },
]);
</script>
</html>
```
 
