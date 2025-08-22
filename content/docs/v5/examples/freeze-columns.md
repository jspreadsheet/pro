title: Data Grid Freeze Columns
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data, freeze columns
description: Set up freeze columns in a Jspreadsheet JavaScript spreadsheet.



# Freeze columns

Define the number of freeze columns by using the freezeColumn directive with tableOverflow as follows:

**IMPORTANT:** This feature is not available on Edge or Internet Explorer at this moment.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [20,200],
    tableOverflow: true,
    lazyLoading: true,
    tableWidth: '800px',
    allowComments: true,
    freezeColumns: 3,
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
