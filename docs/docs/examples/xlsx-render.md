title: JSS to XLSX: Create Excel Files from Jspreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, XLSX, XLSX render, JSS to XLSX converter, export to XLSX, data grid, conversion
description: Learn how to export a Jspreadsheet to XLSX format using the XLSX render extension. Follow this example to export your Jspreadsheet data to Excel files, enabling easy sharing, distribution, and compatibility with other applications.

# Examples

[Back to Examples](/docs/examples "Back to the examples section")

## JSS to XLSX export Extension

XLSX render is a premium extension and not part of the default distribution.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://jspreadsheet.com/v11/plugins/parser.js"></script>
<script src="https://jspreadsheet.com/v11/plugins/render.js"></script>

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Export to XLSX' id="downloadbtn">

<script>
const root = document.getElementById('spreadsheet');
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ parser, render });
// Import a XLSX file from a remote file
jspreadsheet.parser({
    url: '/jspreadsheet/list.xlsx',
    onload: function(config) {
        jspreadsheet(root, config);
    },
});
// Download method
document.getElementById("downloadbtn").onclick = function() {
    // Render to XLSX
    jspreadsheet.render(root, {
        filename: 'export.xlsx',
    });
}
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ parser, render });

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Import a XLSX file from a remote file
    useEffect(() => {
        jspreadsheet.parser({
            url: '/jspreadsheet/list.xlsx',
            onload: function(config) {
                jspreadsheet(spreadsheet.current, config);
            },
        });
    }, []);

    // Download method
    const download = () => {
        // Render to XLSX
        jspreadsheet.render(spreadsheet.current[0].parent, {
            filename: 'export.xlsx',
        });
    }

    // Render data grid component
    return (
        <>
            <div ref={spreadsheet}></div>
            <input type={"button"} value={"Download"} onClick={() => download()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
    <input type="button" value="Import CSV" @click="download" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Define the data grid license
const license = '###license###';

// Define the data grid extensions
const extensions = { render };

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        download() {
            // Spreadsheet instance
            jspreadsheet.render(this.$refs.spreadsheet.current[0].parent, {
                filename: 'file.xlsx',
            });
        }
    },
    data() {
        const spreadsheet = ref(null);

        return {
            spreadsheet,
            license,
            extensions,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import render from "@jspreadsheet/render";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ render });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
    <input type="button" value="Export XLSX" (click)="this.export()" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                { minDimensions: [6, 6] },
                { minDimensions: [6, 6] }
            ]
        });
    }
    export() {
        // Spreadsheet instance
        jspreadsheet.render(this.worksheets[0].parent, {
            filename: 'file.xlsx',
        });
    }
}
```
 
