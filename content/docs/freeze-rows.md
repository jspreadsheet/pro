title: Implementing Freeze Rows in Spreadsheets
keywords: Jspreadsheet, freeze columns, data grid customization, JavaScript spreadsheets, Excel-like freeze functionality, floating columns, spreadsheet column freezing
description: Explore utilizing freeze rows in your spreadsheet for enhanced data viewing. This guide covers configuration settings and methods related to freezing rows in Jspreadsheet.

# Freeze Rows

Freezing rows in a spreadsheet allows you to keep specific rows visible while scrolling through the sheet. This feature helps keep essential data in view, even when working with large amounts of data. You can enable this feature either during the initialization of the grid or programmatically using the `setFreezeRows` method.

{.secondary}
> **Note** Freeze columns feature only works when the `tableOverflow` or `fullscreen` property is enabled.

## Documentation

### Methods

Define or reset the number of freeze rows programmatically.

| Method                          | Description                                                               |
| --------------------------------|---------------------------------------------------------------------------|
| setFreezeRows(number\|number[]) | Set the freeze rows.<br/>`setFreezeRows(number: Number\|Number[]) : void` |
| resetFreezeRows()               | Reset the freeze rows.<br/>`resetFreezeRows() : void`                     |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property                          | Description                                      |
| ----------------------------------|--------------------------------------------------|
| freezeRows: number\|number[]      | Define the frozen rows on initialization.        |
| freezeRowControl: boolean Premium | Enable freeze row manual control. Default: false |

### Events

Available events.

| Event        | Description                                              |
|--------------|----------------------------------------------------------|
| onfreezerows | `onfreezerows(worksheet: Object, rows: Number[]) : void` |


## Examples

### Basic Freeze Rows Example

This example demonstrates how to initially set up two frozen rows in the spreadsheet and provides a method to adjust this setting via a button programmatically.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br><br>

<input type="button" value="setFreezeRows(2)" id="btn1" />
<input type="button" value="resetFreezeRows()" id="btn2" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
const spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [50,20],
        tableOverflow: true,
        tableWidth: '800px',
        freezeRows: 4,
    }]
});

document.getElementById("btn1").onclick = () => spreadsheet[0].setFreezeRows(2)
document.getElementById("btn2").onclick = () => spreadsheet[0].resetFreezeRows()
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
                <Worksheet
                    minDimensions={[50, 20]}
                    tableOverflow
                    tableWidth="800"
                    freezeRows="4"/>
            </Spreadsheet>
            <input type="button" value="setFreezeRows(2)" onClick={() => spreadsheet.current[0].setFreezeRows(2)}/>
            <input type="button" value="resetFreezeRows()" onClick={() => spreadsheet.current[0].resetFreezeRows()}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet
                :minDimensions="[50,20]"
                :tableOverflow
                tableWidth="800"
                freezeRows="4" />
    </Spreadsheet>
    <input type="button" value="setFreezeRows(2)" @click="setFreezeRows(2)" />
    <input type="button" value="resetFreezeRows()" @click="resetFreezeRows()" />
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
        setFreezeRows(number) {
            this.$refs.spreadsheet.current[0].setFreezeRows(number);
        },
        resetFreezeRows() {
            this.$refs.spreadsheet.current[0].resetFreezeRows();
        },
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
        <input type="button" value="setFreezeRows(2)" (click)="this.worksheets[0].setFreezeRows(2)" />
        <input type="button" value="resetFreezeRows()" (click)="this.worksheets[0].resetFreezeRows()" />
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
                freezeRows: 4,
            }]
        });
    }
}
```

{.enterprise}
### Manual Freeze Row Controls

Enable users to manually set the number of frozen rows through manual freeze controls.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
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
                tableOverflow={true}
                tableWidth="800px"
                freezeRowControl={true}
                freezeColumnControl={true}
            />
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
            license
        }
    }
}
<script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
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
 
