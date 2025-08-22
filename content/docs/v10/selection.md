title: Data Grid Selections
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like selection, spreadsheet selection, cell selection, data grid selection, selection methods, range selection, multiple cell selection
description: This section provides comprehensive information about the properties, events, and methods for handling JavaScript grid selection.

Examples

# Data Grid Selection

This section provides a comprehensive guide on the properties, events, and methods for managing the cell selection and selection borders in the JSS data grid. 

## Documentation

### Methods

The following methods handle the selections in the JSS data grid.

| Method                                       | Description                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Update the main selection**               |
| selectAll                                    | Select all cells available in the data grid.<br/>`selectAll() : void`                                                                                                                                                                                                                                                                 |
| updateSelection                              | Selects all cells based on the coordinates of the specified DOM elements.<br/>`updateSelection(e1: DOMElement, e2: DOMElement) : void`                                                                                                                                                                                                |
| updateSelectionFromCoords                    | Select all cells based on the given coordinates.<br/>`updateSelectionFromCoords(x1: Number, y1: Number, x2: Number, y2: Number) : void`                                                                                                                                                                                               |
| resetSelection                               | Remove the selection.<br/>`resetSelection() : void`                                                                                                                                                                                                                                                                                   |
| **Get information from the main selection** |
| isSelected                                   | Verify if the coordinates given are included in the current selection.<br/>`isSelected(x: Number, y: Number) : Boolean`                                                                                                                                                                                                               |
| getSelection                                 | Get the coordinates of the main selection in order.<br/>`getSelection() : Array \| null`                                                                                                                                                                                                                                              |
| getHighlighted                               | Get the coordinates of the highlighted cells.<br/>`getHighlighted() : Array \| null`                                                                                                                                                                                                                                                  |
| getRange                                     | Get the range description of the highlighted cells.<br/>`getRange() : String \| null`                                                                                                                                                                                                                                                 |
| getSelectedColumns                           | Get the selected columns.<br/>`getSelectedColumns(visibleOnly: Boolean) => Array`                                                                                                                                                                                                                                                     |
| getSelectedRows                              | Get the selected rows.<br/>`getSelectedRows(visibleOnly: Boolean) => Array`                                                                                                                                                                                                                                                           |
| getSelected                                  | Get the worksheet selected cell names or objects. <br/>@param {Boolean?} columnNameOnly: To get only the cell names as string (true). Get the cell objects (false). <br/>@param {Boolean} ignoreHidden: Exclude hidden cells (true). Bring all cells (false)<br/> `getSelected(columnNameOnly: Boolean, ignoreHidden: Boolean) => []` |
| **Borders or secondary selections**         |
| setBorder                                    | Create or update an existing selection with a defined color.<br/>`setBorder(x1: Number, y1: Number, x2: Number, y2: Number, name: string, colorHex: string) : void`                                                                                                                                                                   |
| getBorder                                    | Get the selection border object.<br/>`getBorder(selectionName: string) : void`                                                                                                                                                                                                                                                        |
| resetBorders                                 | Reset the selection by its name. Reset all exiting borders when selectionName is not defined.<br/>`resetBorders(selectionName?: string, resetPosition: boolean) : void`                                                                                                                                                               |
| refreshBorders                               | Refresh one or more selections. Refresh all existing borders when selectionName is not defined.<br/>`refreshBorders(selectionName?: string) : void`                                                                                                                                                                                   |

 

### Events

| Event             | Description                                                                                                  |
| ------------------|--------------------------------------------------------------------------------------------------------------|
| onblur            | `onblur(worksheet: Object) : void`                                                                           |
| onfocus           | `onfocus(worksheet: Object) : void`                                                                          |
| onbeforeselection | `onbeforeselection(worksheet: Object, x1: Number, y1: Number, x2: Number, y2: Number, e: MouseEvent) : void` |
| onselection       | `onselection(worksheet: Object, x1: Number, y1: Number, x2: Number, y2: Number, e: MouseEvent) : void`       |

 

### Initial Settings

| Property               | Description                  |
| -----------------------|------------------------------|
| selectionCopy: boolean | Disable the clone selection. |

 

## Examples

### Manage the data grid selection

Select all worksheet cells in the grid programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<button id="selectallbtn">Select all</button>
<button id="updateselectionbtn">updateSelectionFromCoords(2,2,3,3)</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("selectallbtn").onclick = () => table[0].selectAll();
document.getElementById("updateselectionbtn").onclick = () => table[0].updateSelectionFromCoords(2,2,3,3);
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
                <Worksheet minDimensions={[6, 6]}/>
            </Spreadsheet>
            <input type="button" value="Select all"
                   onClick={() => spreadsheet.current[0].selectAll()}/>
            <input type="button" value="Select coords (2,2,3,3)"
                   onClick={() => spreadsheet.current[0].updateSelectionFromCoords(2, 2, 3, 3)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,6]" />
    </Spreadsheet>
    <input type="button" value="Select all" @click="selectAll" />
    <input type="button" value="Select coords (2,2,3,3)" @click="updateSelectionFromCoords(2,2,3,3)" />
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
        updateSelectionFromCoords() {
            this.$refs.spreadsheet.current[0].updateSelectionFromCoords(...arguments);
        },
        selectAll() {
            this.$refs.spreadsheet.current[0].selectAll();
        },
    },
    data() {
        return {
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
        <input type="button" value="Select all" (click)="this.worksheets[0].selectAll()" />
        <input type="button" value="Select coords (2,2,3,3)" (click)="this.worksheets[0].updateSelectionFromCoords(2,2,3,3)" />`
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
                    minDimensions: [6,6],
                }
            ]
        });
    }
}
```
 

 

### Secondary borders

Create secondary borders on the spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<button id="createredbtn">Create new red selection</button>
<button id="createbluebtn">Create new blue selection</button>
<button id="resetbtn">Clear all selection</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("createredbtn").onclick = () => table[0].setBorder(1,1,2,2,'red-visit','#ff0000')
document.getElementById("createbluebtn").onclick = () => table[0].setBorder(3,3,4,4,'blue-visit','#0000ff')
document.getElementById("resetbtn").onclick = () => table[0].resetBorders()
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
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[6,6]} />
            </Spreadsheet>
            <button value="Create new red selection"
                onClick={() => spreadsheet.current[0].setBorder(1,1,2,2,'test1','#ff0000')} />
            <button value="Create new blue selection"
                onClick={() => spreadsheet.current[0].setBorder(3,3,4,4,'test2','#0000ff')} />
            <button value="Clear all selection"
                onClick={() => spreadsheet.current[0].resetBorders()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,6]" />
    </Spreadsheet>
    <input type="button" @click="setBorder(1,1,2,2,'test1','#ff0000')" value="Create a new red selection" />
    <input type="button" @click="setBorder(3,3,4,4,'test2','#0000ff')" value="Create a new blue selection" />
    <input type="button" @click="resetBorders" value="Clear all selection" />
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
        setBorder() {
            this.$refs.spreadsheet.current[0].setBorder(...arguments);
        },
        resetBorders() {
            this.$refs.spreadsheet.current[0].resetBorders();
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
        <input type="button"
            (click)="this.worksheets[0].setBorder(1,1,2,2,'test1','#ff0000')" value="Create a new red selection" />
        <input type="button"
            (click)="this.worksheets[0].setBorder(3,3,4,4,'test2','#0000ff')" value="Create a new blue selection" />
        <input type="button"
            (click)="this.worksheets[0].resetBorders()" value="Clear all selection" />`
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
                    minDimensions: [6,6],
                }
            ]
        });
    }
}
```
 
