title: PERCENTILE.EXC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTILE.EXC function in Jspreadsheet

# PERCENTILE.EXC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERCENTILE.EXC` function in Jspreadsheet Formulas Pro is a tool that helps you find a specific percentile in a set of data. The 'k' in this function represents the percentile value you're looking for, and it must be between 0 and 1 (not including these two values). For instance, if you need to find the 90th percentile, you would use 0.9 as your 'k' value. This function then determines the number from your data range that falls at that percentile.

## Documentation

Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive.

### Category

Statistical

### Syntax

PERCENTILE.EXC(array, k)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `k` | The percentile to return, expressed as a decimal between 0 and 1, exclusive. |


### Behavior

The 'PERCENTILE.EXC' function in spreadsheet software calculates the exclusive percentile of a dataset. In terms of how it handles different types of data:

- Empty cells: These are ignored by the 'PERCENTILE.EXC' function. Only cells with numeric values are considered in the calculation.
- Text: If a cell containing text is included in the range of values for the 'PERCENTILE.EXC' function, it will return a `#VALUE!` error.
- Booleans: Boolean values (`TRUE` and `FALSE`) are treated as `1` and `0` respectively by the 'PERCENTILE.EXC' function.
- Errors: If any cell in the range contains an error, the 'PERCENTILE.EXC' function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | This error occurs when the input percentile is less than 0 or greater than 1. |
| `#VALUE!` | This error is returned when the range includes a cell containing non-numeric values, such as text. |
| `#DIV/0!` | This error occurs when the dataset is empty. |

### Best Practices

> - Always ensure that the range of cells for the 'PERCENTILE.EXC' function only contains numeric values to avoid the `#VALUE!` error.
> - Confirm that the input percentile is within the range of 0 to 1 (exclusive). Any value outside this range will return the `#NUM!` error.
> - When dealing with boolean values, remember that `TRUE` is treated as `1` and `FALSE` is treated as `0` by the 'PERCENTILE.EXC' function.
> - Always check for errors in the dataset before applying the 'PERCENTILE.EXC' function to avoid propagating these errors.

### Usage

A few examples using the PERCENTILE.EXC function.

```
PERCENTILE.EXC(A1:A10,0.9) returns the value at the 90th percentile in the range A1 through A10  
PERCENTILE.EXC(B1:B5,0.8) returns the value at the 80th percentile in the range B1 through B5  
PERCENTILE.EXC(C1:C100,0.99) returns the value at the 99th percentile in the range C1 through C100  
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
        "Student Scores",
        "Analysis"
    ],
    [
        78,
        "=PERCENTILE.EXC(A2:A6,0.75)"
    ],
    [
        85
    ],
    [
        92
    ],
    [
        67
    ],
    [
        88
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
        "Student Scores",
        "Analysis"
    ],
    [
        78,
        "=PERCENTILE.EXC(A2:A6,0.75)"
    ],
    [
        85
    ],
    [
        92
    ],
    [
        67
    ],
    [
        88
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
        "Student Scores",
        "Analysis"
    ],
    [
        78,
        "=PERCENTILE.EXC(A2:A6,0.75)"
    ],
    [
        85
    ],
    [
        92
    ],
    [
        67
    ],
    [
        88
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
        "Student Scores",
        "Analysis"
    ],
    [
        78,
        "=PERCENTILE.EXC(A2:A6,0.75)"
    ],
    [
        85
    ],
    [
        92
    ],
    [
        67
    ],
    [
        88
    ]
]
            }]
        });
    }
}
```

