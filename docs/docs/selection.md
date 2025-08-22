title: Data Grid Selections
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like selection, spreadsheet selection, cell selection, data grid selection, selection methods, range selection, multiple cell selection
description: This section provides comprehensive information about the properties, events, and methods for handling data grid selections.

# Data Grid Selection

This section covers the technical aspects of cell selection and the management of selection borders in the Jspreadsheet data grid, detailing the relevant properties, events, and methods.

### What's new in Version 11?

Version 11 of Jspreadsheet introduces significant developments, notably the ability to make non-consecutive selections. This addition extends the data grid's versatility, facilitating user interactions akin to those in familiar spreadsheet tools such as Excel and Google Sheets.

{.secondary}
> Due to the new non-consecutive and multiple selection features, various methods have been revised to align with these capabilities:
> - `getSelected` It has a different signature and return; It does not include filtered cells.
> - `updateSelection` it has been dropped. Please use updateSelectionFromCoords.
> - `getSelectedRows` it does not include filtered rows on the result.
> - `getHighlighted` return an array of selections.
> - `getSelection` returns the main selection order or without order.

## Documentation

### Methods

The following methods manage selections in the Jspreadsheet data grid.

#### Main Selection

| Method                    | Description                                                                                                                                                                                                                        |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getSelection              | Get the coordinates of the main selection.<br/>`getSelection(preserveOrder: Boolean) : Array \| null`                                                                                                                              |
| getHighlighted            | Get the coordinates of the highlighted selections.<br/>`getHighlighted() : Array \| null`                                                                                                                                          |
| getRange                  | Get the range description of the highlighted cells.<br/>`getRange() : String \| null`                                                                                                                                              |
| getSelectedColumns        | Get the selected columns.<br/>`getSelectedColumns(visibleOnly: Boolean) => Array`                                                                                                                                                  |
| getSelectedRows           | Get the selected rows.<br/>`getSelectedRows(visibleOnly: Boolean) => Array`                                                                                                                                                        |
| getSelected               | Get the worksheet selected cell names or objects. <br/>@param {Boolean?} columnNameOnly: To get only the cell names as string (true). Get the cell coordinates as an object (false).  `getSelected(columnNameOnly: Boolean) => []` |
| isSelected                | Verify if the coordinates given are included in the current selection.<br/>`isSelected(x: Number, y: Number) : Boolean`                                                                                                            |
| selectAll                 | Select all cells available in the data grid.<br/>`selectAll() : void`                                                                                                                                                              |
| updateSelectionFromCoords | Select all cells based on the given coordinates.<br/>`updateSelectionFromCoords(x1: Number, y1: Number, x2: Number, y2: Number) : void`                                                                                            |
| resetSelection            | Remove the selection.<br/>`resetSelection() : void`                                                                                                                                                                                |

##### Filtered Rows

In version 11, the methods `getSelected` and `getSelectedRows`  exclude the hidden rows due to filters or search operations, ensuring that only visible rows are considered in these selections.


#### Secondary Selections or Borders

| Method                                       | Description                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| setBorder                                    | Create or update an existing selection with a defined color.<br/>`setBorder(x1: Number, y1: Number, x2: Number, y2: Number, name: string, colorHex: string) : void`                                                                                                                                                                   |
| getBorder                                    | Get the selection border object.<br/>`getBorder(selectionName: string) : void`                                                                                                                                                                                                                                                        |
| resetBorders                                 | Reset the selection by its name. Reset all exiting borders when selectionName is not defined.<br/>`resetBorders(selectionName?: string, resetPosition: boolean) : void`                                                                                                                                                               |
| refreshBorders                               | Refresh one or more selections. Refresh all existing borders when selectionName is not defined.<br/>`refreshBorders(selectionName?: string) : void`                                                                                                                                                                                   |


##### Example

A real world example of the use of getBorders is when the developer needs the coordinates of the marching ants border during a copy.

{.ignore}
```javascript
worksheetInstance.getBorder('copying');
```


 ### Selection Events

| Event             | Description                                                                                                             |
| ------------------|-------------------------------------------------------------------------------------------------------------------------|
| onblur            | `onblur(worksheet: Object) : void`                                                                                      |
| onfocus           | `onfocus(worksheet: Object) : void`                                                                                     |
| onbeforeselection | `onbeforeselection(worksheet: Object, x1: Number, y1: Number, x2: Number, y2: Number, e: MouseEvent) : Boolean \| void` |
| onselection       | `onselection(worksheet: Object, x1: Number, y1: Number, x2: Number, y2: Number, e: MouseEvent) : void`                  |

 
### Initial Settings

| Property               | Description                  |
| -----------------------|------------------------------|
| selectionCopy: boolean | Disable the clone selection. |

 

## Examples

### Programmatically Data Grid Selection

Demonstrates how to select all cells within a worksheet in the grid programmatically.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p>
<input type="button" value="Select all" id="btn1" />
<input type="button" value="updateSelectionFromCoords(2,2,3,3)" id="btn2" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("btn1").onclick = () => table[0].selectAll();
document.getElementById("btn2").onclick = () => table[0].updateSelectionFromCoords(2,2,3,3);
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
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

### Implementing Secondary Borders

Here is an example of adding secondary borders within the spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Create new red selection" id="btn1" />
<input type="button" value="Create new blue selection" id="btn2" />
<input type="button" value="Clear all selection" id="btn3" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
});

document.getElementById("btn1").onclick = () => table[0].setBorder(1,1,2,2,'red-visit','#ff0000')
document.getElementById("btn2").onclick = () => table[0].setBorder(3,3,4,4,'blue-visit','#0000ff')
document.getElementById("btn3").onclick = () => table[0].resetBorders(null, true)
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
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[6,6]} />
            </Spreadsheet>
            <button value="Create new red selection"
                onClick={() => spreadsheet.current[0].setBorder(1,1,2,2,'test1','#ff0000')}>Create new red selectio</button>
            <button value="Create new blue selection"
                onClick={() => spreadsheet.current[0].setBorder(3,3,4,4,'test2','#0000ff')}>Create new blue selection</button>
            <button value="Clear all selection"
                onClick={() => spreadsheet.current[0].resetBorders(null, true)} >Clear all selection</button>
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
            this.$refs.spreadsheet.current[0].resetBorders(null, true);
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
        <input type="button" (click)="this.worksheets[0].setBorder(1,1,2,2,'test1','#ff0000')" value="Create a new red selection" />
        <input type="button" (click)="this.worksheets[0].setBorder(3,3,4,4,'test2','#0000ff')" value="Create a new blue selection" />
        <input type="button" (click)="this.worksheets[0].resetBorders(undefined, true)" value="Clear all selection" />`
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
 
## Related Content

- [Formula Selector](/docs/formula-picker)