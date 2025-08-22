title: JSS Render: Efficiently Generate XLSX Files from Jspreadsheet Data Grids
keywords: Jspreadsheet, Jexcel, javascript, data grid, export to excel, spreadsheet exporter, XLSX, JSS Render, JSS Render extension, generate XLSX files, data grids to XLSX, Jspreadsheet to Excel, Excel file creation, spreadsheet conversion, XLSX generation, spreadsheet to XLSX, data export, data transformation, data management, spreadsheet solutions, data grid plugin
description: The JSS Render extension enables the conversion of JSS spreadsheets into XLSX files, simplifying data export and ensuring compatibility.

![Export to XLSX](img/data-grid/export-to-xlsx.svg){.icon}

# Export to XLSX

The JSS Render is an extension for Jspreadsheet that enables users to convert their data grids into XLSX files. This functionality simplifies exporting spreadsheet data, making it compatible with other systems or for sharing. It has been designed with efficiency in mind, and the JSS Render extension offers a straightforward solution for data conversion.


{.green}
> **Export to XLSX using NodeJS**\
> From version 11, it is possible to generate files on the backend using NodeJS

## Documentation

### Available settings

| Property                                                   | Description                                                      |
|------------------------------------------------------------|------------------------------------------------------------------|
| filename: string                                           | File name. Default: jspreadsheet.xlsx                            |
| onbeforerender: (spreadsheetConfig) => spreadsheetConfig   | Intercept the render to overwrite and spreadsheet configuration. |
| onbeforesave: (blob) => boolean \| void                    | Intercept the file generation.                                   |
| onsuccess: (file) => void                                  | Use to intercept the blob file                                   | 
 

## Installation

Please choose one of the following options 

### Using NPM

```bash
$ npm install @jspreadsheet/render
```

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/render/dist/index.min.js"></script>
```

### Excel Limitations

When exporting a file to XLSX using this extension, it's essential to be aware of certain limitations in Excel that are not present in Jspreadsheet. Despite these limitations, the extension is designed to handle data effectively during export. The list below highlights some of these constraints, though it is not exhaustive, and more limitations may be identified in the future:

- **Worksheet Name Length**: Excel restricts worksheet names to 30 characters.
- **Dynamic Source for Dropdowns**: Due to Excel's limitations, dropdowns with a dynamic source that spans more than a single row or column are ignored during rendering.
- **Cell vs. Column Dropdowns**: If a cell contains dropdowns configured at the column level and within the cell itself, its specific configuration takes precedence during export. Additionally, if a cell has both a dropdown and a list validation, the list validation will be excluded from the export.
- **Dropdown Source Character Limit**: When exporting a dropdown, if the total number of characters in the source exceeds Excel's allowed limit, the export process will trim options from the source to prevent the resulting XLSX file from breaking.
- **Groups**: Groups that are only partially within other groups are not exported due to Excel limitations; Excel allows up to seven levels of groups, so if a group is nested within seven or more other groups, it is not exported;

## Code samples

### Create a XLSX file using JavaScript

How to create an online XLSX exporter 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/render/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<p><input type="button" value="Download" id="btn1" /></p>

<script>
const download = function(spreadsheet) {
    jspreadsheet.render(spreadsheet, {
        filename: 'file.xlsx',
    });
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Add-on for Spreadsheet
jspreadsheet.setExtensions({ render });

// Create the spreadsheets
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [6, 6] },
        { minDimensions: [6, 6] },
    ],
});

document.getElementById("btn1").onclick = function() {
    download(worksheets[0].parent);
}
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Add-on for your JSS data grid
jspreadsheet.setExtensions({ render });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    const download = function() {
        jspreadsheet.render(spreadsheet.current[0].parent.el, {
            filename: 'file.xlsx',
        });
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet}>
                <Worksheet />
                <Worksheet />
            </Spreadsheet>
            <input type="button" value="Download" onClick={() => download()} />
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
    <input type="button" value=Download" @click="download" />
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
            jspreadsheet.render(this.$refs.spreadsheet.current[0].parent.el, {
                filename: 'file.xlsx',
            });
        }
    },
    data() {
        return {
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
import render from "@jspreadsheet/render";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ render });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
    <input type="button" value="Generate XLSX" (click)="this.export()" />`
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
        jspreadsheet.render!(this.worksheets[0].parent.el, {
            filename: 'file.xlsx',
        });
    }
}
```
 
### Backend XLSX Export

From version Jspreadsheet version 11 you can generate XLSX files on your backend as the example below. 

{.ignore}
```javascript
const jspreadsheet = require('jspreadsheet');
const formula = require('@jspreadsheet/formula-pro');
const render = require('@jspreadsheet/render');
const { writeFile } = require('node:fs/promises');

jspreadsheet.setLicense({
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: '###license###'
});

jspreadsheet.setExtensions({ formula,render })

let spreadsheet = jspreadsheet(null, {
    worksheets: [{
        worksheetName: "Sheet1",
        data: [
            ['10', '15', '20', '=OFFSET(A1, 2, 2)', '=OFFSET(A1, 0, 0, 2, 2)'],
            ['67', '44', '99', '=OFFSET(A1, 0, 2)', ''],
            ['11', '16', '21', '=OFFSET(A1, 2, 0)', ''],
            ['68', '45', '100'],
        ]
    }],
});

jspreadsheet.render(spreadsheet[0].parent, {
    onsuccess: async function(file) {
        // Save the file to the backend
        await writeFile('test.xlsx', file);
    }
});
```

## Examples

### Integration with React

[React spreadsheet working example.](https://codesandbox.io/s/online-spreadsheet-with-react-and-jss-us1cm) 

