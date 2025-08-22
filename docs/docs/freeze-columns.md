title: Implementing Freeze Columns in Spreadsheets
keywords: Jspreadsheet, freeze columns, data grid customization, JavaScript spreadsheets, Excel-like freeze functionality, floating columns, spreadsheet column freezing
description: Explore utilizing freeze columns in your spreadsheet for enhanced data viewing. This guide covers configuration settings and methods related to freezing columns in Jspreadsheet.

# Freeze Columns

Freezing columns in a spreadsheet allows you to keep specific columns visible while scrolling through the sheet. This feature helps keep essential data in view, even when working with large amounts of data. You can enable this feature either during the initialization of the grid or programmatically using the `setFreezeColumns` method. 

{.secondary}
> **Note** Freeze columns feature only works when the `tableOverflow` or `fullscreen` property is enabled.


## Documentation

### Methods

Define or reset the number of freeze columns programmatically.

| Method                             | Description                                                                                                                                |
| -----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| setFreezeColumns(number\|number[]) | Freeze the column numbers. It accepts a number or a array of consecutive numbers.<br/>`setFreezeColumns(columns: Number\|Number[]) : void` |
| resetFreezeColumns()               | Remove all freeze columns.<br/>`resetFreezeColumns() : void`                                                                               |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property                                | Description                                             |
| ----------------------------------------|---------------------------------------------------------|
| freezeColumns: number\|number[]         | Define the frozen columns on initialization.            |
| freezeColumnControl: boolean Enterprise | Enable the freeze column manual control. Default: false |


### Events

Available events.

| Event                   | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| onfreezecolumns         | `onfreezecolumns(worksheet: Object, columns: Number[]) : void`   |


## Examples

### Basic Freeze Columns Example.

This example demonstrates how to initially set up two frozen columns in the spreadsheet and provides a method to adjust this setting via a button programmatically.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br><br>

<input type="button" value="setFreezeColumns(2)" id="btn1" />
<input type="button" value="resetFreezeColumns()" id="btn2" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: '800px',
        freezeColumns: 1
    }]
});

document.getElementById("btn1").onclick = () => spreadsheet[0].setFreezeColumns(2)
document.getElementById("btn2").onclick = () => spreadsheet[0].resetFreezeColumns()
</script>
</html>
```

```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[50, 20]} tableOverflow={true} tableWidth="800" freezeColumns="1"/>
            </Spreadsheet>
            <button onClick={() => spreadsheet.current[0].setFreezeColumns(2)}>setFreezeColumns(2)</button>
            <button onClick={() => spreadsheet.current[0].resetFreezeColumns()}>resetFreezeColumns()</button>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[50,20]" :tableOverflow="true" tableWidth="800" freezeColumns="1" />
    </Spreadsheet>
    <button @click="handleSetFreeze">setFreezeColumns(2)</button>
    <button @click="handleReset">resetFreezeColumns()</button>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        handleSetFreeze: function () {
            this.$refs.spreadsheet.current[0].setFreezeColumns(2)
        },
        handleReset: function () {
            this.$refs.spreadsheet.current[0].resetFreezeColumns()
        }
    },
    data() {
        return {
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

@Component({
    standalone: true,
    selector: "app-root",
    template: `
    <div #spreadsheet></div>
    <button (click)="handleSetFreeze()">setFreezeColumns(2)</button>
    <button (click)="handleReset()">resetFreezeColumns()</button>
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
            worksheets: [{
                minDimensions: [50,20],
                tableOverflow: true,
                tableWidth: '800px',
                freezeColumns: 1
            }]
        });
    }

    handleSetFreeze() {
        this.worksheets[0].setFreezeColumns(2)
    }

    handleReset() {
        this.worksheets[0].resetFreezeColumns()
    }
}
```

{.enterprise}
### Manual Freeze Column Controls

Enable users to manually set the number of frozen columns through manual freeze controls.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: '800px',
        freezeRowControl: true,
        freezeColumnControl: true,
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

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet
                minDimensions={[50,20]}
                tableOverflow
                tableWidth="800"
                freezeRowControl
                freezeColumnControl />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet
            :minDimensions="[50,20]"
            :tableOverflow="true"
            tableWidth="800px"
            :freezeRowControl="true"
            :freezeColumnControl="true" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
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

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
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
                minDimensions: [50,20],
                tableOverflow: true,
                tableWidth: '800px',
                freezeRowControl: true,
                freezeColumnControl: true,
            }]
        });
    }
}
```
 
