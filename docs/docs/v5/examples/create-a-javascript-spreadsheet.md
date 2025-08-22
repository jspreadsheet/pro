title: Create a basic javascript spreadsheet
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, create a table
description: Create a basic JavaScript spreadsheet.



# Create a basic javascript spreadsheet

There are a few different ways to load data to your javascript spreadsheet, the most basic is loading a spreadsheet from a javascript array, as below:

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', '2', '3' ],
    [ '4', '5', '6' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    minDimensions: [ 10,10 ],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
