title: Data Grid Auto Number Column Type
keywords: Jspreadsheet, javascript, plugins, spreadsheet, editors, javascript progressbar
description: The auto number column type helps to generates a unique number for each rows tracking as sequence.



# Autonumber Column Type

The native auto increment column type helps to create a sequential number for the data grid rows.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
            ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
            ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
            ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"],
            ["5","STAYING AT TAMARA'S","GEORGE EZRA"],
            ["6","BOHEMIAN RHAPSODY - OST","QUEEN"],
            ["7","THANK U NEXT","ARIANA GRANDE"],
            ["8","WHAT A TIME TO BE ALIVE","TOM WALKER"],
            ["9","A STAR IS BORN","MOTION PICTURE CAST RECORDING"],
            ["10","YOU'RE IN MY HEART","ROD STEWART"]
        ],
        columns: [
            { type: 'autonumber', title: 'Id', readOnly: true, primaryKey: true, },
            { type: 'text', width: '350px', title: 'Title' },
            { type: 'text', width: '250px', title: 'Artist' }
        ],
    }]
});
</script>
</html>
```
 
