title: ATAN Function - Calculate Arctangent in Jspreadsheet
keywords: ATAN function, arctangent calculation, trigonometry, angle calculation, Excel-compatible functions, JavaScript spreadsheet functions, mathematical operations, engineering calculations, scientific computing, inverse tangent, angle conversion, radian calculation
description: Calculate arctangent (inverse tangent) values using the ATAN function in Jspreadsheet. Essential for trigonometry, engineering calculations, and scientific computing where angle calculations from tangent values are needed.

# ATAN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ATAN` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the arctangent of a given number, with the result being expressed in radians. This means it calculates the angle whose tangent is the specified number. By inputting a number into this function, it can help you determine the corresponding angle in a unit circle, a fundamental concept in trigonometry. It's particularly useful in fields like engineering, physics, and other areas that require complex mathematical calculations.

## Documentation

Returns the arctangent of a number, in radians.

### Category

Math and trigonometry

### Syntax

ATAN(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number for which to calculate the arctangent. |


### Behavior

The `ATAN` function in spreadsheets calculates the arctangent of a given number. The function accepts both positive and negative values and returns a value in the range of -π/2 through π/2. 

- If the cell is empty or contains text, the `ATAN` function will return a `#VALUE!` error.
- If the cell contains a boolean value (`TRUE` or `FALSE`), it will be coerced to numeric form (`1` for `TRUE`, `0` for `FALSE`) before calculating the arctangent.
- If the function encounters an error in the input cell, it will propagate that error to its own output.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the input cell is empty or contains non-numeric data. |
| #DIV/0! | Though this error is unlikely with the `ATAN` function as it can handle any real number as an input, it can occur if there's an error in the formula or cell reference. |
| #NAME? | This error occurs when the function name is spelled incorrectly. |

### Best practices

> - Always ensure that the input is a valid numeric value to avoid a `#VALUE!` error.
> - Remember that the `ATAN` function returns a value in radians. If you need the result in degrees, use the `DEGREES` function to convert the result.
> - Be cautious when referencing other cells as input for the `ATAN` function. If the referenced cell contains non-numeric data or an error, the `ATAN` function will also return an error.
> - Use error checking functions such as `ISERROR` or `IFERROR` to handle possible errors and maintain the cleanliness of your data.

### Usage

A few examples using the ATAN function.

```
ATAN(0) returns 0  
ATAN(1) returns 0.785398163  
ATAN(-1) returns -0.785398163  
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
        "Slope",
        "Angle (radians)",
        "Angle (degrees)"
    ],
    [
        0,
        "=ATAN(A2)",
        "=B2*180/PI()"
    ],
    [
        1,
        "=ATAN(A3)",
        "=B3*180/PI()"
    ],
    [
        0.577,
        "=ATAN(A4)",
        "=B4*180/PI()"
    ],
    [
        -1,
        "=ATAN(A5)",
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
        "Slope",
        "Angle (radians)",
        "Angle (degrees)"
    ],
    [
        0,
        "=ATAN(A2)",
        "=B2*180/PI()"
    ],
    [
        1,
        "=ATAN(A3)",
        "=B3*180/PI()"
    ],
    [
        0.577,
        "=ATAN(A4)",
        "=B4*180/PI()"
    ],
    [
        -1,
        "=ATAN(A5)",
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
        "Slope",
        "Angle (radians)",
        "Angle (degrees)"
    ],
    [
        0,
        "=ATAN(A2)",
        "=B2*180/PI()"
    ],
    [
        1,
        "=ATAN(A3)",
        "=B3*180/PI()"
    ],
    [
        0.577,
        "=ATAN(A4)",
        "=B4*180/PI()"
    ],
    [
        -1,
        "=ATAN(A5)",
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
        "Slope",
        "Angle (radians)",
        "Angle (degrees)"
    ],
    [
        0,
        "=ATAN(A2)",
        "=B2*180/PI()"
    ],
    [
        1,
        "=ATAN(A3)",
        "=B3*180/PI()"
    ],
    [
        0.577,
        "=ATAN(A4)",
        "=B4*180/PI()"
    ],
    [
        -1,
        "=ATAN(A5)",
        "=B5*180/PI()"
    ]
]
            }]
        });
    }
}
```

