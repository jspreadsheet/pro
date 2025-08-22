title: IPMT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IPMT function in Jspreadsheet

# IPMT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IPMT` function in Jspreadsheet Formulas Pro is a tool that calculates the interest payment for a specific period of an investment. This is based on a model where payments are made regularly and the interest rate remains unchanged. It's particularly useful when you need to figure out how much of your regular investment payment is going towards interest. This helps you understand the financial dynamics of your investment over time.

## Documentation

Returns the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.

### Category

Financial

### Syntax

IPMT(rate, per, nper, pv, [fv], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period of the investment. |
| `per` | The period for which you want to find the interest payment.  |
| `nper` | The total number of payment periods in the investment. |
| `pv` | The present value, or the total amount that a series of future payments is worth now. |
| `fv` | Optional. The future value, or a cash balance you want to attain after the last payment is made. If omitted, it defaults to 0. |
| `type` | Optional. The timing of the payment. If omitted, it defaults to 0 (or at the end of the period). |


### Behavior

The `IPMT` spreadsheet function is used to calculate the interest payment for a particular period of an investment or loan. This function requires four mandatory arguments (`rate`, `per`, `nper`, `pv`) and two optional (`fv`, `type`). Here's how it behaves:

- `rate`: This is the interest rate for the period. If the interest rate is annual, divide it by the number of periods in a year. For instance, if you have an annual interest rate of 6% and you're paying monthly, the rate would be 6%/12 = 0.005. If this argument is left empty or text, the function will return an error.
- `per`: This is the period for which you want to find the interest and must be in the range from 1 to `nper`. If this argument is left empty, text or non-numeric, the function will return an error.
- `nper`: This is the total number of payment periods in an investment. If this argument is left empty, text or non-numeric, the function will return an error.
- `pv`: This is the present value, or the total amount that a series of future payments is worth now. If this argument is left empty, the function will return an error.
- `fv` (optional): This is the future value, or a cash balance you want to attain after the last payment is made. If this argument is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0). If this argument is text, the function will return an error.
- `type` (optional): This indicates when payments are due. If omitted, it is assumed to be 0 (end of the period). If this argument is non-numeric, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs when the `per` argument is less than 1 or greater than `nper`. Also occurs when `nper`<= 0. |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric. |

### Best practices

> - Always ensure that the units for `rate` and `nper` are consistent. If you're making monthly payments on a four-year loan at an annual interest rate of 12%, use 12%/12 for `rate` and 4*12 for `nper`.
> - Be careful with the `per` argument. It refers to the period for which you want to find the interest and must be in the range from 1 to `nper`.
> - The `IPMT` function will return the negative of the amount because it represents a payment made from your account. If you want the result to be expressed as a positive number, you can modify the formula by adding a negative sign in front of it.
> - Always ensure that optional arguments are used correctly. For `fv` and `type`, omitting them assumes the values to be 0.

### Usage

A few examples using the IPMT function.

```
IPMT(0.1/12, 1, 24, 10000) returns the interest payment for the first month of a 2-year loan with monthly payments of $417 and a principal of $10,000 at a 10% annual interest rate  
IPMT(0.08/12, 6, 36, 20000, 5000) returns the interest payment for the sixth month of a 3-year loan with monthly payments of $686.53, a principal of $20,000, a 5,000 balloon payment and a 8% annual interest rate  
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
        "Annual Rate",
        "Monthly Rate",
        "Period",
        "Periods",
        "Present Value",
        "Interest Payment"
    ],
    [
        0.06,
        "=A2/12",
        1,
        36,
        25000,
        "=IPMT(B2,C2,D2,E2)"
    ],
    [
        0.08,
        "=A3/12",
        6,
        24,
        15000,
        "=IPMT(B3,C3,D3,E3)"
    ],
    [
        0.05,
        "=A4/12",
        12,
        60,
        30000,
        "=IPMT(B4,C4,D4,E4)"
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
        "Annual Rate",
        "Monthly Rate",
        "Period",
        "Periods",
        "Present Value",
        "Interest Payment"
    ],
    [
        0.06,
        "=A2/12",
        1,
        36,
        25000,
        "=IPMT(B2,C2,D2,E2)"
    ],
    [
        0.08,
        "=A3/12",
        6,
        24,
        15000,
        "=IPMT(B3,C3,D3,E3)"
    ],
    [
        0.05,
        "=A4/12",
        12,
        60,
        30000,
        "=IPMT(B4,C4,D4,E4)"
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
        "Annual Rate",
        "Monthly Rate",
        "Period",
        "Periods",
        "Present Value",
        "Interest Payment"
    ],
    [
        0.06,
        "=A2/12",
        1,
        36,
        25000,
        "=IPMT(B2,C2,D2,E2)"
    ],
    [
        0.08,
        "=A3/12",
        6,
        24,
        15000,
        "=IPMT(B3,C3,D3,E3)"
    ],
    [
        0.05,
        "=A4/12",
        12,
        60,
        30000,
        "=IPMT(B4,C4,D4,E4)"
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
        "Annual Rate",
        "Monthly Rate",
        "Period",
        "Periods",
        "Present Value",
        "Interest Payment"
    ],
    [
        0.06,
        "=A2/12",
        1,
        36,
        25000,
        "=IPMT(B2,C2,D2,E2)"
    ],
    [
        0.08,
        "=A3/12",
        6,
        24,
        15000,
        "=IPMT(B3,C3,D3,E3)"
    ],
    [
        0.05,
        "=A4/12",
        12,
        60,
        30000,
        "=IPMT(B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

