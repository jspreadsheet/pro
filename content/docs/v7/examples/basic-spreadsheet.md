title: My first JavaScript Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, create a spreadsheet, data grid, tables
description: How to create a basic JavaScript Spreadsheet using Jspreadsheet Version 7.


# Create a Basic Spreadsheet

How to create a basic spreadsheet from a JavaScript Array.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', '2', '3', '4', '5', '6' ],
];

let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    minDimensions: [ 10,10 ],
    license: '###license###',
});
</script>
</html>
```
 
