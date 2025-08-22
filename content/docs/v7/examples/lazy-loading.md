title: Dealing with Large Spreadsheets
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: An example of tackling large table datasets using Jspreadsheet Version 7.



# Data Grid Lazy loading

Jspreadsheet Pro implements a smart virtual DOM management that brings a greater performance. In the example below, the spreadsheet handles 2 million cells (200K x 10 columns).

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [];

for (let j = 0; j < 500000; j++) {
    data[j] = [];
    for (let i = 0; i < 10; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    tableOverflow: true,
    lazyLoading: true,
    lazyColumns: true,
    onlazyloading: function(el, addedRows, removedRows) {
        // Related events
    },
    license: '###license###'
});
</script>
</html>
```
