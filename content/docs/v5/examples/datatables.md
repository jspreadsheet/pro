title: Searchable Data Grid
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: An example of utilizing search and pagination to tackle big datasets.



# Javascript spreadsheet with search and pagination

The following example shows how to create a javascript spreadsheet instance with a design similar to datatables jquery plugin.

[Back to the default skin](/docs/v5/examples/datatables?default=1)

NOTE: You can customize the layout of the table:

[Click here to change the skin of Jspreadsheet to render as the datatables jquery plugin.](/docs/v5/examples/datatables)

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.datatables.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
 jspreadsheet(document.getElementById('spreadsheet'), {
    csv: 'https://jspreadsheet.com/jspreadsheet/demo.csv',
    csvHeaders: true,
    search: true,
    pagination: 10,
    paginationOptions: [10,25,50,100],
    columns: [
        { type:'text', width:80 },
        { type:'text', width:200 },
        { type:'text', width:100 },
        { type:'text', width:200 },
        { type:'text', width:100 },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
