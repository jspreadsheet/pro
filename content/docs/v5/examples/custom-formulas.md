title: Advance Spreadsheet Formulas
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, formulas, currency, custom formulas
description: Unleash the power of your tables by bringing formulas and custom JavaScript methods to your Jspreadsheet spreadsheet.



# Custom Data Grid Formulas

You can declare custom javascript methods and use in your online spreadsheet as the example below.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let COLORIZE = function(v) {
    v = '<span style="color:' + v + '">' + v.toUpperCase() + '</span>';
    return v;
}

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
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
