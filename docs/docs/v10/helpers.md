title: Spreadsheet Helpers: General Functions for Working with Spreadsheets
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, data table, documentation, spreadsheet helpers, useful methods
description: Discover Spreadsheet Helpers, a collection of powerful methods designed to assist in programmatic problem-solving related to spreadsheets.

# Spreadsheet Helpers

This section provides more information about common and helpful methods when dealing with spreadsheets. 

> **Shortcuts for worksheets**  All the methods are also available through the worksheet instance. 

## Documentation

### Methods

| Method                                | Description                                                                                                                                                                   |
| --------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getColumnName(number)                 | Get the column letter based on a number.<br/>`jspreadsheet.helpers.getColumnName(columnNumber: Number) => String`                                                             |
| getCellNameFromCoords(number, number) | Get the spreadsheet-like cell name from the coordinates.<br/>`jspreadsheet.helpers.getColumnName(x: Number, y: Number) => String`                                             |
| getCoordsFromCellName(string)         | Get the coordinates from the spreadsheet-like cell name.<br/>`jspreadsheet.helpers.getCoordsFromColumnName(cellName: String) => [Number, Number]`                             |
| shiftFormula(string, number, number)  | Update all variables from a formula based a shift of x, y positions.<br/>`jspreadsheet.helpers.shiftFormula(formula: String, x: Number, y: Number) => String`                 |
| getTokensFromRange(string)            | Extract the tokens from a range. Example: getTokensFromRange('A1:A10'); // returns [A1,A2,A3,A4...]<br/>`jspreadsheet.helpers.getTokensFromRange(range: String) => Array`     |
| getRangeFromTokens(array)             | Get the range from an array of tokens. <br/>`jspreadsheet.helpers.getRangeFromTokens(tokens: Array) => String`                                                                |
| getCoordsFromRange(string)            | Get the coordinates from a range string. Example: getTokensFromRange('A1:A10'); // returns [0,0,0,9]<br/>`jspreadsheet.helpers.getCoordsFromRange(range: string) => Array`    |
| getCoordsFromRange(string)            | Get the coordinates x1,y1,x2,y2 from a range string.<br/>`jspreadsheet.helpers.getCoordsFromRange(range: String) => number[]`                                                 |
| getRangeFromCoords(number[])          | Get the range string such as A1:A9 from an array of numbers<br/>`jspreadsheet.helpers.getRangeFromCoords(range[]) => String`                                                  |
| createFromTable(DOMElement, options)  | Extract the configuration to create a new spreadsheet from a static HTML element.<br/>`jspreadsheet.helpers.createFromTable(element: HTMLElement, options: Object) => Object` |
| parseCSV(string, string)              | Transform a CSV string into an array.<br/>`jspreadsheet.helpers.parseCSV(data: String, delimiter: String) => Array`                                                           |

 

## Examples

### How to use the JSS data grid helpers

```html
<div id="spreadsheet"></div>

<script>
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10]
    }]
});

// Returns A1
jspreadsheet.helpers.getCellNameFromCoords(0,0);
// Returns (4) [1, 0, 2, 3]
jspreadsheet.helpers.getCoordsFromRange('B1:C4');
// Also works with the worksheet instance. Returns 1,1
let coords = worksheets[0].helpers.getCoordsFromCellName('B2');
</script>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Returns A1
    let cellName = jspreadsheet.helpers.getCellNameFromCoords(0, 0);
    // Returns (4) [1, 0, 2, 3]
    let range = jspreadsheet.helpers.getCoordsFromRange('B1:C4');
    // Also works with the worksheet instance. Returns 1,1
    let coords = spreadsheet.current[0].helpers.getCoordsFromCellName('B2');

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    mounted() {
        // Returns A1
        let cellName = jspreadsheet.helpers.getCellNameFromCoords(0,0);
        // Returns (4) [1, 0, 2, 3]
        let range = jspreadsheet.helpers.getCoordsFromRange('B1:C4');
        // Also works with the worksheet instance. Returns 1,1
        let coords = this.$refs.spreadsheet.current[0].helpers.getCoordsFromCellName('B2');

    },
    data() {
        return {
            license
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
            worksheets: [
                {
                    minDimensions: [10,10]
                }
            ]
        });

        // Returns A1
        let cellName = jspreadsheet.helpers.getCellNameFromCoords(0,0);
        // Returns (4) [1, 0, 2, 3]
        let range = jspreadsheet.helpers.getCoordsFromRange('B1:C4');
        // Also works with the worksheet instance. Returns 1,1
        let coords = this.worksheets[0].helpers.getCoordsFromCellName('B2');
    }
}
```
 
