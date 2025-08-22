title: Text Rotation in Jspreadsheet Spreadsheets
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, Text Rotation, Data Grid, Web Application, Web Development, Data Presentation
description: How to implement text rotation in Jspreadsheet spreadsheets.

# Rotate text

How to rotate the data grid cell text between -90 to 90 degrees. 

## Documentation

### Methods

| Method               | Description                                                                                 |
| ---------------------|---------------------------------------------------------------------------------------------|
| rotate(mixed, value) | Rotate the spreadsheet cell text.<br/>`rotate(cell: string\|array, number: number) : void` |

 

### Initial Settings

The initial definition for a `text rotation` is using the property cells.  

## Examples

How to rotate the cell text between -90 to 90 degrees. 

```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Rotate A1 (-90deg)" id="rotatebtn"></p>

<script>
let rotate = function(b) {
    worksheets[0].rotate('A1', -90);
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
        columns: [{},{},{},{ type:'checkbox' }],
        cells: {
            A1: { rotate: 90, }
        },
    }]
});

document.getElementById("rotatebtn").onclick = (e) => rotate(e.target)
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

// Set the license
const license = '###license###';

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
    // Columns
    const columns = [{},{},{},{ type:'checkbox' }];
    // Cells
    const cells: {
        A1: { rotate: 90 }
    }

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} cells={cells} />
            </Spreadsheet>
            <input type={"button"} value={"Fullscren"} onClick={() => spreadsheet.current[0].rotate('A1', -90)} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :cells="cells" />
    </Spreadsheet>
    <p><input type="button" value="Rotate A1 (-90deg)" @click="this.$refs.spreadsheet.current[0].rotate('A1', -90);"></p>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ]
        // Columns
        const columns = [{},{},{},{ type:'checkbox' }];
        // Cells
        const cells: {
            A1: { rotate: 90 }
        }
        return {
            data,
            columns,
            cells,
            license
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

// Data
const data = [
    ['Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto\'s Rage!, and Spyro: Year of the Dragon'],
    ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
];

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <p><input type="button" value="Rotate A1 (-90deg)" (click)="this.worksheets[0].rotate('A1', -90)"></p>
    `
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            data: [
                ['Mazda', 2001, 2000, 1],
                ['Peugeot', 2010, 5000, 1],
                ['Honda Fit', 2009, 3000, 1],
                ['Honda CRV', 2010, 6000, 0],
            ],
            columns: [{},{},{},{ type:'checkbox' }],
            cells: {
                A1: { rotate: 90, }
            },
        });
    }
}
```
 
