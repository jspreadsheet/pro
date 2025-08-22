title: MDETERM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MDETERM function in Jspreadsheet

# MDETERM function

`PRO`{.jtag}

The `MDETERM` function in Jspreadsheet Formulas Pro is a tool used to calculate the matrix determinant of a square matrix. Essentially, a square matrix is a set of numbers arranged in a square grid. In mathematics, the determinant is a special number that can be calculated from this matrix. The `MDETERM` function simplifies this process by automatically calculating the determinant for you.

## Documentation

Returns the matrix determinant of a square matrix.

### Category

Math and trigonometry

### Syntax

MDETERM(matrix)

| Parameter | Description |
| ----------- | ------------- |
| `matrix` | The array or range containing the square matrix for which you want to calculate the determinant. The matrix must have the same number of rows and columns. |


### Behavior

The `MDETERM` function in spreadsheets calculates and returns the matrix determinant of a square array. Here's how it handles other types of inputs:

- **Empty cells**: Empty cells within the array are treated as zeros.
- **Text**: If the array contains any cells with text, the `MDETERM` function will return a `#VALUE!` error.
- **Booleans**: Boolean values are treated as binary, with TRUE being equivalent to 1 and FALSE being equivalent to 0.
- **Errors**: If the array contains cells with error values, the `MDETERM` function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the array contains non-numeric values such as text. |
| #N/A | This error is returned when the array is not a square array (i.e., it doesn't have an equal number of rows and columns). |
| #DIV/0! | This error is returned when the determinant of the matrix is zero, meaning the matrix is not invertible. |

### Best practices
> - Always ensure that your matrix is a square array. The `MDETERM` function will return an error if the matrix doesn't have an equal number of rows and columns.
> - Avoid non-numeric values in the array. If the array contains cells with text or error values, the `MDETERM` function will return an error.
> - Use the `MDETERM` function to check if a matrix is invertible. If the function returns 0, it means the matrix is not invertible.
> - Be cautious when interpreting the results of `MDETERM`. A determinant of zero doesn't necessarily mean the original matrix is zero or empty—it just means the matrix is singular or non-invertible.

### Usage

A few examples using the MDETERM function.

```
MDETERM(A1:C3) returns the determinant of the 3x3 matrix located in the range A1:C3  
MDETERM(A1:D4) returns the determinant of the 4x4 matrix located in the range A1:D4.  
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
        1
    ],
    [
        4,
        1,
        2
    ],
    [
        1,
        5,
        3
    ],
    [
        "=MDETERM(A1:C3)"
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
        1
    ],
    [
        4,
        1,
        2
    ],
    [
        1,
        5,
        3
    ],
    [
        "=MDETERM(A1:C3)"
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
        1
    ],
    [
        4,
        1,
        2
    ],
    [
        1,
        5,
        3
    ],
    [
        "=MDETERM(A1:C3)"
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
        1
    ],
    [
        4,
        1,
        2
    ],
    [
        1,
        5,
        3
    ],
    [
        "=MDETERM(A1:C3)"
    ]
]
            }]
        });
    }
}
```

