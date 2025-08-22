title: HSTACK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HSTACK function in Jspreadsheet

# HSTACK function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the HSTACK function is utilized to combine values from several arrays into a single array, but in a horizontal fashion. This means the values from different arrays are placed side by side in a row, rather than stacked vertically in a column. The function is particularly useful when you want to consolidate data from different ranges into one, making it easier to manage and analyze. Thus, HSTACK helps simplify data organization and improve efficiency in data analysis within Jspreadsheet Formulas Pro.

## Documentation

The HSTACK function is used to horizontally stack values from multiple arrays into a single array.

### Category

Lookup and reference

### Syntax

HSTACK(array1, [array2], [array3], ...)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | An array or range of cells containing the values to be stacked. |
| `arrayN` | Optional. An additional array or range of cells containing the values to be stacked. |


### Behavior

The `HSTACK` function is used in spreadsheets to horizontally stack the contents of two or more arrays or ranges into a single array. Here's how it handles different data types:

- **Empty cells**: `HSTACK` includes empty cells in its output. If an array or range has empty cells, the resulting array will also show these as empty.

- **Text**: It handles text quite well. If a cell contains text, the `HSTACK` function will stack it along with the other values.

- **Booleans**: `HSTACK` can handle boolean values. It stacks them along with other data types.

- **Errors**: If an input range or array contains cells with errors, the `HSTACK` function will return the error present in the first cell with an error. If there are no errors, it will stack arrays or ranges as expected.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the ranges or arrays to be stacked have different lengths. For `HSTACK` to work, all input arrays or ranges must have the same number of rows. |
| #REF! | This error occurs if the function is trying to stack a range of cells that doesn't exist or is invalid.|
| #N/A | This error is displayed when the function cannot find a value or input it needs to execute properly. |

### Best practices

> - Always ensure that the arrays or ranges you want to stack horizontally have the same number of rows. This is crucial for `HSTACK` to work properly.
> - Be mindful of errors in the cells to be stacked. If a cell within the input range has an error, `HSTACK` will return that error.
> - Double-check your cell references to avoid `#REF!` errors. Ensure the cell ranges you're referring to exist and are valid.
> - Use `HSTACK` with other functions to create more complex formulas and take full advantage of its capabilities.

### Usage

A few examples using the HSTACK function.

```
HSTACK([1,2,3],[4,5,6]) returns [[1,2,3,4,5,6]]  
HSTACK([1,2,3],[4,5,6],[7,8,9]) returns [1,2,3,4,5,6,7,8,9]  
HSTACK(A1:A3,B1:B3,C1:C3) where A1:C3 contains the values 1-9, returns [1,2,3,4,5,6,7,8,9]  
```

### Interactive Spreadsheet Demo

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
  worksheets: [{
    data: [
    [
        "Team A",
        "Team B",
        "Team C",
        "=HSTACK(A1:A3,B1:B3,C1:C3)"
    ],
    [
        85,
        92,
        78
    ],
    [
        90,
        88,
        85
    ],
    [
        82,
        95,
        90
    ]
]
  }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Worksheet data
    const data = [
    [
        "Team A",
        "Team B",
        "Team C",
        "=HSTACK(A1:A3,B1:B3,C1:C3)"
    ],
    [
        85,
        92,
        78
    ],
    [
        90,
        88,
        85
    ],
    [
        82,
        95,
        90
    ]
];

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Worksheet data
        const data = [
    [
        "Team A",
        "Team B",
        "Team C",
        "=HSTACK(A1:A3,B1:B3,C1:C3)"
    ],
    [
        85,
        92,
        78
    ],
    [
        90,
        88,
        85
    ],
    [
        82,
        95,
        90
    ]
]

        return {
            data
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

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
                data: [
    [
        "Team A",
        "Team B",
        "Team C",
        "=HSTACK(A1:A3,B1:B3,C1:C3)"
    ],
    [
        85,
        92,
        78
    ],
    [
        90,
        88,
        85
    ],
    [
        82,
        95,
        90
    ]
]
            }]
        });
    }
}
```

