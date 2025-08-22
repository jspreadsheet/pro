title: PV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PV function in Jspreadsheet

# PV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PV` function in Jspreadsheet Formulas Pro is used to determine the current value of a future sum of money or series of payments, taking into account a specified interest rate. This is useful in understanding what an investment or loan is worth in today's terms, given the principle of time value of money. It essentially translates future earnings or payments into current monetary value based on the idea that a dollar today is worth more than a dollar tomorrow. This function is particularly useful for financial analysis and planning.

## Documentation

Calculates the present value of an investment or loan based on a constant interest rate and future payments or receipts.

### Category

Financial

### Syntax

PV(rate, nper, pmt, [fv], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `nper` | The total number of payment periods in the investment or loan. |
| `pmt` | The payment made each period; it cannot change over the life of the investment or loan. |
| `[fv]` | Optional. The future value of the investment or loan, payable after the final payment is made. If omitted, defaults to 0. |
| `[type]` | Optional. The timing of the payment. If omitted, defaults to 0 (payments due at the end of the period). Use 1 for payments due at the beginning of the period. |


### Behavior

The 'PV' function is used in spreadsheet software to calculate the present value of a series of future payments made at regular intervals. Here's how it handles different input scenarios:

- **Number Inputs**: The 'PV' function requires three primary numerical inputs: rate (interest rate per period), nper (number of periods), and pmt (payment made each period). Optional arguments include fv (future value) and type (whether payment is made at the start or end of the period).
- **Text Inputs**: If a text input is provided in place of a numeric value, the function will return a `#VALUE!` error.
- **Boolean Inputs**: Boolean values are not applicable for the 'PV' function. If a boolean input is provided, it will be interpreted as `0` for `FALSE` and `1` for `TRUE`.
- **Empty Cells**: If a cell referenced in the function is empty, it will be treated as `0`.
- **Error Inputs**: If any of the referenced cells contain an error, the 'PV' function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | The function returns this error when non-numeric inputs are used in place of numeric parameters. |
| `#NUM!` | This error is returned when the provided rate is less than `-1`. |
| `#DIV/0!` | This error occurs when the rate is `0` and the payment is `0` or not provided, as it leads to a division by zero scenario. |
| `#NAME?` | This error is returned when the spreadsheet software does not recognize 'PV' as a valid function name, which might happen due to a typo or using a software that doesn't support the 'PV' function. |

### Best practices

> - Always ensure to input numeric values as rate, nper and pmt to avoid any `#VALUE!` errors.
> - Be clear about whether your payment is made at the beginning or end of the period. By default, the 'PV' function assumes payment at the end of the period. You can change this by setting type to `1`.
> - Use absolute cell referencing if you plan to drag or copy the 'PV' function to other cells in your spreadsheet.
> - Be cautious about the sign of your payment (pmt) and future value (fv). In financial calculations, outflows (payments) are often represented as negative values, and inflows (future value) as positive.

### Usage

A few examples using the PV function.

```
PV(0.1/12, 24, 1000, 10000, 0) returns approximately -29864.950264779152  
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
        "Periods",
        "Payment",
        "Future Value",
        "Present Value"
    ],
    [
        0.08,
        10,
        -1000,
        0,
        "=PV(A2/12,B2,C2,D2,0)"
    ],
    [
        0.06,
        15,
        -500,
        5000,
        "=PV(A3/12,B3,C3,D3,0)"
    ],
    [
        0.05,
        20,
        -750,
        10000,
        "=PV(A4/12,B4,C4,D4,0)"
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
        "Periods",
        "Payment",
        "Future Value",
        "Present Value"
    ],
    [
        0.08,
        10,
        -1000,
        0,
        "=PV(A2/12,B2,C2,D2,0)"
    ],
    [
        0.06,
        15,
        -500,
        5000,
        "=PV(A3/12,B3,C3,D3,0)"
    ],
    [
        0.05,
        20,
        -750,
        10000,
        "=PV(A4/12,B4,C4,D4,0)"
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
        "Periods",
        "Payment",
        "Future Value",
        "Present Value"
    ],
    [
        0.08,
        10,
        -1000,
        0,
        "=PV(A2/12,B2,C2,D2,0)"
    ],
    [
        0.06,
        15,
        -500,
        5000,
        "=PV(A3/12,B3,C3,D3,0)"
    ],
    [
        0.05,
        20,
        -750,
        10000,
        "=PV(A4/12,B4,C4,D4,0)"
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
        "Periods",
        "Payment",
        "Future Value",
        "Present Value"
    ],
    [
        0.08,
        10,
        -1000,
        0,
        "=PV(A2/12,B2,C2,D2,0)"
    ],
    [
        0.06,
        15,
        -500,
        5000,
        "=PV(A3/12,B3,C3,D3,0)"
    ],
    [
        0.05,
        20,
        -750,
        10000,
        "=PV(A4/12,B4,C4,D4,0)"
    ]
]
            }]
        });
    }
}
```

