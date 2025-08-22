title: ATANH Function - Calculate Inverse Hyperbolic Tangent in Jspreadsheet
keywords: ATANH function, inverse hyperbolic tangent, hyperbolic functions, mathematical calculations, Excel-compatible functions, JavaScript spreadsheet functions, advanced mathematics, scientific computing, engineering calculations, mathematical analysis, hyperbolic trigonometry
description: Calculate inverse hyperbolic tangent values using the ATANH function in Jspreadsheet. Essential for advanced mathematics, engineering applications, and scientific calculations requiring hyperbolic trigonometric operations.

# ATANH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ATANH` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the inverse hyperbolic tangent of a number. It's like asking, "what angle's hyperbolic tangent gives me this number?" You input the number you're curious about, and it outputs the corresponding hyperbolic angle. This function is especially useful in advanced mathematical, scientific, or engineering calculations.

## Documentation

Returns the inverse hyperbolic tangent of a number.

### Category

Math and trigonometry

### Syntax

ATANH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the inverse hyperbolic tangent. Must be between -1 and 1, exclusive. |


### Behavior

The `ATANH` function in spreadsheets returns the inverse hyperbolic tangent of a number. Here's how it handles various inputs:

- **Numbers**: The `ATANH` function takes a single numerical argument. The value must be between -1 and 1 (exclusive), otherwise the function returns an error.
- **Empty Cells**: If the `ATANH` function is applied to an empty cell, it treats the cell as zero.
- **Text**: If the argument is text, `ATANH` returns a `#VALUE!` error.
- **Booleans**: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE being equivalent to 0. The `ATANH` of TRUE would result in an error since the value is not between -1 and 1.
- **Errors**: If the argument is an error, `ATANH` propagates the error. This means if the input cell has an error, the `ATANH` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#NUM!` | This error occurs when the absolute value of the input number is not less than 1. |
| `#VALUE!` | This error is returned when the input value is non-numeric or is outside the function's domain. |

### Best practices

> - Always ensure the input value is between -1 and 1 (exclusive), otherwise the `ATANH` function will return an error.
> - Be cautious when applying the `ATANH` function to cells with formulas. If the formula results in a value outside the valid range, `ATANH` will return an error.
> - To avoid `#VALUE!` errors, make sure the input cell does not contain non-numeric values.
> - It's a good practice to handle possible errors using error handling functions like `IFERROR` or `ISERROR` to make your spreadsheet more robust and easier to read.

### Usage

A few examples using the ATANH function.

```
ATANH(0)  
ATANH(0.5)  
ATANH(-0.8)  
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
        "Tanh Value",
        "ATANH Result"
    ],
    [
        0,
        "=ATANH(A2)"
    ],
    [
        0.5,
        "=ATANH(A3)"
    ],
    [
        -0.8,
        "=ATANH(A4)"
    ],
    [
        0.9,
        "=ATANH(A5)"
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
        "Tanh Value",
        "ATANH Result"
    ],
    [
        0,
        "=ATANH(A2)"
    ],
    [
        0.5,
        "=ATANH(A3)"
    ],
    [
        -0.8,
        "=ATANH(A4)"
    ],
    [
        0.9,
        "=ATANH(A5)"
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
        "Tanh Value",
        "ATANH Result"
    ],
    [
        0,
        "=ATANH(A2)"
    ],
    [
        0.5,
        "=ATANH(A3)"
    ],
    [
        -0.8,
        "=ATANH(A4)"
    ],
    [
        0.9,
        "=ATANH(A5)"
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
        "Tanh Value",
        "ATANH Result"
    ],
    [
        0,
        "=ATANH(A2)"
    ],
    [
        0.5,
        "=ATANH(A3)"
    ],
    [
        -0.8,
        "=ATANH(A4)"
    ],
    [
        0.9,
        "=ATANH(A5)"
    ]
]
            }]
        });
    }
}
```

