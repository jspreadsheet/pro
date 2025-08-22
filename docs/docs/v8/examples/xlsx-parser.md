title: XLSX to Jspreadsheet parser
keywords: Jspreadsheet, javascript, plugins, spreadsheet, xlsx, xlsx parser, xlsx to jss converter
description: This example shows how to convert a local XLSX file to Jspreadsheet using the XLSX parser extension.



# XLSX Extension

The XLSX parser is not part of the native distribution, and requires a special license.

You might experience differences from the original files due to known limitations, depending on the file format and non-implemented features. We are constantly improving based on our users' feedback, so feel free to submit any improvement requests 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://jspreadsheet.com/v8/plugins/parser.js"></script>

<div id="spreadsheet"></div>

<input type="file" name="file" id='file' onchange="load(event)" style='display:none'>

<input type='button' value='Load a XLSX file from my local computer' id="loadlocal">

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Set extensions
jspreadsheet.setExtensions({ parser });

// Create the spreadsheet from a local file
let load = function(e) {
    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        onload: function(config) {
            jspreadsheet(document.getElementById('spreadsheet'), config);
        },
    });
}

document.getElementById("loadlocal").onclick = () => document.getElementById('file').click()
document.getElementById("file").onchange = load
</script>
</html>
```
 
