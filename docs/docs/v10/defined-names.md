title: Spreadsheet Defined Names: Range References
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, defined names, named ranges, range references, formula readability, cell references, label references
description: Learn how to simplify Excel-like formulas using defined names. Learn the methods for creating and managing variables representing specific cells or ranges. Enhance flexibility and organization in your formulas.

# Spreadsheet Defined Names

A defined name is a user-defined label or identifier representing a specific cell, range of cells, formula, or constant value. A defined name can be used in place of a cell or range reference in a formula, making it easier to read and understand. For example, you might define Sales, which refers to the range of cells containing your sales data. Then, instead of referring to those cells as A1:A10 in a formula, you can use the name Sales instead. 

> **Enterprise feature**  This feature is only available with the premium extension for formulas. 

## Documentation

### Methods

You can use the following methods to read or create new defined names programmatically in your spreadsheet software.

| Method          | Description                                                                                                                                                |
| ----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getDefinedNames | Get a defined name. <br/>@param {string} index - defined name identification.<br/> `spreadsheet.getDefinedNames(index: String) => Object`                  |
| setDefinedNames | Create a one or multiple defined names. <br/>@param {array} - Array with the new defined names.<br/>`spreadsheet.setDefinedNames(names: Object[]) => void` |

 

### Settings

All available properties to define a validation

| Property            | Description               |
| --------------------|---------------------------|
| definedNames: array | An array of defined names |

 

## Example

### Basic spreadsheet with defined names

Here's a simple example of how to use defined names in your calculations within a spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extension
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [10, "=SUM(Summary)"],
            [20, ""],
            [30, ""],
            [40, ""],
            [50, ""]
        ],
        minDimensions: [6, 6],
    }],
    definedNames: {
        Summary: 'Sheet1!A1:A6',
    }
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [10, "=SUM(Summary)"],
        [20, ""],
        [30, ""],
        [40, ""],
        [50, ""]
    ];
    // Defined names
    const definedNames = {
        Summary: 'Sheet1!A1:A6',
    }
    // Extensions
    const extensions = {formula};

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions} definedNames={definedNames}>
            <Worksheet data={data} minDimensions={[6, 6]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions" :definedNames="definedNames">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [10, "=SUM(Summary)"],
            [20, ""],
            [30, ""],
            [40, ""],
            [50, ""]
        ];
        // Defined names
        const definedNames = {
            Summary: 'Sheet1!A1:A6',
        }
        // Extensions
        const extensions = { formula };

        return {
            data,
            definedNames,
            extensions,
            license,
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
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extension
jspreadsheet.setExtensions({ formula });

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                data: [
                    [10, "=SUM(Summary)"],
                    [20, ""],
                    [30, ""],
                    [40, ""],
                    [50, ""]
                ],
                minDimensions: [6, 6],
            }],
            definedNames: {
                Summary: 'Sheet1!A1:A6',
            }
        });
    }
}
```
 
