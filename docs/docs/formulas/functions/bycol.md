title: BYCOL Function – Column-wise Lambda Operations in Jspreadsheet
keywords: Jspreadsheet, BYCOL, lambda function, column-wise formula, spreadsheet array functions, custom formulas, JavaScript spreadsheet, Excel-like functions, array logic
description: How to use the BYCOL function in Jspreadsheet to apply a custom lambda operation across each column in a selected range and return an array of results.

# BYCOL function

`PRO`{.jtag}

The `BYCOL` function in **Jspreadsheet Formulas Pro** applies a **lambda (anonymous)** function to each column within a specified range. It processes one column at a time and returns a single-column array of the results — with one result per column.

This eliminates the need to manually apply a formula to each column, reducing error and improving scalability when handling multiple-column datasets.


## Documentation

Applies a lambda function to each column of a range and returns an array of the results.

### Category

Logical

### Syntax

BYCOL(reference, lambda)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | The range to process column by column. |
| `lambda` | A lambda function to apply to each column. |


### Behavior

The 'BYCOL' function in spreadsheets is responsible for executing a function across columns of data. Here are some expected behaviors:

- **Empty cells**: Usually ignored unless the applied lambda function treats them explicitly.
- **Text values**: Behavior depends on the function used in the lambda (e.g., `AVERAGE` will ignore text, while `SUM` may error if text is present).
- **Booleans**: Often treated as numbers (`TRUE = 1`, `FALSE = 0`) depending on the operation.
- **Errors in cells**: If any column contains an error and the lambda function doesn’t handle it, the result for that column will be an error.
- **Return type**: Produces a vertical array, one result for each **column** of the input range.


### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE! | This error occurs when the 'BYCOL' function encounters a cell with a value that is inappropriate for the function being applied. |
| #REF! | This error is returned when the 'BYCOL' function refers to a cell that does not exist. |
| #NAME? | This error occurs if the 'BYCOL' function does not recognize the name of the function being applied. |
| #DIV/0! | This error is returned if the 'BYCOL' function attempts to divide by zero. |

### Best practices

> - Always ensure that the columns of data you are applying 'BYCOL' to contain the appropriate types of values for the function being used. For instance, don't use a function that expects numbers on a column of text values.
> - Handle errors in your data before applying the 'BYCOL' function to avoid the entire function returning an error.
> - Be aware that 'BYCOL' will ignore empty cells in most cases. If this is not the desired behavior, you may need to handle these cells separately.
> - Make sure the function you are applying with 'BYCOL' is spelled correctly and exists in your spreadsheet software to avoid the #NAME? error.

### Usage

A few examples using the BYCOL function.

```
BYCOL(A1:D3, LAMBDA(col, SUM(col)))
→ Returns a vertical array with the sum of each column from A1 to D3

BYCOL(B2:E5, LAMBDA(c, AVERAGE(c)))
→ Returns the average of each column between B2 and E5

BYCOL(C1:F4, LAMBDA(x, MAX(x)))
→ Returns the maximum value from each column
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
        "Sales",
        "Marketing",
        "IT"
    ],
    [
        12000,
        8000,
        15000
    ],
    [
        11500,
        7500,
        14500
    ],
    [
        13000,
        9000,
        16000
    ],
    [
        "=BYCOL(A1:C4, LAMBDA(col, MAX(col)))"
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
        "Sales",
        "Marketing",
        "IT"
    ],
    [
        12000,
        8000,
        15000
    ],
    [
        11500,
        7500,
        14500
    ],
    [
        13000,
        9000,
        16000
    ],
    [
        "=BYCOL(A1:C4, LAMBDA(col, MAX(col)))"
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
        "Sales",
        "Marketing",
        "IT"
    ],
    [
        12000,
        8000,
        15000
    ],
    [
        11500,
        7500,
        14500
    ],
    [
        13000,
        9000,
        16000
    ],
    [
        "=BYCOL(A1:C4, LAMBDA(col, MAX(col)))"
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
        "Sales",
        "Marketing",
        "IT"
    ],
    [
        12000,
        8000,
        15000
    ],
    [
        11500,
        7500,
        14500
    ],
    [
        13000,
        9000,
        16000
    ],
    [
        "=BYCOL(A1:C4, LAMBDA(col, MAX(col)))"
    ]
]
            }]
        });
    }
}
```

