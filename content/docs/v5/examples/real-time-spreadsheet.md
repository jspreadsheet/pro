title: Real-time Spreadsheet with Jspreadsheet Version 5
keywords: Jspreadsheet, javascript, read-time spreadsheet
description: More about online spreadsheet collaboration using socket.io.



# Real time spreasheet

The Jspreadsheet cloud allows spreadsheets to be shared online in real time using socket.io.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
     cloud: '9804a97e-f2ee-4ef2-bdd2-5641d3686765',
     license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
