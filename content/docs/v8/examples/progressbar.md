title: Spreadsheet Progressbar Column Type
keywords: Jspreadsheet, javascript, plugins, spreadsheet, editors, javascript progressbar
description: This example implements a spreadsheet with the progressbar column type.



# Progressbar Column Type

A basic example using the native progressbar editor. 

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
    data: [
        [ '1', 'Write a letter', '100' ],
        [ '2', 'Review CV', '60' ],
        [ '3', 'Buy ticket', '5' ],
    ],
    columns: [
        { type: 'text', title: 'Id' },
        { type: 'text', width: '250px', title: 'Activity' },
        { type: 'progressbar', width: '250px', title: 'Progress' },
     ]
});
</script>
</html>
```
 
