title: Auto increment column type
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, autonumber, autoincrement column type
description: Learn how to use the autonumber column type in your spreadsheet to enhance the syncing of the spreadsheet data with databases, as well as date persistence.



# Autonumber

Learn how to use the native auto increment column type.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />


<div id="spreadsheet"></div>

<script>
let data = [
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
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'autonumber', title: 'Id', readOnly: true },
        { type: 'text', width: '350px', title: 'Title' },
        { type: 'text', width: '250px', title: 'Artist' },
     ],
     license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
