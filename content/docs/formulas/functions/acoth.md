title: ACOTH (Inverse Hyperbolic Cotangent) Function - Mathematical Calculator in Jspreadsheet
keywords: inverse hyperbolic cotangent, ACOTH, hyperbolic functions, math functions, Jspreadsheet formulas, mathematical operations, engineering calculations, signal processing, spreadsheet functions, Excel-compatible formulas
description: Learn how to use the ACOTH function in Jspreadsheet to calculate the inverse hyperbolic cotangent of a number. Essential for engineering calculations, signal processing, and mathematical analysis.

# ACOTH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ACOTH` function in Jspreadsheet Formulas Pro calculates the inverse hyperbolic cotangent of a number. It is the inverse operation of the hyperbolic cotangent (COTH) function, making it useful for solving equations involving hyperbolic functions. This mathematical function is particularly valuable in engineering calculations, signal processing, and advanced mathematical analysis. The function accepts a single numeric input and returns the corresponding inverse hyperbolic cotangent value.

## Documentation

Returns the inverse hyperbolic cotangent (arccoth) of a number. The result is the value whose hyperbolic cotangent is the input number.

### Category

Math and trigonometry

### Syntax

ACOTH(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The value for which to return the inverse hyperbolic cotangent. Must not be 0. |


### Behavior

The `ACOTH` function in spreadsheets calculates the inverse hyperbolic cotangent of a number. Here are some expected behaviors:

- The function takes one argument, which must be a numeric value greater than 1 or less than -1.
- If the argument is a cell reference, the function uses the value in that cell.
- If the argument is a text string that can be interpreted as a number, the function converts it and uses the numeric value.
- If the argument is a text string that cannot be interpreted as a number, the function returns a `#VALUE!` error.
- The function will not calculate for values between -1 and 1 (inclusive), as the inverse hyperbolic cotangent is undefined in this range.
- If the argument is a boolean value, TRUE is interpreted as 1 (resulting in a `#NUM!` error) and FALSE as 0 (also resulting in a `#NUM!` error).
- Empty cells are treated as 0, which will result in a `#NUM!` error.
- The function propagates errors - if a referenced cell contains an error, the `ACOTH` function returns that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs when the provided argument is non-numeric, like text or boolean. |
| #NUM! | Occurs when the provided argument is between -1 and 1, as the inverse hyperbolic cotangent is undefined for these values. |
| #REF! | Occurs when a referenced cell in the function is not valid. |
| #NAME? | Occurs when the function name is spelled incorrectly. |

### Best practices

> - Always ensure that the input value is a valid number outside the range [-1, 1]. The function is only defined for x < -1 or x > 1.
> - When working with cell references, verify that the referenced cells contain valid numeric values within the acceptable range.
> - Remember that the ACOTH function is the inverse of the hyperbolic cotangent (COTH). This means that COTH(ACOTH(x)) = x for x > 1 or x < -1.
> - For numerical stability, be cautious with values very close to ±1, as they may produce very large results.
> - In engineering applications, double-check your units and ensure the input values are properly scaled.
> - Consider using data validation in your spreadsheet to prevent invalid inputs in cells that will be used with ACOTH.

### Usage

Here are several examples demonstrating the usage of the ACOTH function:

```
ACOTH(2)     returns  0.5493061443   // Basic usage
ACOTH(-2)    returns -0.5493061443   // Negative input
ACOTH(5)     returns  0.2027325540   // Larger input
ACOTH(1.1)   returns  1.5222612190   // Value close to 1
ACOTH(0.5)   returns  #NUM!          // Error: input between -1 and 1
ACOTH("2")   returns  0.5493061443   // Text number is converted
ACOTH("text") returns #VALUE!        // Error: non-numeric input
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
        "Number",
        "ACOTH Result"
    ],
    [
        2,
        "=ACOTH(A2)"
    ],
    [
        1.5,
        "=ACOTH(A3)"
    ],
    [
        3,
        "=ACOTH(A4)"
    ],
    [
        -2,
        "=ACOTH(A5)"
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
        "Number",
        "ACOTH Result"
    ],
    [
        2,
        "=ACOTH(A2)"
    ],
    [
        1.5,
        "=ACOTH(A3)"
    ],
    [
        3,
        "=ACOTH(A4)"
    ],
    [
        -2,
        "=ACOTH(A5)"
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
        "Number",
        "ACOTH Result"
    ],
    [
        2,
        "=ACOTH(A2)"
    ],
    [
        1.5,
        "=ACOTH(A3)"
    ],
    [
        3,
        "=ACOTH(A4)"
    ],
    [
        -2,
        "=ACOTH(A5)"
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
        "Number",
        "ACOTH Result"
    ],
    [
        2,
        "=ACOTH(A2)"
    ],
    [
        1.5,
        "=ACOTH(A3)"
    ],
    [
        3,
        "=ACOTH(A4)"
    ],
    [
        -2,
        "=ACOTH(A5)"
    ]
]
            }]
        });
    }
}
```

