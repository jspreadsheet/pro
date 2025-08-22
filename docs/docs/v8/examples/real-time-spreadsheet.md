title: Real-time Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, read-time spreadsheet
description: Real-time spreadsheet sharing and collaboration with Jspreadsheet Cloud.

# Real-time Spreadsheet

[Jspreadsheet Cloud](/cloud) is a hosting service that allows you to share with other users in real-time. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://jspreadsheet.com/v8/plugins/cloud.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
     cloud: '78335689-3dc3-4dc3-a854-68e9633a5db6',
     plugins: { cloud },
});
</script>
</html>
```
 
