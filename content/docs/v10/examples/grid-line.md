title: Spreadsheet Grid Lines
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, Rotate Text, Grid Line, Grid Lines
description: Discover how to disable and manage grid lines in Jspreadsheet for a customized spreadsheet experience.

# Spreadsheet Grid Line

The property **gridline: false** disables the worksheet grid line. Default: true  

## Examples

How to disable the grid line on the spreadsheet grid line. 

```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="toggle()" id="togglebtn"></p>

<script>
let toggle = function(worksheet) {
    if (worksheet.table.classList.contains('jss_nogridline')) {
        worksheet.table.classList.remove('jss_nogridline');
    } else {
        worksheet.table.classList.add('jss_nogridline');
    }
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
        gridline: false,
    }]
});

document.getElementById("togglebtn").onclick = () => toggle(worksheets[0]);
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

// Set the license
const license = '###license###';

// Toggle the data grid line
const toggle = function(worksheet) {
    if (worksheet.table.classList.contains('jss_nogridline')) {
        worksheet.table.classList.remove('jss_nogridline');
    } else {
        worksheet.table.classList.add('jss_nogridline');
    }
}

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Mazda', 2001, 2000, 1],
        ['Peugeot', 2010, 5000, 1],
        ['Honda Fit', 2009, 3000, 1],
        ['Honda CRV', 2010, 6000, 0],
    ]

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} toolbar={true} gridline={true}>
                <Worksheet data={data} />
            </Spreadsheet>
            <input type="button" value="toggle()" onClick={() => toggle(spreadsheet.current[0])} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :toolbar="true">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="toggle()" @click="toggle" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

// Set the license
const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        toggle() {
            let worksheet = this.$refs.spreadsheet.current[0];
            if (worksheet.table.classList.contains('jss_nogridline')) {
                worksheet.table.classList.remove('jss_nogridline');
            } else {
                worksheet.table.classList.add('jss_nogridline');
            }
        }
    },
    data() {
        const data = [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ];

        return {
            data,
            license,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input type="button" value="toggle" (click)="toggle()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                minDimensions: [8,0],
                data: [
                    ['Mazda', 2001, 2000, 1],
                    ['Peugeot', 2010, 5000, 1],
                    ['Honda Fit', 2009, 3000, 1],
                    ['Honda CRV', 2010, 6000, 0],
                ],
            }]
        });
    }
    toggle() {
        if (this.worksheet[0].table.classList.contains('jss_nogridline')) {
            this.worksheet[0].table.classList.remove('jss_nogridline');
        } else {
            this.worksheet[0].table.classList.add('jss_nogridline');
        }
    }
}
```
 
