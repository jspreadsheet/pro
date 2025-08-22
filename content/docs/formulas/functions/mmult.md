title: MMULT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MMULT function in Jspreadsheet

# MMULT function

`PRO`{.jtag}

The `MMULT` function in Jspreadsheet Formulas Pro is a mathematical tool that returns the matrix product of two arrays. Essentially, it multiplies two matrices (arrays of numbers arranged in rows and columns) together. The result is a new matrix, where each cell is calculated as the sum of the multiplication of elements from the corresponding row and column in the original matrices. This function is beneficial in various data analysis tasks, especially when dealing with large sets of data.

## Documentation

Returns the matrix product of two arrays.

### Category

Math and trigonometry

### Syntax

MMULT(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range to multiply. The number of columns in the first array must be the same as the number of rows in the second array. |
| `array2` | The second array or range to multiply. The number of rows in the second array must be the same as the number of columns in the first array. |


### Behavior

The 'MMULT' function in spreadsheets is used to calculate the matrix product of two matrices. It multiplies two matrices together and returns the resulting matrix. Here are some of the expected behaviors of MMULT:

- MMULT requires two arrays or ranges of numbers as input. It will not work with text or boolean values.
- Both matrices should have dimensions that are compatible for multiplication. The number of columns in the first matrix must be equal to the number of rows in the second matrix.
- If there are empty cells in the matrices, MMULT treats these cells as zeroes.
- If there are non-numeric values (like text or boolean values) in the matrices, MMULT will return an error.
- If any of the input cells contain errors, MMULT will return an error.
- The result of MMULT is an array with the same number of rows as the first matrix and the same number of columns as the second matrix.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the two input arrays have incompatible dimensions for multiplication, or if any of the cells in the arrays contain non-numeric values. |
| #N/A | This error occurs when the input arrays are empty. |
| #REF! | This error occurs when the resulting array is too large to be displayed in the available space. |
| #NUM! | This error occurs when the calculation exceeds the maximum limit for numbers. |

### Best practices

> - Make sure that the dimensions of the two matrices are compatible for multiplication. The number of columns in the first matrix should be equal to the number of rows in the second matrix.
> - Check your data for non-numeric values before using MMULT. If any cells contain text, boolean values, or errors, MMULT will return an error.
> - Remember that MMULT treats empty cells as zeroes. If this is not your intended behavior, you might need to clean up your data before using MMULT.
> - Keep in mind that the resulting array from MMULT will have the same number of rows as the first matrix and the same number of columns as the second matrix. Make sure there is enough space in your spreadsheet to display the result.

### Usage

A few examples using the MMULT function.

```
MMULT(A1:C3, D1:F3) returns the matrix product of ranges A1:C3 and D1:F3  
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
        2,
        3,
        1,
        4,
        2
    ],
    [
        1,
        4,
        2,
        3,
        1
    ],
    [
        3,
        2,
        4,
        1,
        3
    ],
    [],
    [
        "=MMULT(A1:C3,D1:E3)",
        "Matrix Product"
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
        2,
        3,
        1,
        4,
        2
    ],
    [
        1,
        4,
        2,
        3,
        1
    ],
    [
        3,
        2,
        4,
        1,
        3
    ],
    [],
    [
        "=MMULT(A1:C3,D1:E3)",
        "Matrix Product"
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
        2,
        3,
        1,
        4,
        2
    ],
    [
        1,
        4,
        2,
        3,
        1
    ],
    [
        3,
        2,
        4,
        1,
        3
    ],
    [],
    [
        "=MMULT(A1:C3,D1:E3)",
        "Matrix Product"
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
        2,
        3,
        1,
        4,
        2
    ],
    [
        1,
        4,
        2,
        3,
        1
    ],
    [
        3,
        2,
        4,
        1,
        3
    ],
    [],
    [
        "=MMULT(A1:C3,D1:E3)",
        "Matrix Product"
    ]
]
            }]
        });
    }
}
```

