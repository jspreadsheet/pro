title: Data Grid Collapsible Column Groups
keywords: Jspreadsheet, Jexcel, data grid, column groups, column grouping, collapsible groups, grouped columns, organized columns, column organization, column structure, column hierarchy
description: Create collapsible column groups in your Jspreadsheet data grid. Explore methods and settings for efficient organization and management of columns, enabling collapsible group functionality for a more streamlined and user-friendly data display.

# Group of Columns

Jspreadsheet allows the creation of collapsible groups of columns, which can help manage the available space in the workspace and quickly show or hide the columns within the group. This feature can be helpful when dealing with large datasets or when you want to organize similar columns more compactly and efficiently. 

## Documentation

### Methods

You can programmatically use one of the following methods to manage and interact with the group of columns feature.

| Method                             | Description                                                                                                      |
|------------------------------------|------------------------------------------------------------------------------------------------------------------|
| getColumnGroup()                   | Get all column groups.<br/>`getColumnGroup() : object`                                                           |
| setColumnGroup(number, number)     | Create a new collapsable group of columns.<br/>`setColumnGroup(columnNumber: Number, numOfItems: Number) : void` |
| resetColumnGroup(number)           | Reset the column group.<br/>`resetColumnGroup(columnNumber: Number) : void`                                      |
| openColumnGroup(number\|number[])  | Open a group of columns.<br/>`openColumnGroup(columnNumber?: Number\|Number[]) : void`                                     |
| closeColumnGroup(number\|number[]) | Close a group of columns.<br/>`closeColumnGroup(columnNumber?: Number\|Number[]) : void`                         |

 

### Events

The following are the available event methods related to the column grouping feature.

| Property          | Description                                                                                                                                            |
| ------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| ongroupcolumn     | When the user creates, updates or reset a group of columns<br/>`oncreatecolumngroup?: (worksheet: Object, column: Number, numOfItems: Number) => void` |
| onopencolumngroup | When the user opens a group of columns<br/>`onopencolumngroup?: (worksheet: Object, column: Number) => void`                                           |
| onclosecolumnroup | When the user closes a group of columns<br/>`onclosecolumnroup?: (worksheet: object, Object: Number) => void`                                          |

 

### Initial Settings

You can use one of the following properties to configure the data grid to display specific sets of columns upon initialization.

| Property        | Description                                          |
| ----------------|------------------------------------------------------|
| group?: number  | The number of columns.                               |
| state?: boolean | Initial state of this group. Default: false (closed) |

 

## Examples

### Basic collapsable column group

How to create a data grid collapse columns on Jspreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="setColumnGroup(0,3)" id="btn1" />
<input type="button" value="resetColumnGroup(0)" id="btn2" /></p>

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
        columns: [{},{},{},{},{},{ group: 5, state: false }], // group 5 columns, collapsed
    }]
});

document.getElementById("btn1").onclick = () => spreadsheet[0].setColumnGroup(0,3)
document.getElementById("btn2").onclick = () => spreadsheet[0].resetColumnGroup(0)
</script>
</html>
```

```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Data
let data = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Columns - group 5 columns, collapsed
    const columns = [{}, {}, {}, {}, {}, {group: 5, state: false}];

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet
                    data={data}
                    tableOverflow
                    tableWidth="800px"
                    tableHeight="400px"
                    columns={columns}/>
            </Spreadsheet>
            <input type="button" value="setColumnGroup(0,3)"
                   onClick={() => spreadsheet.current[0].setColumnGroup(0, 3)}/>
            <input type="button" value="resetColumnGroup(0)"
                   onClick={() => spreadsheet.current[0].resetColumnGroup(0)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <input type="button" value="setColumnGroup(0,3)" @click="setColumnGroup(0,3)" />
    <input type="button" value="resetColumnGroup(0)" @click="resetColumnGroup(0)" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
        setColumnGroup(column, numOfColumns) {
            this.$refs.spreadsheet.current[0].setColumnGroup(column, numOfColumns);
        },
        resetColumnGroup(column) {
            this.$refs.spreadsheet.current[0].resetColumnGroup(column);
        },
    },
    data() {
        return {
            // Worksheet data
            data: data,
            // Columns - group 5 columns, collapsed
            columns: [{},{},{},{},{},{ group: 5, state: false }],
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Data
let data: any = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="setColumnGroup(0,3)" (click)="this.worksheets[0].setColumnGroup(0,3)" />
        <input type="button" value="resetColumnGroup(0)" (click)="this.worksheets[0].resetColumnGroup(0);" />`
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
                {
                    data: data,
                    columns: [{},{},{},{},{},{ group: 5, state: false }],
                }
            ]
        });
    }
}
```
 
