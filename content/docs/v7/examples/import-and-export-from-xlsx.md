title: Import and Export from XLSX files
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, export, import
description: Learn how to import and export from XLSX files.

# Import and export from XLSX files

This examples shows the JSS Parser and JSS Render premium extensions and required specific licenses. The extensions helps to convert a XLSX file into JSS and export a JSS spreadsheet to a XLSX file. Both extensions require a specific license. 

The best results would be in combination with Jspreadsheet Version 8 with Formula Pro

## Using CDN

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser@1.1.1/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/render@1.2.0/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your license
jspreadsheet.license = '###license###';

//Set extensions
jspreadsheet.setExtensions({ parser, render });

// Create the spreadsheet from a local file
let load = function(e) {
    // Destroy any existing JSS
    jspreadsheet.destroy(document.getElementById('spreadsheet'));

    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        onload: function(config) {
            jspreadsheet(document.getElementById('spreadsheet'), config.worksheets);
        },
    });
}

let download = function() {
    // Render receives the DOM Element
    jspreadsheet.render(document.getElementById('spreadsheet'));
}
</script>
</html>
```
## Using NPM

{.ignore}

```javascript
import React, {useRef, useEffect} from "content/docs/v7/examples/react";
import jspreadsheet from "jspreadsheet-pro";
import parser from "@jspreadsheet/parser";
import "jspreadsheet-pro/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function App() {
    const spreadsheetRef = useRef(null);
    const license = "###license###";

    jspreadsheet.license = license;
    jspreadsheet.setExtensions({parser});

    //Create the spreadsheet from a local file
    let load = function (e) {
        // Destroy any existing JSS
        jspreadsheet.destroy(spreadsheetRef.current);

        // Parse XLSX file and create a new spreadsheet
        jspreadsheet.parser({
            file: e.target.files[0],
            onload: function (config) {
                jspreadsheet(spreadsheetRef.current, config.worksheets);
            }
        });
    };

    return (
        <div>
            <div ref={spreadsheetRef}/>
            <input type="file" name="file" id="file" onChange={(e) => load(e)}/>
        </div>
    );
}
```

### Working Example on codesandbox

See a working data grid example with the option to import from XLSX and export to XLSX on codesandbox.

<https://codesandbox.io/s/jss-spreadsheet-to-xlsx-z0sol>
