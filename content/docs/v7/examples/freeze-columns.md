title: Spreadsheet Freeze Columns
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data, frezee columns
description: Set up a freeze columns in your spreadsheets using Jspreadsheet Version 7.


# Freeze columns

Define the number of freeze columns by using the freezeColumn directive with tableOverflow as follows.

**IMPORTANT:** Only available on modern browsers

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [26,50],
    tableOverflow: true,
    tableWidth: '800px',
    freezeColumns: 3,
    license: '###license###',
});
</script>
</html>
```
 
