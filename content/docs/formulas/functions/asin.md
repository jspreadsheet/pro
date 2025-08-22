title: ASIN Function - Calculate Inverse Sine in Jspreadsheet
keywords: ASIN function, inverse sine, trigonometry, mathematical calculations, Excel-compatible functions, JavaScript spreadsheet functions, angle calculation, scientific computing, engineering calculations, mathematical functions, trigonometric operations
description: Calculate inverse sine (arcsin) values using the ASIN function in Jspreadsheet. Essential for trigonometry, engineering calculations, and scientific computing where inverse trigonometric operations are needed.

# ASIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ASIN` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the inverse sine of a number, but expressed in radians. If you have a specific number and want to find out its arc sine (the angle whose sine is that number), you use this function. It's helpful in various mathematical and trigonometric calculations. Remember, the result will be in radians, not degrees.

## Documentation

Returns the inverse sine of a number, in radians.

### Category

Math and trigonometry

### Syntax

ASIN(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the inverse sine. Must be between -1 and 1, inclusive. |


### Behavior

The `ASIN` function in spreadsheets returns the arcsine of a number. The arcsine is the inverse sine function, so it returns the angle whose sine is a given number. The returned value is in radians and ranges from `-π/2` to `π/2`.

Here's how `ASIN` behaves with different types of inputs:

- Numbers: `ASIN` expects a number between -1 and 1 as input. It will return the arcsine of the number in radians.
- Texts: If a text string is provided as input, `ASIN` will return a `#VALUE!` error indicating that the input is not valid.
- Booleans: Boolean values are interpreted as numbers in spreadsheets where `TRUE` is equivalent to 1 and `FALSE` is equivalent to 0. `ASIN` returns the arcsine of these numerical equivalents.
- Empty cells: If the cell referenced is empty, `ASIN` will return a `#VALUE!` error.
- Errors: If the input or cell reference contains an error, `ASIN` will propagate that error.
- Numbers outside the range -1 to 1: If a number outside the range -1 to 1 is provided, `ASIN` returns a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error is returned when the input value is non-numeric, an empty cell, or a text string. |
| `#NUM!` | This error is returned when the input value is less than -1 or greater than 1. |

### Best practices

> - Always ensure the input to the `ASIN` function is a numeric value between -1 and 1 to avoid `#VALUE!` or `#NUM!` errors.
> - Keep in mind that the `ASIN` function returns values in radians.
> - If you're working with angles often, it might be helpful to create a separate function to convert radians to degrees to interpret the `ASIN` output more easily.
> - Do not use `ASIN` function on cells that might contain text or errors to avoid unexpected `#VALUE!` errors.

### Usage

A few examples using the ASIN function.

```
ASIN(0) returns 0  
ASIN(1) returns 1.570796327  
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
        "Sine Value",
        "Arcsine (radians)",
        "Arcsine (degrees)"
    ],
    [
        0,
        "=ASIN(A2)",
        "=DEGREES(B2)"
    ],
    [
        0.5,
        "=ASIN(A3)",
        "=DEGREES(B3)"
    ],
    [
        0.707,
        "=ASIN(A4)",
        "=DEGREES(B4)"
    ],
    [
        1,
        "=ASIN(A5)",
        "=DEGREES(B5)"
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
        "Sine Value",
        "Arcsine (radians)",
        "Arcsine (degrees)"
    ],
    [
        0,
        "=ASIN(A2)",
        "=DEGREES(B2)"
    ],
    [
        0.5,
        "=ASIN(A3)",
        "=DEGREES(B3)"
    ],
    [
        0.707,
        "=ASIN(A4)",
        "=DEGREES(B4)"
    ],
    [
        1,
        "=ASIN(A5)",
        "=DEGREES(B5)"
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
        "Sine Value",
        "Arcsine (radians)",
        "Arcsine (degrees)"
    ],
    [
        0,
        "=ASIN(A2)",
        "=DEGREES(B2)"
    ],
    [
        0.5,
        "=ASIN(A3)",
        "=DEGREES(B3)"
    ],
    [
        0.707,
        "=ASIN(A4)",
        "=DEGREES(B4)"
    ],
    [
        1,
        "=ASIN(A5)",
        "=DEGREES(B5)"
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
        "Sine Value",
        "Arcsine (radians)",
        "Arcsine (degrees)"
    ],
    [
        0,
        "=ASIN(A2)",
        "=DEGREES(B2)"
    ],
    [
        0.5,
        "=ASIN(A3)",
        "=DEGREES(B3)"
    ],
    [
        0.707,
        "=ASIN(A4)",
        "=DEGREES(B4)"
    ],
    [
        1,
        "=ASIN(A5)",
        "=DEGREES(B5)"
    ]
]
            }]
        });
    }
}
```

