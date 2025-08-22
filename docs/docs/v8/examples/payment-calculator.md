title: Spreadsheet Payment calculator
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet
description: A simple spreadsheet to calculate a car finance using Jspreadsheet.

# Spreadsheet Payment Calculator

A nice example using various cell types for one unique column.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
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
    worksheets: [{
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
            A1: { type:'html', readOnly: true },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        },
    }]
});
</script>
</html>
```
 
