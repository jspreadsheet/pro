title: Jspreadsheet to XLSX render
keywords: Jspreadsheet, javascript, plugins, spreadsheet, xlsx, xlsx render, jss to xlsx converter, export to XLSX
description: This example shows how to export a Jspreadsheet to XLSX using the XLSX render extension.



# JSS to XLSX export Extension

XLSX render is a premium extension and not part of the default distribution.

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://jspreadsheet.com/v9/plugins/parser.js"></script>
<script src="https://jspreadsheet.com/v9/plugins/render.js"></script>

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Export to XLSX' id="downloadbtn">

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ parser, render });

// Import a XLSX file from a remote file
jspreadsheet.parser({
    url: '/jspreadsheet/list.xlsx',
    onload: function(config) {
        jspreadsheet(document.getElementById('spreadsheet'), config);
    },
});

// Download method
document.getElementById("downloadbtn").onclick = function() {
    // Render to XLSX
    jspreadsheet.render(document.getElementById('spreadsheet'), {
        filename: 'export.xlsx',
    });
}
</script>
</html>
```
 
