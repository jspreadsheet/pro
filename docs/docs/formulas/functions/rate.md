title: RATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RATE function in Jspreadsheet

# RATE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RATE` function in Jspreadsheet Formulas Pro is a useful tool that calculates the interest rate for each period of an annuity. This can be particularly useful if you're trying to work out the recurring interest rate on investments or loans. You input the total number of payment periods, the payment made each period, and the present value of the loan or investment. The function then gives you the interest rate for each of those periods.

## Documentation

Returns the interest rate per period of an annuity.

### Category

Financial

### Syntax

RATE(nper, pmt, pv, [fv], [type], [guess])

| Parameter | Description |
| ----------- | ------------- |
| `nper` | The total number of payment periods. |
| `pmt` | The amount paid each period, such as a loan or lease payment. |
| `pv` | The present value, or the total amount that a series of future payments is worth now. |
| `[fv]` | Optional. The future value, or a cash balance you want to attain after the last payment is made. If omitted, assumed to be 0. |
| `[type]` | Optional. When payments are due: 0 for end of period (default), or 1 for beginning of period. |
| `[guess]` | Optional. Your guess for what the rate will be; if omitted, RATE uses 10 percent. |


### Behavior

The `RATE` function in a spreadsheet is used to calculate the interest rate per period of an annuity. It requires three basic inputs: the total number of payment periods in an annuity, the payment made each period, and the present value.

- Empty cells: If any of the required inputs are left empty or missing, the `RATE` function would return a `#NUM!` error.

- Text: If the function encounters text where it expects a number, it returns a `#VALUE!` error.

- Booleans: Boolean values are treated as numbers in the `RATE` function, with TRUE being equivalent to 1 and FALSE equivalent to 0. However, it is not common to use Boolean values in financial calculations.

- Errors: If any of the inputs to the `RATE` function are other formulas that result in an error, the `RATE` function will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#NUM!` | This error occurs when the `RATE` function fails to find a result after 20 iterations. This can occur if any of the inputs are non-numeric or if the calculation is not converging to a solution. |
| `#VALUE!` | This error occurs when one or more of the arguments passed to the `RATE` function are text that cannot be interpreted as numbers.  |
| `#DIV/0!` | This error occurs when the function attempts to divide by zero, which is not allowed in mathematics. |

### Best practices

> - Always ensure that the input values to the `RATE` function are numeric. The function does not handle text well and will return an error.
> - Be aware that the `RATE` function assumes that payments are made at the end of each period. If payments are made at the beginning of each period, you will need to adjust your calculations appropriately.
> - If the `RATE` function returns a `#NUM!` error, consider using the optional `guess` parameter to provide a starting point for the iteration process.
> - To improve readability and maintainability of your spreadsheet, consider breaking out complex formulas that include the `RATE` function into multiple cells or steps.

### Usage

A few examples using the RATE function.

```
RATE(12, 100, -1000)  
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
        "Periods",
        "Payment",
        "Present Value",
        "Interest Rate"
    ],
    [
        12,
        -100,
        1000,
        "=RATE(A2,B2,C2)"
    ],
    [
        24,
        -250,
        5000,
        "=RATE(A3,B3,C3)"
    ],
    [
        36,
        -180,
        6000,
        "=RATE(A4,B4,C4)"
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
        "Periods",
        "Payment",
        "Present Value",
        "Interest Rate"
    ],
    [
        12,
        -100,
        1000,
        "=RATE(A2,B2,C2)"
    ],
    [
        24,
        -250,
        5000,
        "=RATE(A3,B3,C3)"
    ],
    [
        36,
        -180,
        6000,
        "=RATE(A4,B4,C4)"
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
        "Periods",
        "Payment",
        "Present Value",
        "Interest Rate"
    ],
    [
        12,
        -100,
        1000,
        "=RATE(A2,B2,C2)"
    ],
    [
        24,
        -250,
        5000,
        "=RATE(A3,B3,C3)"
    ],
    [
        36,
        -180,
        6000,
        "=RATE(A4,B4,C4)"
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
        "Periods",
        "Payment",
        "Present Value",
        "Interest Rate"
    ],
    [
        12,
        -100,
        1000,
        "=RATE(A2,B2,C2)"
    ],
    [
        24,
        -250,
        5000,
        "=RATE(A3,B3,C3)"
    ],
    [
        36,
        -180,
        6000,
        "=RATE(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

