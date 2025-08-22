title: MINVERSE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MINVERSE function in Jspreadsheet

# MINVERSE function

`PRO`{.jtag}

The MINVERSE function in Jspreadsheet Formulas Pro is used to calculate the inverse of a matrix. This function takes an array of numbers as input and calculates its inverse, if it exists. The output is also an array representing the inverted matrix. If the input array does not have an inverse, the function will return an error.

## Documentation

Returns the matrix inverse of an array.

### Category

Math and trigonometry

### Syntax

MINVERSE(array)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array for which you want to calculate the matrix inverse. The array must be square (that is, it must have the same number of rows as columns). |


### Behavior

The MINVERSE function in a spreadsheet is used to calculate and return the multiplicative inverse of a given square matrix. The function works by taking a square matrix as an argument and returning the inverse of that matrix. Here's how it handles different types of data:

- **Empty Cells**: MINVERSE will return an error if there are empty cells within the square matrix range. The matrix needs to be completely filled.

- **Text**: If the matrix contains any text, the function will return an error. MINVERSE only works with numeric values.

- **Booleans**: Boolean values are treated as numbers, with TRUE being 1 and FALSE being 0.

- **Errors**: If the cells in the matrix range contain any error, the MINVERSE function will also return an error.

- **Non-Square Matrices**: The argument must be a square matrix (i.e., the number of rows and columns must be equal). If the matrix is not square, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the matrix contains non-numeric data, such as text or error values. |
| #N/A | This error is returned when the input matrix is not a square matrix, i.e., the number of rows does not equal the number of columns. |
| #DIV/0! | This error is returned when the input matrix is singular, i.e., it does not have an inverse. |

### Best practices

> - Always ensure that the input matrix is a square matrix. The MINVERSE function will return an error if the number of rows does not match the number of columns.
> - Ensure that all cells in the matrix range contain numeric data. The MINVERSE function will return an error if it encounters non-numeric data.
> - Be wary of matrices that do not have an inverse (singular matrices). These cases will result in a #DIV/0! error.
> - To avoid errors, it's a good practice to check the determinant of the matrix before applying MINVERSE. If the determinant is zero, the matrix is singular and does not have an inverse.

### Usage

A few examples using the MINVERSE function.

```
MINVERSE([[1,2],[3,4]]) returns [[-2,1],[1.5,-0.5]]  
MINVERSE(A1:C3) returns the matrix inverse of the range A1:C3  
MINVERSE(B1:D4) returns the matrix inverse of the range B1:D4  
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
        1,
        0
    ],
    [
        1,
        3,
        1
    ],
    [
        0,
        1,
        2
    ],
    [
        "=MINVERSE(A1:C3)"
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
        1,
        0
    ],
    [
        1,
        3,
        1
    ],
    [
        0,
        1,
        2
    ],
    [
        "=MINVERSE(A1:C3)"
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
        1,
        0
    ],
    [
        1,
        3,
        1
    ],
    [
        0,
        1,
        2
    ],
    [
        "=MINVERSE(A1:C3)"
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
        1,
        0
    ],
    [
        1,
        3,
        1
    ],
    [
        0,
        1,
        2
    ],
    [
        "=MINVERSE(A1:C3)"
    ]
]
            }]
        });
    }
}
```

