title: Spreadsheet Helpers: Most Common Spreadsheets Functions
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, data table, documentation, spreadsheet helpers, useful methods
description: This section outlines essential methods for spreadsheet scripting, providing key tools and techniques for effective data management and manipulation within Jspreadsheet.

# Spreadsheet Helpers

This section provides more information about common and helpful methods when dealing with spreadsheets. 

## Documentation

### Methods

| Method                                          | Description                                                                                                                                                                   |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getColumnName                                   | Get the column letter based on a number.<br/>`jspreadsheet.helpers.getColumnName(columnNumber: Number) => String`                                                             |
| getCellNameFromCoords                           | Get the spreadsheet-like cell name from the coordinates.<br/>`jspreadsheet.helpers.getColumnName(x: Number, y: Number) => String`                                             |
| getCoordsFromCellName                           | Get the coordinates from the spreadsheet-like cell name.<br/>`jspreadsheet.helpers.getCoordsFromColumnName(cellName: String) => [Number, Number]`                             |
| shiftFormula                                    | Update all variables from a formula based a shift of x, y positions.<br/>`jspreadsheet.helpers.shiftFormula(formula: String, x: Number, y: Number) => String`                 |
| getTokensFromRange                              | Extract the tokens from a range.<br/>`jspreadsheet.helpers.getTokensFromRange(range: String) => Array`                                                                        |
| getRangeFromTokens                              | Get the range from an array of tokens. <br/>`jspreadsheet.helpers.getRangeFromTokens(tokens: Array) => String`                                                                |
| getCoordsFromRange                              | Get the coordinates from a range string.<br/>`jspreadsheet.helpers.getCoordsFromRange(range: string, adjust?: boolean) => [number,number,number,number]`                                              |
| getRangeFromCoords                              | Get the range string such as A1:A9 from an array of numbers<br/>`jspreadsheet.helpers.getRangeFromCoords(range: [number,number,number,number]) => String`                     |
| createFromTables                                | Extract the configuration to create a new spreadsheet from a static HTML element.<br/>`jspreadsheet.helpers.createFromTable(element: HTMLElement, options: Object) => Object` |
| parseCSV                                        | Transform a CSV string into an array.<br/>`jspreadsheet.helpers.parseCSV(data: String, delimiter: String) => Array`                                                           |
| getTokensFromCoords                             | Get all token names from a range of coordinates.<br>`getTokensFromCoords: (x1: number, y1: number, x2: number, y2: number, wsName?: string) => []`                            |
 
## Examples

### Data Grid Helpers Example

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6]
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
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
 
