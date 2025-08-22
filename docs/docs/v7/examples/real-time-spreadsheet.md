title: Real-time Spreadsheets with Jspreadsheet Pro Version 7
keywords: Jspreadsheet, Jexcel, javascript, read-time spreadsheet
description: Create real-time spreadsheets using Jspreadsheet Pro and socket.io.



# Real-time Spreadsheet

The Jspreadsheet Cloud allows spreadsheets to be shared online in real-time.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
     cloud: '78335689-3dc3-4dc3-a854-68e9633a5db6',
     license: '###license###',
});
</script>
</html>
```
 
