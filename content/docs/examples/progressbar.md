title: Dynamic Bar Representation for Numeric Values: Progressbar Column Type
keywords: Jspreadsheet, javascript, plugins, spreadsheet, progressbar column type, data visualization, visual representation, progress indicator
description: Visualize numerical values as a range bar from 0 to 100, adding dynamic and intuitive data representation to your Jspreadsheet data grid.

# Progressbar

A basic example using the native progressbar editor. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ '1', 'Write a letter', '100' ],
            [ '2', 'Review CV', '60' ],
            [ '3', 'Buy ticket', '5' ],
        ],
        columns: [
            { type: 'text', title: 'Id' },
            { type: 'text', width: '250px', title: 'Activity' },
            { type: 'progressbar', width: '250px', title: 'Progress' },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ '1', 'Write a letter', '100' ],
        [ '2', 'Review CV', '60' ],
        [ '3', 'Buy ticket', '5' ],
    ]
    // Columns
    const columns = [
        { type: 'text', title: 'Id' },
        { type: 'text', width: '250px', title: 'Activity' },
        { type: 'progressbar', width: '250px', title: 'Progress' },
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ '1', 'Write a letter', '100' ],
            [ '2', 'Review CV', '60' ],
            [ '3', 'Buy ticket', '5' ],
        ]
        // Columns
        const columns = [
            { type: 'text', title: 'Id' },
            { type: 'text', width: '250px', title: 'Activity' },
            { type: 'progressbar', width: '250px', title: 'Progress' },
        ]

        return {
            data,
            columns,
            license,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['1', 'Write a letter', '100'],
                    ['2', 'Review CV', '60'],
                    ['3', 'Buy ticket', '5'],
                ],
                columns: [
                    { type: 'text', title: 'Id' },
                    { type: 'text', title: 'Activity' },
                    { type: 'progressbar', title: 'Progress' },
                ]
            }]
        });
    }
}
```
 
