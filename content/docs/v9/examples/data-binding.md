title: Data Grid - Data Binding
keywords: Jspreadsheet, javascript, plugins, spreadsheet, data-binding
description: Binding the data to be updated automatically when the cell value changes.



# Spreadsheet

In the following example, the data variable will be automatically updated when the cell value changes. 

The following content will be the content of the data variable.    

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<div id='console'></div><br>

<input type='button' value='Get the content of the data variable' id="consolelog" />

<script>
let data = [
    {
       "id":1,
       "name":"Jorge",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3120",
    },
    {
       "id":2,
       "name":"Antonio",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3121",
    },
    {
       "id":3,
       "name":"Manoel",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3123",
    },
    {
       "id":4,
       "name":"Pedro",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3124",
    },
    {
       "id":5,
       "name":"Carlos",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3125",
    },
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        minDimensions: [5, 5],
        worksheetName: 'employees',
        columnDrag: false,
    }]
});

document.getElementById("consolelog").onclick = function() { document.getElementById('console').innerHTML = JSON.stringify(data) }
</script>
</html>
```
 
