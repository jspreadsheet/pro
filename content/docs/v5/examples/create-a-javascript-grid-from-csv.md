title: Javascript Spreadsheet From a CSV file
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, loading data, create from CSV
description: How to create a JavaScript spreadsheet or data grid from a CSV file.



# Create a javascript spreadsheet from a CSV file

The example below helps you to create a javascript spreadsheet table based on a remote CSV file, including the headers.

Download Spreadsheet

NOTE: A download can be performed by CTRL+S or by the option _save_ available in the contextMenu trigger by the right click of the mouse

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<p><button id="exportcsv">Export my spreadsheet as CSV</button></p>

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
     license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("exportcsv").onclick = () => mySpreadsheet.download()
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


