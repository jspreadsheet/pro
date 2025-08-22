title: MUNIT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MUNIT function in Jspreadsheet

# MUNIT function

`PRO`{.jtag}

The `MUNIT` function in Jspreadsheet Formulas Pro is used to create a unit matrix of a specified size. A unit matrix, also known as an identity matrix, is a special type of square matrix where all the elements of the principal diagonal are ones and all other elements are zeros. When you input a number into the `MUNIT` function, it generates a unit matrix of that size. For instance, `MUNIT(3)` will generate a 3x3 unit matrix.

## Documentation

Returns the Unit matrix for a given size.

### Category

Math and trigonometry

### Syntax

MUNIT(size)

| Parameter | Description |
| ----------- | ------------- |
| `size` | The size of the square unit matrix to return. Size is the number of rows (or columns) in the resulting matrix. |


### Behavior

The `MUNIT` spreadsheet function generates a unit matrix, which is a square matrix with ones on the diagonal and zeros elsewhere. The size of the matrix is determined by the input argument, which should be a positive integer. The function handles different types of inputs in the following ways:

- **Empty cells**: The `MUNIT` function requires an input argument. If no argument is provided, or the argument is an empty cell, the function will return an error.
- **Text**: If the input argument is text, the function will return an error.
- **Booleans**: Boolean values are not valid input for the `MUNIT` function. If a boolean value is used as an argument, the function will return an error.
- **Errors**: If the input argument is an error, the `MUNIT` function will propagate that error.
- **Numbers**: If the input argument is a positive integer, the function will generate a unit matrix of the corresponding size. If the number is not an integer or is negative, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input argument is not a positive integer. This includes negative numbers, non-integer numbers, text, booleans, and empty cells. |
| #N/A | This error occurs when the input argument is an error. The `MUNIT` function will propagate any errors in its input. |

### Best practices

> - Always ensure that the input argument to the `MUNIT` function is a positive integer. Other types of inputs will result in an error.
> - Be aware that the `MUNIT` function generates a square matrix. The size of the matrix is determined by the input argument, and the matrix will have that number of rows and columns.
> - Use the `MUNIT` function when you need a unit matrix for mathematical operations. The function is useful in linear algebra, particularly for operations involving identity matrices.
> - Remember that the `MUNIT` function will propagate any errors in its input. Always check your input arguments to avoid unexpected errors.

### Usage

A few examples using the MUNIT function.

```
MUNIT(3) returns [[1,0,0],[0,1,0],[0,0,1]]  
MUNIT(4) returns [[1,0,0,0];[0,1,0,0];[0,0,1,0];[0,0,0,1]]  
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
        "Matrix Size",
        "Formula",
        "Result"
    ],
    [
        3,
        "=MUNIT(A2)",
        "[[1,0,0],[0,1,0],[0,0,1]]"
    ],
    [
        4,
        "=MUNIT(A3)",
        "[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]"
    ],
    [
        2,
        "=MUNIT(A4)",
        "[[1,0],[0,1]]"
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
        "Matrix Size",
        "Formula",
        "Result"
    ],
    [
        3,
        "=MUNIT(A2)",
        "[[1,0,0],[0,1,0],[0,0,1]]"
    ],
    [
        4,
        "=MUNIT(A3)",
        "[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]"
    ],
    [
        2,
        "=MUNIT(A4)",
        "[[1,0],[0,1]]"
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
        "Matrix Size",
        "Formula",
        "Result"
    ],
    [
        3,
        "=MUNIT(A2)",
        "[[1,0,0],[0,1,0],[0,0,1]]"
    ],
    [
        4,
        "=MUNIT(A3)",
        "[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]"
    ],
    [
        2,
        "=MUNIT(A4)",
        "[[1,0],[0,1]]"
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
        "Matrix Size",
        "Formula",
        "Result"
    ],
    [
        3,
        "=MUNIT(A2)",
        "[[1,0,0],[0,1,0],[0,0,1]]"
    ],
    [
        4,
        "=MUNIT(A3)",
        "[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]"
    ],
    [
        2,
        "=MUNIT(A4)",
        "[[1,0],[0,1]]"
    ]
]
            }]
        });
    }
}
```

