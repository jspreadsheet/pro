title: Jquery Spreadsheet with Jspreadsheet Version 5
keywords: Jspreadsheet, javascript, using Jspreadsheet and Jquery
description: An example of how to integrate Jspreadsheet Pro version 5 with jQuery.



# Jquery

Creating a javascript data grid instance using jQuery.

```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" id="addrow"/>
<input type="button" value="Add new col" id="addcol"/>

<script>
let options = {
    minDimensions:[10,10],
    license: '39130-64ebc-bd98e-26bc4',
}

$('#spreadsheet').jspreadsheet(options);

$('#addrow').onclick = () => $('#spreadsheet').jspreadsheet('insertRow')
$('#addcol').onclick = () => $('#spreadsheet').jspreadsheet('insertColumn')
</script>
</html>
```
 
