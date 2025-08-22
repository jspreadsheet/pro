title: IMCSC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMCSC function in Jspreadsheet

# IMCSC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMCSC` function in Jspreadsheet Formulas Pro is used to calculate the cosecant of a complex number. This can be particularly useful in advanced mathematics or engineering calculations. You simply input the complex number you wish to calculate the cosecant for, and the function will return the result. It is a straightforward and efficient tool for handling complex numbers in your calculations.

## Documentation

Calculates the cosecant of a complex number.

### Category

Engineering

### Syntax

IMCSC(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The angle in radians for which you want to calculate the inverse cosecant. |


### Behavior

The `IMCSC` function in spreadsheets computes the cosecant of a complex number. The function takes a single argument, which is the complex number for which the cosecant is to be calculated. Here is a breakdown of how it handles different types of inputs:

- **Numbers**: The function accepts both real and complex numbers. For real numbers, the function treats them as complex numbers with an imaginary part equal to 0.
- **Text**: If the text can be interpreted as a complex number, the function will calculate its cosecant. Otherwise, the function will return an error.
- **Boolean values**: Boolean values are interpreted as numbers before the calculation is made. `TRUE` is interpreted as 1 and `FALSE` as 0.
- **Empty cells**: If the function's argument is an empty cell, it will return an error.
- **Errors**: If the argument of the function contains a cell with an error, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the input cannot be interpreted as a complex number. For example, if the input is a string that does not represent a complex number. |
| #NUM! | This error is returned if the argument is a number but is not a valid complex number. |
| #DIV/0! | This error is returned if the function attempts to divide by zero, which can occur if the input is a complex number where both the real and imaginary parts are zero. |

### Best practices

> - Always ensure that the input to the `IMCSC` function is a valid complex number. You can use the `IMCONJUGATE`, `IMABS`, `IMARG`, `IMREAL`, and `IMIMAGINARY` functions to create and manipulate complex numbers.
> - Be aware that the `IMCSC` function can return a complex number as a result. Ensure that your spreadsheet is set up to handle complex numbers in subsequent calculations.
> - Handle errors gracefully using error-checking functions like `IFERROR` or `ISERROR`. This will allow your spreadsheet to continue functioning even if the `IMCSC` function encounters an invalid input.
> - Try to avoid using boolean values or empty cells as inputs to the `IMCSC` function to prevent unexpected results or errors.

### Usage

A few examples using the IMCSC function.

```
IMCSC("2+3i") returns approximately 0,0904+0,0412i  
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
        "Complex Number",
        "Cosecant"
    ],
    [
        "2+3i",
        "=IMCSC(A2)"
    ],
    [
        "1+2i",
        "=IMCSC(A3)"
    ],
    [
        "-1+i",
        "=IMCSC(A4)"
    ],
    [
        "3-2i",
        "=IMCSC(A5)"
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
        "Complex Number",
        "Cosecant"
    ],
    [
        "2+3i",
        "=IMCSC(A2)"
    ],
    [
        "1+2i",
        "=IMCSC(A3)"
    ],
    [
        "-1+i",
        "=IMCSC(A4)"
    ],
    [
        "3-2i",
        "=IMCSC(A5)"
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
        "Complex Number",
        "Cosecant"
    ],
    [
        "2+3i",
        "=IMCSC(A2)"
    ],
    [
        "1+2i",
        "=IMCSC(A3)"
    ],
    [
        "-1+i",
        "=IMCSC(A4)"
    ],
    [
        "3-2i",
        "=IMCSC(A5)"
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
        "Complex Number",
        "Cosecant"
    ],
    [
        "2+3i",
        "=IMCSC(A2)"
    ],
    [
        "1+2i",
        "=IMCSC(A3)"
    ],
    [
        "-1+i",
        "=IMCSC(A4)"
    ],
    [
        "3-2i",
        "=IMCSC(A5)"
    ]
]
            }]
        });
    }
}
```

