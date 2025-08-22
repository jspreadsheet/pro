title: Spreadsheet Data Binding
keywords: Jspreadsheet, javascript, plugins, spreadsheet, data-binding
description: Binding the data to be updated automatically when the cell value changes.



# Spreadsheet

## Data Binding

In the following example, the data variable will be automatically updated when the cell value changes. 

 The following content will be the content of the data variable.    

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div><br/>

<div id='log'></div><br>

<input type='button' value='Get the content of the data variable' id="consolelog" />

<script>
let data = [
   {
      "id":1,
      "name":"Jorge",
      "role":"1",
      "parent":0,
      "img":"img/nophoto.jpg",
      "department":1,
      "extension":"3120",
   },
   {
      "id":2,
      "name":"Antonio",
      "role":"2",
      "parent":1,
      "img":"img/nophoto.jpg",
      "department":2,
      "extension":"3121",
   },
   {
      "id":3,
      "name":"Manoel",
      "role":"3",
      "parent":1,
      "img":"img/nophoto.jpg",
      "department":2,
      "extension":"3123",
   },
   {
      "id":4,
      "name":"Pedro",
      "role":"4",
      "parent":3,
      "img":"img/nophoto.jpg",
      "department":2,
      "extension":"3124",
   },
   {
      "id":5,
      "name":"Carlos",
      "role":"4",
      "parent":3,
      "img":"img/nophoto.jpg",
      "department":3,
      "extension":"3125",
   },
   {
      "id":6,
      "name":"Marcos",
      "role":"5",
      "parent":2,
      "img":"img/nophoto.jpg",
      "department":3,
      "extension":"3126",
   },
   {
      "id":7,
      "name":"Ana",
      "role":"6",
      "parent":2,
      "img":"img/nophoto.jpg",
      "department":3,
      "extension":"3127",
   },
   {
      "id":8,
      "name":"Nicolly",
      "role":"7",
      "parent":2,
      "img":"img/nophoto.jpg",
      "department":4,
      "extension":"3128",
   },
   {
      "id":9,
      "name":"Paulo",
      "role":"5",
      "parent":7,
      "img":"img/nophoto.jpg",
      "department":4,
      "extension":"3129",
   },
   {
      "id":10,
      "name":"Iris",
      "role":"5",
      "parent":7,
      "img":"img/nophoto.jpg",
      "department":4,
      "extension":"3130",
   }
]
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        minDimensions: [6, 5],
        worksheetName: 'Employees',
        columnDrag: false,
    }]
});

document.getElementById("consolelog").onclick = function() { document.getElementById('log').innerHTML = JSON.stringify(data) }
</script>
</html>
```
 
