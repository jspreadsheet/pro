title: Advance use of Excel-like Formulas
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, formulas, currency, custom formulas
description: Unleash the power of your application data grid by bringing excel-like formulas and custom JavaScript methods to your spreadsheets.


# Excel-like Custom Formulas

**IMPORTANT** : All methods names should be created using capital letters.

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let COLORIZE = function(v) {
    let d = document.createElement('div');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

formula.setFormula({ COLORIZE })

jspreadsheet.setExtensions({ formulas: formula })

let data = [
    [ 'red', '=COLORIZE(A1)' ],
    [ 'green', '=COLORIZE(A2)' ],
    [ 'blue', '=COLORIZE(A3)' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', width:'300' },
        { type: 'text', width:'200' },
    ],
    license: '###license###',
});
</script>
</html>
```
