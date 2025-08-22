title: SINH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SINH function in Jspreadsheet

# SINH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SINH` function in Jspreadsheet Formulas Pro is a mathematical tool that helps you find the hyperbolic sine of a number. Essentially, it calculates and returns the ratio of the hyperbolic sine of an angle. This function can be beneficial when dealing with complex mathematical calculations, especially those involving hyperbolic trigonometric functions. To use it, you simply input the number or cell reference you want to find the hyperbolic sine for within the parentheses: `SINH(number)`.

## Documentation

Returns the hyperbolic sine of a number.

### Category

Math and trigonometry

### Syntax

SINH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the hyperbolic sine. |


### Behavior

The `SINH` function in a spreadsheet returns the hyperbolic sine of a given number. The hyperbolic sine is calculated as `(e^n - e^-n)/2` where `e` is Euler's number and `n` is the given number. 

Here's how it handles different types of inputs:

- **Empty cells**: If the `SINH` function is given an empty cell, it will treat it as zero and will return zero as the result.
- **Text**: If a text string is provided as an argument, the function will return a `#VALUE!` error, indicating that the input value type is incompatible.
- **Booleans**: If a boolean value is provided to the `SINH` function, it will treat `TRUE` as 1 and `FALSE` as 0. The corresponding hyperbolic sine value will be returned.
- **Errors**: If the `SINH` function encounters an error value as its argument, it will propagate the error. For example, if `#N/A` error is given as an input, `#N/A` will be the output.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the given argument is non-numeric, such as a text string. |
| #N/A | This error is returned when the cell referenced in the argument contains an error. |

### Best practices
> - Always make sure to provide numeric values as input to the `SINH` function to avoid `#VALUE!` errors.
> - Be aware that `SINH` treats boolean values as numbers. If your data contains boolean values, you may want to convert them to appropriate numeric values before applying `SINH`.
> - Remember that `SINH` will propagate any error values from its arguments. Ensure your data is clean and error-free before applying this function.
> - Use the `SINH` function with other mathematical functions to create complex formulas where needed, but be mindful of the order of operations.

### Usage

A few examples using the SINH function.

```
SINH(0) returns 0  
SINH(1) returns approximately 1.1752  
SINH(-2) returns approximately -3.62686  
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
        "x",
        "SINH(x)",
        "Description"
    ],
    [
        0,
        "=SINH(A2)",
        "Hyperbolic sine of 0"
    ],
    [
        1,
        "=SINH(A3)",
        "Hyperbolic sine of 1"
    ],
    [
        -2,
        "=SINH(A4)",
        "Hyperbolic sine of -2"
    ],
    [
        0.5,
        "=SINH(A5)",
        "Hyperbolic sine of 0.5"
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
        "x",
        "SINH(x)",
        "Description"
    ],
    [
        0,
        "=SINH(A2)",
        "Hyperbolic sine of 0"
    ],
    [
        1,
        "=SINH(A3)",
        "Hyperbolic sine of 1"
    ],
    [
        -2,
        "=SINH(A4)",
        "Hyperbolic sine of -2"
    ],
    [
        0.5,
        "=SINH(A5)",
        "Hyperbolic sine of 0.5"
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
        "x",
        "SINH(x)",
        "Description"
    ],
    [
        0,
        "=SINH(A2)",
        "Hyperbolic sine of 0"
    ],
    [
        1,
        "=SINH(A3)",
        "Hyperbolic sine of 1"
    ],
    [
        -2,
        "=SINH(A4)",
        "Hyperbolic sine of -2"
    ],
    [
        0.5,
        "=SINH(A5)",
        "Hyperbolic sine of 0.5"
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
        "x",
        "SINH(x)",
        "Description"
    ],
    [
        0,
        "=SINH(A2)",
        "Hyperbolic sine of 0"
    ],
    [
        1,
        "=SINH(A3)",
        "Hyperbolic sine of 1"
    ],
    [
        -2,
        "=SINH(A4)",
        "Hyperbolic sine of -2"
    ],
    [
        0.5,
        "=SINH(A5)",
        "Hyperbolic sine of 0.5"
    ]
]
            }]
        });
    }
}
```

