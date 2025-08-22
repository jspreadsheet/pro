title: ACOT (Arccotangent) Function - Inverse Cotangent Calculator in Jspreadsheet
keywords: arccotangent, inverse cotangent, ACOT, trigonometry, math functions, radians, angle calculation, Jspreadsheet formulas, mathematical operations, trigonometric functions
description: Learn how to use the ACOT function in Jspreadsheet to calculate the inverse cotangent (arccotangent) of a number. Returns the angle in radians whose cotangent is the specified value.

# ACOT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ACOT` function in Jspreadsheet Formulas Pro calculates the inverse cotangent (also known as arccotangent) of a number. It returns the angle in radians whose cotangent equals the input value. For any real number x, ACOT(x) returns a value in the range (0, π). This function is essential in trigonometry, engineering calculations, physics simulations, and mathematical analysis where you need to find angles from cotangent ratios.

## Documentation

Returns the arccotangent of a number, in radians.

### Category

Math and trigonometry

### Syntax

ACOT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value for which to return the arccotangent. |


### Behavior
The `ACOT` function in spreadsheets calculates the inverse cotangent of a number. Here's how it generally behaves:

- The function takes one argument, which is the numeric value whose arccotangent you want to compute.
- If the argument is a cell reference, the function uses the value in the cell.
- If the argument is a text string that can be interpreted as a number, the function uses the number.
- If the argument is a text string that cannot be interpreted as a number, the function returns a `#VALUE!` error.
- If the argument is a boolean, it is interpreted as `1` for TRUE and `0` for FALSE.
- If the argument is an array or range, the function calculates the inverse cotangent for each value and returns an array of results.
- If the argument is an empty cell, it is treated as `0`.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The input argument is non-numeric or a text string that cannot be interpreted as a number. |
| #NUM! | The input argument is outside the valid range for real number results. |

### Best practices
> - Always ensure that the input to the `ACOT` function is a numeric value. Non-numeric values will cause a `#VALUE!` error.
> - Remember that the `ACOT` function returns the result in radians. If you need the result in degrees, you must convert it using the `DEGREES` function.
> - The ACOT function returns values in the range (0, π) for any real input value. This makes it particularly useful for angle calculations in the first and second quadrants.
> - For more precise calculations, consider using more decimal places in your input values, as trigonometric functions can be sensitive to small variations.
> - When working with angles, remember that π radians equals 180 degrees. You can use this relationship to convert between the two units.

### Usage

Here are some examples of using the ACOT function with different input values:

```
ACOT(1) returns 0.7853981634 (π/4 radians or 45 degrees)
ACOT(2) returns 0.4636476090 (approximately 26.57 degrees)
ACOT(-1) returns 2.356194490 (3π/4 radians or 135 degrees)
ACOT(0.5) returns 1.107148718 (approximately 63.43 degrees)
```

Note: Results are shown in radians. Use the DEGREES function to convert to degrees if needed.

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
        "X Value",
        "ACOT(X)",
        "Degrees"
    ],
    [
        1,
        "=ACOT(A2)",
        "=B2*180/PI()"
    ],
    [
        0,
        "=ACOT(A3)",
        "=B3*180/PI()"
    ],
    [
        -1,
        "=ACOT(A4)",
        "=B4*180/PI()"
    ],
    [
        2,
        "=ACOT(A5)",
        "=B5*180/PI()"
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
        "X Value",
        "ACOT(X)",
        "Degrees"
    ],
    [
        1,
        "=ACOT(A2)",
        "=B2*180/PI()"
    ],
    [
        0,
        "=ACOT(A3)",
        "=B3*180/PI()"
    ],
    [
        -1,
        "=ACOT(A4)",
        "=B4*180/PI()"
    ],
    [
        2,
        "=ACOT(A5)",
        "=B5*180/PI()"
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
        "X Value",
        "ACOT(X)",
        "Degrees"
    ],
    [
        1,
        "=ACOT(A2)",
        "=B2*180/PI()"
    ],
    [
        0,
        "=ACOT(A3)",
        "=B3*180/PI()"
    ],
    [
        -1,
        "=ACOT(A4)",
        "=B4*180/PI()"
    ],
    [
        2,
        "=ACOT(A5)",
        "=B5*180/PI()"
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
        "X Value",
        "ACOT(X)",
        "Degrees"
    ],
    [
        1,
        "=ACOT(A2)",
        "=B2*180/PI()"
    ],
    [
        0,
        "=ACOT(A3)",
        "=B3*180/PI()"
    ],
    [
        -1,
        "=ACOT(A4)",
        "=B4*180/PI()"
    ],
    [
        2,
        "=ACOT(A5)",
        "=B5*180/PI()"
    ]
]
            }]
        });
    }
}
```

