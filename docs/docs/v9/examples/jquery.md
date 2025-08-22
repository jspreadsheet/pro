title: Jquery Spreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, data grid, jquery spreadsheet
description: How to create a web-based spreadsheet using Jquery and Jspreadsheet.



# Jquery Spreadsheet

Create a web-based spreadsheet using jQuery and Jspreadsheet. 

```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" id="addrow"/>
<input type="button" value="Add new col" id="addcol"/>

<script>
let instance = $('#spreadsheet').jspreadsheet({
    worksheets: [{
        minDimensions:[8,10],
    }],
    license: '###license###'
});

document.getElementById("addrow").onclick = () => instance[0].insertRow();
document.getElementById("addcol").onclick = () => instance[0].insertColumn();
</script>
</html>
```
 
