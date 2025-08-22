title: ASINH Function - Calculate Inverse Hyperbolic Sine in Jspreadsheet
keywords: ASINH function, inverse hyperbolic sine, hyperbolic functions, mathematical calculations, Excel-compatible functions, JavaScript spreadsheet functions, advanced mathematics, scientific computing, engineering calculations, mathematical analysis, hyperbolic trigonometry
description: Calculate inverse hyperbolic sine values using the ASINH function in Jspreadsheet. Essential for advanced mathematics, engineering applications, and scientific calculations requiring hyperbolic trigonometric operations.

# ASINH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ASINH` function in Jspreadsheet Formulas Pro is a mathematical tool that computes the inverse hyperbolic sine of a given number. This means it reverses the process of the hyperbolic sine function, effectively determining the value whose hyperbolic sine is the input number. Essentially, if you have the result of a hyperbolic sine operation, you can use `ASINH` to find out the original number. This function is useful in various engineering, physics and mathematics calculations.

## Documentation

Returns the inverse hyperbolic sine of a number.

### Category

Math and trigonometry

### Syntax

ASINH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the inverse hyperbolic sine. |


### Behavior

The 'ASINH' function in spreadsheets returns the inverse hyperbolic sine of a number. It requires one argument, which is the number for which you want to calculate the inverse hyperbolic sine. 

- If the cell is empty, the function will return `#NUM!` error.
- If the cell contains text, the function will return `#VALUE!` error.
- For boolean values, TRUE is treated as 1 and FALSE is treated as 0.
- If the cell contains a logical or numerical value, the function will compute the inverse hyperbolic sine of this value.
- If the cell contains an error (e.g., `#DIV/0!`, `#N/A`, `#NAME?`, `#NULL!`, `#NUM!`, `#REF!`, `#VALUE!`), the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | Occurs when the cell is empty or the value is non-numeric. |
| `#VALUE!` | Occurs when the cell contains text. |
| `#NAME?` | Occurs when the function is misspelled or does not exist. |

### Best practices

> - Always ensure that the cells you are referencing in your 'ASINH' function contain numeric values to avoid `#NUM!` and `#VALUE!` errors.
> - Use error handling functions like `IFERROR` or `ISNUMBER` to manage potential errors that might occur with 'ASINH'.
> - Remember that the result of 'ASINH' is in radians. If you need the result in degrees, you will need to convert it using the 'DEGREES' function.
> - Be aware that the 'ASINH' function can handle negative values and values greater than 1, unlike the 'ASIN' function.

### Usage

A few examples using the ASINH function.

```
ASINH(0) returns 0  
ASINH(1) returns 0.881373587  
ASINH(2) returns 1.443635475  
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
        "Value",
        "ASINH Result"
    ],
    [
        0,
        "=ASINH(A2)"
    ],
    [
        1,
        "=ASINH(A3)"
    ],
    [
        2,
        "=ASINH(A4)"
    ],
    [
        -1,
        "=ASINH(A5)"
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
        "Value",
        "ASINH Result"
    ],
    [
        0,
        "=ASINH(A2)"
    ],
    [
        1,
        "=ASINH(A3)"
    ],
    [
        2,
        "=ASINH(A4)"
    ],
    [
        -1,
        "=ASINH(A5)"
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
        "Value",
        "ASINH Result"
    ],
    [
        0,
        "=ASINH(A2)"
    ],
    [
        1,
        "=ASINH(A3)"
    ],
    [
        2,
        "=ASINH(A4)"
    ],
    [
        -1,
        "=ASINH(A5)"
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
        "Value",
        "ASINH Result"
    ],
    [
        0,
        "=ASINH(A2)"
    ],
    [
        1,
        "=ASINH(A3)"
    ],
    [
        2,
        "=ASINH(A4)"
    ],
    [
        -1,
        "=ASINH(A5)"
    ]
]
            }]
        });
    }
}
```

