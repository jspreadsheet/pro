title: Progressbar column type
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, progressbar column type
description: Include a progress bar column type in your spreadsheet to create a better visual experience for your applications.


# Progressbar Column Type

A quick example using the progressbar data grid column type.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />


<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', 'Write a letter', '100' ],
    [ '2', 'Review CV', '60' ],
    [ '3', 'Buy ticket', '5' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'text', title: 'Id' },
        { type: 'text', width: '250px', title: 'Activity' },
        { type: 'progressbar', width: '250px', title: 'Progress' },
     ],
     license: '###license###',
});
</script>
</html>
```
 
