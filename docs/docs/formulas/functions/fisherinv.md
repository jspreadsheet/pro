title: FISHERINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FISHERINV function in Jspreadsheet

# FISHERINV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FISHERINV` function in Jspreadsheet Formulas Pro is a powerful tool that gives you the original value before a Fisher transformation took place on it. It's like a reverse process. You simply input the Fisher transformed value and it will calculate the pre-transformed figure. This is particularly useful in statistical analysis where Fisher transformation is often applied.

## Documentation

Returns the inverse of the Fisher transformation on a specified value.

### Category

Statistical

### Syntax

FISHERINV(y)

| Parameter | Description |
| ----------- | ------------- |
| `y` | The numeric value for which to find the inverse Fisher transformation. |


### Behavior

The 'FISHERINV' function in spreadsheets is used to perform the inverse of the Fisher transformation. The function helps to revert the transformed data back to its original form. The function expects a single numerical input.

- If the cell is empty, the function will return an error because it requires a numerical input to work properly.
- If the cell contains text, the function will return an error as it can only handle numerical values.
- If the cell contains a boolean value, the function will convert it into a numerical value (1 for TRUE and 0 for FALSE) before performing the transformation.
- If the cell contains an error, the function will return that error.
- If the cell contains a numerical value, the function will perform the inverse Fisher transformation on that value.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error is returned if the input is non-numeric. |
| #NUM! | This error is returned if the absolute value of the input is greater than or equal to 1. |
| #DIV/0! | This error is returned if the input is exactly 1. |

### Best practices

> - Always ensure that the input for the 'FISHERINV' function is a numerical value within the range -1 to 1 (exclusive).
> - Remember that 'FISHERINV' calculates the inverse of the Fisher transformation, not the original transformation. To perform the Fisher transformation, use the 'FISHER' function.
> - Check your data for errors before applying the 'FISHERINV' function to avoid propagation of errors.
> - Use 'FISHERINV' function when you are dealing with hyperbolic data and you want to revert the transformed data back to its original form.

### Usage

A few examples using the FISHERINV function.

```
FISHERINV(0.549306144334055) returns 0.5  
FISHERINV(1.09861228866811) returns 0.8  
FISHERINV(-0.20273255405408) returns -0.2  
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
        "Fisher Y Value",
        "Original Correlation",
        "Formula"
    ],
    [
        0.549306144334055,
        "=FISHERINV(A2)",
        "=FISHERINV(A2)"
    ],
    [
        1.09861228866811,
        "=FISHERINV(A3)",
        "=FISHERINV(A3)"
    ],
    [
        -0.20273255405408,
        "=FISHERINV(A4)",
        "=FISHERINV(A4)"
    ],
    [
        0.693147180559945,
        "=FISHERINV(A5)",
        "=FISHERINV(A5)"
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
        "Fisher Y Value",
        "Original Correlation",
        "Formula"
    ],
    [
        0.549306144334055,
        "=FISHERINV(A2)",
        "=FISHERINV(A2)"
    ],
    [
        1.09861228866811,
        "=FISHERINV(A3)",
        "=FISHERINV(A3)"
    ],
    [
        -0.20273255405408,
        "=FISHERINV(A4)",
        "=FISHERINV(A4)"
    ],
    [
        0.693147180559945,
        "=FISHERINV(A5)",
        "=FISHERINV(A5)"
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
        "Fisher Y Value",
        "Original Correlation",
        "Formula"
    ],
    [
        0.549306144334055,
        "=FISHERINV(A2)",
        "=FISHERINV(A2)"
    ],
    [
        1.09861228866811,
        "=FISHERINV(A3)",
        "=FISHERINV(A3)"
    ],
    [
        -0.20273255405408,
        "=FISHERINV(A4)",
        "=FISHERINV(A4)"
    ],
    [
        0.693147180559945,
        "=FISHERINV(A5)",
        "=FISHERINV(A5)"
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
        "Fisher Y Value",
        "Original Correlation",
        "Formula"
    ],
    [
        0.549306144334055,
        "=FISHERINV(A2)",
        "=FISHERINV(A2)"
    ],
    [
        1.09861228866811,
        "=FISHERINV(A3)",
        "=FISHERINV(A3)"
    ],
    [
        -0.20273255405408,
        "=FISHERINV(A4)",
        "=FISHERINV(A4)"
    ],
    [
        0.693147180559945,
        "=FISHERINV(A5)",
        "=FISHERINV(A5)"
    ]
]
            }]
        });
    }
}
```

