title: Jspreadsheet Version 7 with Jquery
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and Jquery
description: An example of how to integrate Jspreadsheet with jQuery.

Examples


# Jquery

Creating a jspreadsheet javascript instance using jQuery

```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" onclick="$('#spreadsheet').jspreadsheet('insertRow')" />
<input type="button" value="Add new col" onclick="$('#spreadsheet').jspreadsheet('insertColumn')">

<script>
let options = {
    minDimensions:[10,10],
    license: '###license###',
}

$('#spreadsheet').jspreadsheet(options); 
</script>
</html>
```
 
