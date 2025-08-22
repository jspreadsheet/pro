title: BESSELJ Function – Compute the Bessel Function of the First Kind in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet functions, BESSELJ, Bessel function, engineering formulas
description: How to use the BESSELJ function in Jspreadsheet Formulas Pro to compute the Bessel function of the first kind, J(x), for real or complex numbers. This guide covers syntax, behavior, usage examples, and best practices for engineering and scientific calculations.
# BESSELJ function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BESSELJ` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the Bessel function of the first kind, J(x), for any given real or complex number x. This function is used in mathematical and engineering fields. You input a number, and the function processes it through the Bessel J equation, delivering the result. This is particularly useful for handling wave equations and heat conduction problems.

## Documentation

Returns the value of the Bessel function of the first kind, J(x), for a specified point x and order n.

### Category

Engineering

### Syntax

BESSELJ(x, n)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The real or complex number for which to calculate the Bessel function. |
| `n` | The order of the Bessel function. Must be a nonnegative integer or a real number greater than -1. |


### Behavior

The `BESSELJ` function in spreadsheets calculates the Bessel function, a solution to Bessel’s differential equation. The function takes two arguments: `x` (the value at which to evaluate the function), and `n` (the order of the Bessel function). 

- If `x` or `n` are non-numeric, `BESSELJ` will return a `#VALUE!` error.
- If `x` or `n` are empty cells, `BESSELJ` will return a `#VALUE!` error.
- If `n` is not an integer, `BESSELJ` will return a `#NUM!` error.
- The function does not handle text or booleans, it only accepts numerical inputs.
- If `n` is negative, `BESSELJ` will still calculate the function, since Bessel functions are defined for all real numbers.

### Common Errors

| Error   | Description   |
|-------- |-------------- |
| #VALUE! | This error occurs when either `x` or `n` is non-numeric or an empty cell. |
| #NUM!   | This error occurs when the `n` value is not an integer. |

### Best practices

> - Always make sure that both `x` and `n` are numerical values to avoid `#VALUE!` errors.
> - Ensure `n` is an integer, as `BESSELJ` does not work with non-integer orders and will return a `#NUM!` error.
> - `BESSELJ` can handle negative `n` values, but be aware that this could produce complex results. Make sure this is intended in your calculations.
> - Always check your result to verify it makes sense in the context of your data. Bessel functions can produce large outputs for large inputs, which can skew data if not handled properly.

### Usage

A few examples using the BESSELJ function.

```
BESSELJ(5, 2)       // Returns the Bessel function value of order 2 at x = 5  
BESSELJ(-3.5, 4.2)  // Accepts a negative x and fractional n (if supported by engine)   
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
        "n",
        "BESSELJ(x,n)"
    ],
    [
        1,
        0,
        "=BESSELJ(A2,B2)"
    ],
    [
        2,
        1,
        "=BESSELJ(A3,B3)"
    ],
    [
        3,
        2,
        "=BESSELJ(A4,B4)"
    ],
    [
        0.5,
        3,
        "=BESSELJ(A5,B5)"
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
        "n",
        "BESSELJ(x,n)"
    ],
    [
        1,
        0,
        "=BESSELJ(A2,B2)"
    ],
    [
        2,
        1,
        "=BESSELJ(A3,B3)"
    ],
    [
        3,
        2,
        "=BESSELJ(A4,B4)"
    ],
    [
        0.5,
        3,
        "=BESSELJ(A5,B5)"
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
        "n",
        "BESSELJ(x,n)"
    ],
    [
        1,
        0,
        "=BESSELJ(A2,B2)"
    ],
    [
        2,
        1,
        "=BESSELJ(A3,B3)"
    ],
    [
        3,
        2,
        "=BESSELJ(A4,B4)"
    ],
    [
        0.5,
        3,
        "=BESSELJ(A5,B5)"
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
        "n",
        "BESSELJ(x,n)"
    ],
    [
        1,
        0,
        "=BESSELJ(A2,B2)"
    ],
    [
        2,
        1,
        "=BESSELJ(A3,B3)"
    ],
    [
        3,
        2,
        "=BESSELJ(A4,B4)"
    ],
    [
        0.5,
        3,
        "=BESSELJ(A5,B5)"
    ]
]
            }]
        });
    }
}
```

