title: SMALL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SMALL function in Jspreadsheet

# SMALL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SMALL` function in Jspreadsheet Formulas Pro is a useful tool that helps you find the k-th smallest value in a given data set. For instance, if you want to find the second smallest number in a range of numbers, you can use this function. Simply input the range of cells and the position (k) of the smallest value you want to find. It's a handy feature when dealing with large data sets where manually sorting and finding values would be too time-consuming.

## Documentation

Returns the k-th smallest value in a data set.

### Category

Statistical

### Syntax

SMALL(arr, k)

| Parameter | Description |
| ----------- | ------------- |
| `arr` | An array or range of numeric values from which to find the k-th smallest value. |
| `k` | Indicates which value to return, where 1 is the smallest value, 2 is the second-smallest value, and so on. |


### Behavior

The `SMALL` function in spreadsheets returns the nth smallest value in a data set. This function considers only numeric values and ignores blank cells, logical values, and text in the data set. Here's how it handles different scenarios:

- Empty cells: The `SMALL` function ignores empty cells in the data set.
- Text: The `SMALL` function ignores text values.
- Booleans: The `SMALL` function does not consider boolean values.
- Errors: If the array or k argument contains an error, the function propagates the error. If k is greater than the number of numeric values in the array, the function returns an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error occurs when the `k` parameter is less than 1 or greater than the number of numeric values in the data set. |
| #VALUE! | This error occurs when the `k` parameter is non-numeric. |
| #N/A | This error occurs when there are no numeric values in the data set. |

### Best practices

> - Always ensure the `k` parameter is a positive integer that's less than or equal to the number of numeric values in your data set to avoid #NUM! errors.
> - Avoid including text or boolean values in your data set as the `SMALL` function ignores these.
> - Be sure to handle errors in the data set as the `SMALL` function will propagate these.
> - Use the `SMALL` function in combination with other functions like `ROW` and `COLUMN` to find the nth smallest value in a particular row or column.

### Usage

A few examples using the SMALL function.

```
SMALL(A1:A10, 1) returns the smallest value in the range A1:A10  
SMALL([3,4,2,8,9], 3) returns 4  
SMALL(B2:B8, 5) returns the 5th smallest value in the range B2:B8  
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
        85,
        "=SMALL(A2:A6,1)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        95
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
        85,
        "=SMALL(A2:A6,1)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        95
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
        85,
        "=SMALL(A2:A6,1)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        95
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
        85,
        "=SMALL(A2:A6,1)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        95
    ]
]
            }]
        });
    }
}
```

