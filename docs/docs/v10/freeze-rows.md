title: Freeze Rows and Panes: Enhancing Data Grid Navigation and Visibility
keywords: Jspreadsheet, Jexcel, data grid, vue data grid, angular data grid, react data grid, Excel-like freeze panes, data grid freeze panes, spreadsheet freeze row, freeze rows, data grid freeze rows, floating rows
description: Improve data grid navigation and visibility with row freezing. Freeze specific rows in the data grid to keep them visible while scrolling. Explore methods, events, and settings for a seamless user experience.

# Freeze rows

Jspreadsheet's freeze rows property allows you to sticky the given rows at the top of the spreadsheet, even as you scroll down. This feature can be handy when working with large datasets, as it helps to keep important information in view at all times. 

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

 

## Examples

### Basic freeze rows usage.

It is possible to define the viewport when using the freeze rows, as follow: 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<input type="button" value="setFreezeRows(2)" id="setfreeze" />
<input type="button" value="resetFreezeRows()" id="resetfreeze" />

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

document.getElementById("setfreeze").onclick = () => spreadsheet[0].setFreezeRows(2)
document.getElementById("resetfreeze").onclick = () => spreadsheet[0].resetFreezeRows()
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

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

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        setFreezeRows(number) {
            alert(this.$refs.spreadsheet.current[0].setFreezeRows(number));
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
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
 

 

### Enable manual freeze controls

Enable the interface controls for manual adjustments. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

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
                freezeColumnControl
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
            :tableOverflow
            :tableWidth="800"
            :freezeRowControl
            :freezeColumnControl />
    </Spreadsheet>
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

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
 
