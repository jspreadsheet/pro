title: Data Grid Collapsible Row Groups
keywords: Jspreadsheet, Jexcel, data grid, row groups, row grouping, collapsible groups, hierarchical data, grouped data, organized rows, row organization, row structure, row hierarchy
description: How to create collapsible rows group in your JSS data grid. Explore the methods and settings to organize and manage rows efficiently, enabling a collapsible group feature for a more compact and user-friendly data display.

# Group of Rows

Jspreadsheet allows the creation of collapsible groups of rows, which can help manage the available space in the workspace and quickly show or hide the rows within the group. This feature can be helpful when dealing with large datasets or when you want to organize similar rows more compactly and efficiently. 

## Documentation

### Methods

You can programmatically use one of the following methods to manage and interact with the group of rows feature.

| Method                      | Description                                                                                             |
| ----------------------------|---------------------------------------------------------------------------------------------------------|
| getRowGroup()               | Get all row groups.<br/>`getRowGroup() : object`                                                        |
| setRowGroup(number, number) | Create a new collapsable group of rows.<br/>`setRowGroup(rowNumber: Number, numOfItems: Number) : void` |
| resetRowGroup(number)       | Reset the row group.<br/>`resetRowGroup(rowNumber: Number) : void`                                      |
| openRowGroup(number)        | Open a group of rows.<br/>`openRowGroup(rowNumber: Number) : void`                                      |
| closeRowGroup(number)       | Close a group of rows.<br/>`closeRowGroup(rowNumber: Number) : void`                                    |

 

### Events

The following are the available event methods related to the row grouping feature.

| Property        | Description                                                                                                                                   |
| ----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| ongrouprow      | When the user creates, updates or reset a group of rows<br/>`oncreaterowgroup?: (worksheet: Object, row: Number, numOfItems: Number) => void` |
| onopenrowgroup  | When the user opens a group of rows<br/>`onopenrowgroup?: (worksheet: Object, row: Number) => void`                                           |
| oncloserowgroup | When the user closes a group of rows<br/>`oncloserowgroup?: (worksheet: Object, row: Number) => void`                                         |

 

### Initial Settings

You can use one of the following properties to configure the data grid to display specific sets of rows upon initialization.

| Property        | Description                                          |
| ----------------|------------------------------------------------------|
| group?: number  | The number of rows.                                  |
| state?: boolean | Initial state of this group. Default: false (closed) |

 

## Examples

### Basic collapsable row group.

How to create a data grid collapse rows on Jspreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="setRowGroup(0,3)" id="setgroup"/>
<input type="button" value="resetRowGroup(0)" id="resetgroup"/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the data
// Data
let data = [];

for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

// Create a new spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '400px',
        rows: { 6: { group: 3 }},
    }]
});

document.getElementById("setgroup").onclick = () => spreadsheet[0].setRowGroup(0,3);
document.getElementById("resetgroup").onclick = () => spreadsheet[0].resetRowGroup(0);
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    let data = [];
    for (let j = 0; j < 50; j++) {
        data[j] = [];
        for (let i = 0; i < 50; i++) {
            data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
        }
    }
    // Rows settings
    const rows = {6: {group: 3}}

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet
                    data={data}
                    tableOverflow
                    tableWidth="800px"
                    tableHeight="400px"
                    rows={rows}/>
            </Spreadsheet>
            <input type="button" value="setRowGroup(0,3)" onClick={() => spreadsheet.current[0].setRowGroup(0, 3)}/>
            <input type="button" value="resetRowGroup(0)" onClick={() => spreadsheet.current[0].resetRowGroup(0)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :rows="rows" tableOverflow tableWidth="800px" tableHeight="400px" />
    </Spreadsheet>
    <input type="button" value="setRowGroup(0,3)" @click="setRowGroup(0,3)" />
    <input type="button" value="resetRowGroup(0)" @click="resetRowGroup(0);" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

// Data
let data = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        setRowGroup(row, numOfRows) {
            this.$refs.spreadsheet.current[0].setRowGroup(row, numOfRows);
        },
        resetRowGroup(row) {
            this.$refs.spreadsheet.current[0].resetRowGroup(row);
        },
    },
    data() {
        return {
            // Worksheet data
            data: data,
            // Rows
            rows: { 6: { group: 3 }},
            // License
            license: license,
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Data
let data = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="setRowGroup(0,3)" (click)="this.worksheets[0].setRowGroup(0,3)" />
        <input type="button" value="resetRowGroup(0)" (click)="this.worksheets[0].resetRowGroup(0);" />`
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
                    data: data,
                    tableOverflow: true,
                    tableWidth: '800px',
                    tableHeight: '400px',
                    rows: { 6: { group: 3 }},
                }]
        });
    }
}
```
 
