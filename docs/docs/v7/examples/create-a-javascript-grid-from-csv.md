title: Create a javascript spreadsheet from a CSV file
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, loading data, create from CSV
description: How to create a JavaScript spreadsheet or data grid based on a CSV file.


# Create a javascript spreadsheet from a CSV file

The example below helps you to create a javascript spreadsheet table based on a remote CSV file, including the headers.

NOTE: A download can be performed by CTRL+S or by the option _save_ available in the context menu.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<p><button id="exportbtn">Export my spreadsheet as CSV</button></p>

<script>
let mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    csv: '/jspreadsheet/arts.csv',
    tableOverflow: true,
    columns: [
        { type: 'text', width: '300px' },
        { type: 'text', width: '80px' },
        { type: 'dropdown', width: '120px', source: ['England','Wales','Northern Ireland','Scotland'] },
        { type: 'text', width: '120px' },
        { type: 'text', width: '120px'},
     ],
     license: '###license###',
});
document.getElementById("exportbtn").onclick = () => mySpreadsheet.download();
</script>
</html>
```
   

## Other properties related

| Property         | Description                                                                            |
| -----------------|----------------------------------------------------------------------------------------|
| **csvFileName**  | Default filename when the user download the table content. Default: 'jspreadsheet.csv' |
| **csvHeaders**   | Consider the first line in the CSV as the header names. Default: _true_                |
| **csvDelimiter** | Consider the first line in the CSV as the header names. Default: _,_                   |
| **allowExport**  | Allow the user to export by CTRL+S or by the contextMenu. Default: _true_              |


