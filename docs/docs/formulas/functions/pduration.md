title: PDURATION function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PDURATION function in Jspreadsheet

# PDURATION function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PDURATION` function in Jspreadsheet Formulas Pro is a financial tool used to determine the length of time it will take for an investment to reach a specific value. It takes into account periodic interest payments that are made over the life of the investment. This function is especially useful in understanding how long your investment needs to mature or reach a certain goal, with the influence of regular interest payments. It's a very practical function for anyone who is managing their own investments or looking for detailed financial analysis.

## Documentation

Calculates the duration of a security with periodic interest payments.

### Category

Financial

### Syntax

PDURATION(rate, pv, fv)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The annual interest rate of the security. |
| `pv` | The present value of the security. |
| `fv` | The future value, or final redemption value, of the security. |


### Behavior

The `PDURATION` function in spreadsheets calculates the number of periods required to reach a specified future value with a given rate and constant, periodic payment. Here's how it handles different input types:

- Empty Cells: If any of the input cells are empty, the function will return an error, as it requires all parameters to be specified.
- Text: The function cannot process text input and will return an error if text is entered for any of the parameters.
- Booleans: Boolean values are not acceptable inputs for the `PDURATION` function. The function will return an error if any of the parameters are boolean values.
- Errors: If any of the parameters are cells that contain errors, the `PDURATION` function will return an error.
- Negative Numbers: The rate and future value should be positive numbers. If negative numbers are used, the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if any of the function's arguments are text that cannot be translated into numbers. |
| #NUM! | This error typically appears when the rate is less than or equal to -1, or the future value is less than or equal to 0. |
| #DIV/0! | This error occurs if the rate or future value is set to 0, which would result in a division by zero error. |
| #N/A | This error occurs if any of the required arguments are missing. |

### Best practices

> - Always ensure that all required parameters are provided and are of the correct data type. The function requires all parameters to be numerical values.
> - Be careful with the rate you input. The rate should be the rate per period, not the annual rate. If you have an annual rate, you need to divide it by the number of periods per year.
> - Check the units of your rate and future value. They should be consistent. For example, if your rate is per month, your future value should be the value after a certain number of months, not years.
> - Use cell references instead of direct numbers in the `PDURATION` function. This makes the function more flexible and your spreadsheet less prone to errors.

### Usage

A few examples using the PDURATION function.

```
PDURATION(0.08, 1000, 1100) returns approximately 1.238421134  
PDURATION(0.05,500,600) returns approximately 3.736850652  
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
        "Rate",
        "Present Value",
        "Future Value",
        "Duration (Years)"
    ],
    [
        0.08,
        1000,
        1100,
        "=PDURATION(A2,B2,C2)"
    ],
    [
        0.05,
        500,
        600,
        "=PDURATION(A3,B3,C3)"
    ],
    [
        0.06,
        2000,
        2500,
        "=PDURATION(A4,B4,C4)"
    ],
    [
        0.04,
        10000,
        12000,
        "=PDURATION(A5,B5,C5)"
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
        "Rate",
        "Present Value",
        "Future Value",
        "Duration (Years)"
    ],
    [
        0.08,
        1000,
        1100,
        "=PDURATION(A2,B2,C2)"
    ],
    [
        0.05,
        500,
        600,
        "=PDURATION(A3,B3,C3)"
    ],
    [
        0.06,
        2000,
        2500,
        "=PDURATION(A4,B4,C4)"
    ],
    [
        0.04,
        10000,
        12000,
        "=PDURATION(A5,B5,C5)"
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
        "Rate",
        "Present Value",
        "Future Value",
        "Duration (Years)"
    ],
    [
        0.08,
        1000,
        1100,
        "=PDURATION(A2,B2,C2)"
    ],
    [
        0.05,
        500,
        600,
        "=PDURATION(A3,B3,C3)"
    ],
    [
        0.06,
        2000,
        2500,
        "=PDURATION(A4,B4,C4)"
    ],
    [
        0.04,
        10000,
        12000,
        "=PDURATION(A5,B5,C5)"
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
        "Rate",
        "Present Value",
        "Future Value",
        "Duration (Years)"
    ],
    [
        0.08,
        1000,
        1100,
        "=PDURATION(A2,B2,C2)"
    ],
    [
        0.05,
        500,
        600,
        "=PDURATION(A3,B3,C3)"
    ],
    [
        0.06,
        2000,
        2500,
        "=PDURATION(A4,B4,C4)"
    ],
    [
        0.04,
        10000,
        12000,
        "=PDURATION(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

