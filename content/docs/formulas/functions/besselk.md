title: BESSELK Function – Compute the Modified Bessel Function of the Second Kind in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet functions, BESSELK, Bessel function, engineering formulas, modified Bessel function
description: How to use the BESSELK function in Jspreadsheet Formulas Pro to calculate the modified Bessel function of the second kind, K(x), for real or complex inputs. Ideal for solving advanced problems in wave analysis, heat conduction, and mathematical physics. This guide includes syntax, behavior, error handling, and usage tips.

# BESSELK function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BESSELK` function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the modified Bessel function of the second kind, represented as K(x), based on a number you provide. This number can be either real or complex. This function is particularly useful in advanced mathematical calculations relating to wave patterns, heat conduction, and other physical phenomena. It's a powerful tool for those needing to perform complex mathematical operations in their spreadsheets.

## Documentation

Returns the modified Bessel function of the second kind, `Kₙ(x)`, for a specified value x and order n.

### Category

Engineering

### Syntax

BESSELK(x, n)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The real or complex number for which to calculate the modified Bessel function. |
| `n` | The order of the Bessel function. Must be a nonnegative integer or a real number greater than -1. |


### Behavior

The `BESSELK` function in a spreadsheet computes the modified Bessel function `Kₙ(x)`. It requires two arguments: x and n. x is the value at which the function is to be evaluated and n is the order of the function. 

1. If the given cell is empty, `BESSELK` will treat it as zero.
2. The function does not accept text. If a text string is given as an argument, it will return a `#VALUE!` error.
3. It handles boolean values where TRUE is interpreted as 1 and FALSE as 0.
4. If either of the arguments are non-numeric, `BESSELK` returns a `#VALUE!` error.
5. If the argument x is negative, `BESSELK` returns a `#NUM!` error.
6. If the argument n is not an integer, `BESSELK` will truncate it to an integer.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when either of the arguments are non-numeric or are given as text strings. |
| `#NUM!` | This error is returned when the argument x is negative. |

### Best practices

> - Always ensure that both arguments are numeric. Text or non-numeric values will result in a `#VALUE!` error.
> - Be careful when using cell references or formulas for the order argument n. If the result is not an integer, `BESSELK` function will truncate it to an integer.
> - Use error handling functions like `IFERROR` to handle possible errors and prevent your spreadsheet from breaking.
> - Remember that `BESSELK` function treats empty cells as zero. Make sure to provide all required inputs.

### Usage

A few examples using the BESSELK function.

```
BESSELK(3, 2)        // Computes the modified Bessel function at x = 3, order 2  
BESSELK(1+2i, 0)     // Evaluates for a complex input  
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
        "BESSELK Result"
    ],
    [
        1.5,
        0,
        "=BESSELK(A2,B2)"
    ],
    [
        2.0,
        1,
        "=BESSELK(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELK(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELK(A5,B5)"
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
        "BESSELK Result"
    ],
    [
        1.5,
        0,
        "=BESSELK(A2,B2)"
    ],
    [
        2.0,
        1,
        "=BESSELK(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELK(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELK(A5,B5)"
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
        "BESSELK Result"
    ],
    [
        1.5,
        0,
        "=BESSELK(A2,B2)"
    ],
    [
        2.0,
        1,
        "=BESSELK(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELK(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELK(A5,B5)"
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
        "BESSELK Result"
    ],
    [
        1.5,
        0,
        "=BESSELK(A2,B2)"
    ],
    [
        2.0,
        1,
        "=BESSELK(A3,B3)"
    ],
    [
        0.5,
        2,
        "=BESSELK(A4,B4)"
    ],
    [
        3.0,
        1,
        "=BESSELK(A5,B5)"
    ]
]
            }]
        });
    }
}
```

