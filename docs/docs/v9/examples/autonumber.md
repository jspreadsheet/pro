title: Auto Number Column Type
keywords: Jspreadsheet, javascript, plugins, spreadsheet, editors, javascript progressbar
description: The autonumber column generates a sequence number for the rows.



# Auto Number Column Type

The native auto increment column type can be used as shown below. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
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
 
