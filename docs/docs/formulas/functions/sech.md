title: SECH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SECH function in Jspreadsheet

# SECH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SECH` function in Jspreadsheet Formulas Pro is a mathematical formula that gives you the hyperbolic secant of a number. Basically, this means it performs a specific trigonometric calculation on the number you provide. You use it by typing `=SECH()` into a cell, then putting the number you want to calculate inside the parentheses. It's a useful formula for more complex calculations in fields like engineering or physics.

## Documentation

Returns the hyperbolic secant of a number.

### Category

Math and trigonometry

### Syntax

SECH(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The numeric value for which to calculate the hyperbolic secant. |


### Behavior

The `SECH` function in a spreadsheet returns the hyperbolic secant of a number. The number is the angle in radian for which you want the hyperbolic secant. Here's how it handles different inputs:

- **Numbers**: If the input is a number, the function calculates the hyperbolic secant of the number.
- **Empty Cells**: If a cell reference is empty, the function treats it as zero.
- **Non-Numeric Values**: If the cell contains text, boolean values, or error values, the function will return an error.
- **Boolean Values**: The function will return an error if it encounters a boolean value.
- **Error**: If any error occurs in the calculation or the input values, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the function encounters a non-numeric value, it returns a #VALUE! error. |
| #NUM! | If the calculation results in a number that's too large or too small for the spreadsheet to handle, it returns a #NUM! error. |

### Best Practices

> - Always ensure that the input to the `SECH` function is a numeric value. Non-numeric values like text, boolean values or errors will cause the function to return an error.
> - Be aware that the `SECH` function treats an empty cell as zero, which might not always be the desired behavior.
> - Use error handling techniques to manage possible errors when using the `SECH` function. This will make your spreadsheet more robust and less likely to break with unexpected input values.
> - Keep in mind that the `SECH` function expects the input to be in radians. If you're using degrees, convert them to radians first.

### Usage

A few examples using the SECH function.

```
SECH(0.5) returns 0.886818883970074  
SECH(1) returns 0.648054273663885  
  
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
        "Angle (radians)",
        "Hyperbolic Secant"
    ],
    [
        0,
        "=SECH(A2)"
    ],
    [
        0.5,
        "=SECH(A3)"
    ],
    [
        1,
        "=SECH(A4)"
    ],
    [
        1.5,
        "=SECH(A5)"
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
        "Angle (radians)",
        "Hyperbolic Secant"
    ],
    [
        0,
        "=SECH(A2)"
    ],
    [
        0.5,
        "=SECH(A3)"
    ],
    [
        1,
        "=SECH(A4)"
    ],
    [
        1.5,
        "=SECH(A5)"
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
        "Angle (radians)",
        "Hyperbolic Secant"
    ],
    [
        0,
        "=SECH(A2)"
    ],
    [
        0.5,
        "=SECH(A3)"
    ],
    [
        1,
        "=SECH(A4)"
    ],
    [
        1.5,
        "=SECH(A5)"
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
        "Angle (radians)",
        "Hyperbolic Secant"
    ],
    [
        0,
        "=SECH(A2)"
    ],
    [
        0.5,
        "=SECH(A3)"
    ],
    [
        1,
        "=SECH(A4)"
    ],
    [
        1.5,
        "=SECH(A5)"
    ]
]
            }]
        });
    }
}
```

