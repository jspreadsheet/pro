title: Freeze Columns and Panes: Enhancing Data Grid Navigation and Visibility
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like freeze panes, data grid freeze panes, spreadsheet freeze column, freeze columns, data grid freeze column, floating columns
description: Enhance data grid navigation and visibility with freeze columns and panes. Learn about settings, events, and methods for freezing specific columns or panes, ensuring a seamless viewing experience while scrolling.

# Freeze columns

Freezing columns in a spreadsheet allows you to keep specific columns visible while scrolling through the sheet. This feature helps keep essential data in view, even when working with large amounts of data. You can enable this feature either during the initialization of the grid or programmatically using the `setFreezeColumns` method. 

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

 

## Examples

### Basic freeze column usage.

Note that the freeze columns feature only works when the `tableOverflow` or `fullscreen` property is enabled. 

 





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
        freezeColumns: 2
    }]
});
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
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet minDimensions={[50, 20]} tableOverflow tableWidth="800" freezeColumns="2"/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[50,20]" :tableOverflow="true" tableWidth="800" freezeColumns="2" />
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
                freezeColumns: 2
            }]
        });
    }
}
```
 

 

### Enable manual freeze controls

Manual freeze column controls allow the user to manually adjust the number of frozen columns. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

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
            tableOverflow
            tableWidth="800"
            freezeRowControl
            freezeColumnControl />
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
 
