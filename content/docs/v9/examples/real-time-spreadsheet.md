title: Real-time Spreadsheet Example
keywords: Jspreadsheet, Jexcel, javascript, read-time spreadsheet
description: Real-time spreadsheet sharing and collaboration with Jspreadsheet Cloud.



# Real-time Spreadsheet

[Jspreadsheet Cloud](/cloud) is a hosting service that allows you to share with other users in real-time. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v9/plugins/cloud.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ cloud })

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
     cloud: '78335689-3dc3-4dc3-a854-68e9633a5db6',
});
</script>
</html>
```
 
