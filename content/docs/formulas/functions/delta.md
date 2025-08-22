title: DELTA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DELTA function in Jspreadsheet

# DELTA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DELTA` function in Jspreadsheet Formulas Pro is a simple tool used to compare two values. If the values you're comparing are exactly the same, the function will return a 1. However, if the values are different in any way, the function will instead return a 0. This can be particularly useful when you're analyzing data and want to quickly identify matches or discrepancies.

## Documentation

Tests whether two values are equal. Returns 1 if the values are equal, or 0 otherwise.

### Category

Engineering

### Syntax

DELTA(number1, [number2])

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first value you want to compare. |
| `numberN` | Optional. The second value you want to compare. If omitted, assumes a default value of zero. |


### Behavior

The `DELTA` function compares two numeric values, returning `1` if they are equal and `0` if they are different. Here is how it behaves under different circumstances:

- **Empty Cells**: If one or both of the arguments of the `DELTA` function are empty cells, the function will treat them as `0`.

- **Text**: If one or both of the arguments are text, the function will return `#VALUE!` error. 

- **Booleans**: If one or both of the arguments are boolean values, the `DELTA` function will convert `TRUE` to `1` and `FALSE` to `0`. 

- **Errors**: If one or both of the arguments are cells that contain errors, the `DELTA` function will return the same error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when one or both of the arguments are non-numeric values. |
| #REF! | This error occurs when the cell reference provided as an argument is not valid. |
| #NAME? | This error occurs when the function name is misspelled or the function does not exist. |

### Best practices

> - Ensure that the arguments are numeric. If there's a chance that the cells may contain non-numeric values, use error checking functions to prevent `#VALUE!` errors.
> - Use absolute cell references if you want to compare a specific cell with a range of cells. This prevents the reference cell from changing when the formula is copied across the range.
> - Avoid using nested `DELTA` functions as it can make the formula complex and difficult to understand. Use other logical functions like `IF` or `AND` to add more conditions. 
> - Since the `DELTA` function can only compare equality, it's not suitable for range comparisons. Use other functions like `COUNTIFS` for such scenarios.

### Usage

A few examples using the DELTA function.

```
DELTA(5,5) returns 1  
DELTA(10,20) returns 0  
DELTA(A1,A2) returns 1 if the values in A1 and A2 are the same, or 0 otherwise  
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        100,
        "=DELTA(A2,B2)"
    ],
    [
        250,
        245,
        "=DELTA(A3,B3)"
    ],
    [
        75,
        75,
        "=DELTA(A4,B4)"
    ],
    [
        180,
        185,
        "=DELTA(A5,B5)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        100,
        "=DELTA(A2,B2)"
    ],
    [
        250,
        245,
        "=DELTA(A3,B3)"
    ],
    [
        75,
        75,
        "=DELTA(A4,B4)"
    ],
    [
        180,
        185,
        "=DELTA(A5,B5)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        100,
        "=DELTA(A2,B2)"
    ],
    [
        250,
        245,
        "=DELTA(A3,B3)"
    ],
    [
        75,
        75,
        "=DELTA(A4,B4)"
    ],
    [
        180,
        185,
        "=DELTA(A5,B5)"
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
        "Expected",
        "Actual",
        "Match"
    ],
    [
        100,
        100,
        "=DELTA(A2,B2)"
    ],
    [
        250,
        245,
        "=DELTA(A3,B3)"
    ],
    [
        75,
        75,
        "=DELTA(A4,B4)"
    ],
    [
        180,
        185,
        "=DELTA(A5,B5)"
    ]
]
            }]
        });
    }
}
```

