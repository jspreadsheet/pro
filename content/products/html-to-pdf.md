title: Create Personalized PDFs from Templates with Table Data Interpolation
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet, formulas, excel formulas, excel-like formulas, JSS Formula Premium, JavaScript plugin, NodeJS, browser-based spreadsheet, advanced spreadsheet formulas, range handling, variable handling, JS precision, worksheet management, spreadsheet software, Excel compatibility, Google Sheets compatibility, formula parsing, formula execution, spreadsheet-like formulas, spreadsheet calculation, data manipulation, advanced data grids, dynamic spreadsheets, Excel to web
description: The HTML to PDF Converter is an extension for Jspreadsheet that enables users to generate PDF documents from HTML templates with data interpolation from worksheet rows. This functionality allows for dynamic creation of personalized PDFs, such as certificates, reports, or letters, by replacing placeholders in the template with actual data from the spreadsheet. Designed for simplicity and efficiency, the HTML to PDF Converter extension provides an effective solution for producing customized documents directly from spreadsheet data.

# HTML to PDF

The HTML to PDF Converter is an extension for Jspreadsheet that enables users to generate PDF documents from HTML templates with data interpolation from worksheet rows. This functionality allows for dynamic creation of personalized PDFs, such as certificates, reports, or letters, by replacing placeholders in the template with actual data from the spreadsheet. Designed for simplicity and efficiency, the HTML to PDF Converter extension provides an effective solution for producing customized documents directly from spreadsheet data.

## Structuring Templates

Templates can be structured using HTML to define the layout, with the syntax $[HeaderTitle] used for data interpolation. For example:

{.ignore-execution}
```html
<div>
    <p>$[Name] is $[Age] years old</p>
</div>
```

## Documentation

### Installation

Please choose one of the following options 

#### Using NPM

```bash
npm install @jspreadsheet/htmlToPdf
```
 
#### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/htmlToPdf/dist/index.min.js"></script>
```
 

### Setup

To open the extension panel, follow these steps:

#### Set the Extension in Jspreadsheet

Add the HTML to PDF Converter extension to Jspreadsheet by setting it in the extensions object:

{.ignore-execution}
```javascript
jspreadsheet.setExtensions({ htmlToPdf });
```

#### Call the Opening Function

Once the extension is set, open the extension panel from the worksheet instance using the following code:

{.ignore-execution}
```javascript
// Call the extension panel from the worksheet instance
worksheet.parent.tools.htmlToPdf(true);
```

## Code samples

### Opening from a button

In this example, we show how you can open the extension panel directly from a button.

For this example, try adding this text below as the template:

```
<table>
    <tr>
        <th>Name</th>
        <th>Grade 1</th>
        <th>Grade 2</th>
        <th>Grade 3</th>
        <th>Grade 4</th>
    </tr>
    <tr>
        <td>$[Name]</td>
        <td>$[Grade 1]</td>
        <td>$[Grade 2]</td>
        <td>$[Grade 3]</td>
        <td>$[Grade 4]</td>
    </tr>
</table>
```

```html
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/htmlToPdf/dist/index.min.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="Open the panel" id="open-btn" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["John", 7, 9, 5, 10],
            ["Ana", 10, 9, 9.5, 10],
            ["Jane", 5, 10, 8, 6],
            ["Carlos", 4.5, 3, 6, 3.5],
        ],
        // Define the titles so you can reference them in templates
        columns: [{ title: "Name" }, { title: "Grade 1" }, { title: "Grade 2" }, { title: "Grade 3" }, { title: "Grade 4" }]
    }]
});

document.getElementById("open-btn").onclick = (e) => worksheets[0].parent.tools.htmlToPdf(true);
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import htmlToPdf from "@jspreadsheet/htmlToPdf";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense("###license###");

// Set extension
jspreadsheet.setExtensions({ htmlToPdf });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef(null)

    const data = [
        ["John", 7, 9, 5, 10],
        ["Ana", 10, 9, 9.5, 10],
        ["Jane", 5, 10, 8, 6],
        ["Carlos", 4.5, 3, 6, 3.5],
    ]

    // Define the titles so you can reference them in templates
    const columns = [{ title: "Name" }, { title: "Grade 1" }, { title: "Grade 2" }, { title: "Grade 3" }, { title: "Grade 4" }]

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} toolbar={true}>
                <Worksheet columns={columns} data={data}/>
            </Spreadsheet>
            <button onClick={() => spreadsheet.current[0].parent.tools.htmlToPdf(true)}>Open extension panel</button>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <input ref="button" type="button" value="Open extension panel" @click="handleOpening" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import htmlToPdf from "@jspreadsheet/htmlToPdf";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Set extension
jspreadsheet.setExtensions({ htmlToPdf })

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        handleOpening() {
            this.$refs.spreadsheet[0].parent.tools.htmlToPdf(true)
        }
    },
    data() {
        // Data
        const data = [
            ["John", 7, 9, 5, 10],
            ["Ana", 10, 9, 9.5, 10],
            ["Jane", 5, 10, 8, 6],
            ["Carlos", 4.5, 3, 6, 3.5],
        ]

        const columns = [{ title: "Name" }, { title: "Grade 1" }, { title: "Grade 2" }, { title: "Grade 3" }, { title: "Grade 4" }]

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import htmlToPdf from "@jspreadsheet/htmlToPdf";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set extension
jspreadsheet.setExtensions({ htmlToPdf })

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input #button type='button' value='Open extension panel' (click)="this.handleOpening()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("button") button: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Data
    data: data;
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ["John", 7, 9, 5, 10],
                    ["Ana", 10, 9, 9.5, 10],
                    ["Jane", 5, 10, 8, 6],
                    ["Carlos", 4.5, 3, 6, 3.5],
                ],
                columns: [{ title: "Name" }, { title: "Grade 1" }, { title: "Grade 2" }, { title: "Grade 3" }, { title: "Grade 4" }],
            }]
        });
    }
    handleOpening() {
        this.worksheets[0].parent.tools.htmlToPdf(true)
    }
}
```