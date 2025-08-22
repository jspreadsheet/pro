title: Progressbar Column Type Editor
keywords: Jspreadsheet, javascript, plugins, spreadsheet, editors, javascript progressbar
description: A quick example using the data grid progressbar column type.



# progressbar Column Type

A basic example using the native data grid progressbar editor. 

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
 
