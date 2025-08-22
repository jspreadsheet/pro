title: PPMT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PPMT function in Jspreadsheet

# PPMT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PPMT` function in Jspreadsheet Formulas Pro is a financial formula that computes the principal portion of a periodic payment for a specified investment. This calculation assumes that both the payment amount and the interest rate remain the same over the entire period. Essentially, this function helps you understand how much of your scheduled payment goes towards reducing the original loan amount (principal) at any given point in time.

## Documentation

Calculates the payment on the principal for a given investment based on constant-amount periodic payments and a constant interest rate.

### Category

Financial

### Syntax

PPMT(rate, per, nper, pv, [fv], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate for the loan. |
| `per` | The payment period in the range from 1 to nper. |
| `nper` | The total number of payments (the loan term) for the loan. |
| `pv` | The present value or principal of the loan. |
| `[fv]` | Optional. The future value or cash balance you want to attain after the last payment is made. If omitted, defaults to 0. |
| `[type]` | Optional. When payments are due. 0 or omitted means at the end of the period, 1 means at the beginning of the period. |


### Behavior

The 'PPMT' function in a spreadsheet calculates the payment on the principal for a given period for an investment based on periodic, constant payments and a constant interest rate. It has four required arguments: rate, per (the period for which we want to find the principal), nper (total number of payment periods), and pv (present value, or the total amount that a series of future payments is worth now).

- Empty Cells: If any of the required arguments are not provided (i.e., left empty), the function will return an error.

- Text: If text is entered instead of a numerical input in any of the required fields, the function will return an error.

- Booleans: The 'PPMT' function does not handle boolean values. If a boolean value is entered in any of the required fields, it will return an error.

- Errors: If the rate is less than or equal to 0, or if the per or nper is less than 1, the function will return an error. Similarly, if the per is greater than nper, it will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If any of the arguments are non-numeric, the function will return a #VALUE! error. |
| #NUM! | If the rate ≤ 0, or if per < 1, nper < 1, or per > nper, the function will return a #NUM! error. |
| #DIV/0! | If the rate is equal to 0, the function will return a #DIV/0! error as it attempts to divide by zero in its calculation. |

### Best practices

> - Always ensure that the rate inputted is the rate per period and not the annual rate. For instance, if you're calculating a monthly payment, the rate should be the annual interest rate divided by 12.
> - Always check that the 'per' period is less than or equal to the 'nper' periods. If 'per' is greater, the function will return an error.
> - Be consistent with the units for the rate and nper arguments. If you use months for nper, you should also use monthly interest rate for rate, and vice versa.
> - Remember that the 'PPMT' function returns a negative value because it represents a cash outflow. When presenting this in a financial report, adjust it to a positive number if necessary.

### Usage

A few examples using the PPMT function.

```
PPMT(0.05/12, 1, 12*30, -100000,0)  
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
        "Loan Amount",
        "Interest Rate",
        "Term (Years)",
        "Payment Period",
        "Principal Payment"
    ],
    [
        100000,
        0.06,
        30,
        1,
        "=PPMT(B2/12,D2,C2*12,-A2)"
    ],
    [
        200000,
        0.045,
        15,
        6,
        "=PPMT(B3/12,D3,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        20,
        12,
        "=PPMT(B4/12,D4,C4*12,-A4)"
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
        "Loan Amount",
        "Interest Rate",
        "Term (Years)",
        "Payment Period",
        "Principal Payment"
    ],
    [
        100000,
        0.06,
        30,
        1,
        "=PPMT(B2/12,D2,C2*12,-A2)"
    ],
    [
        200000,
        0.045,
        15,
        6,
        "=PPMT(B3/12,D3,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        20,
        12,
        "=PPMT(B4/12,D4,C4*12,-A4)"
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
        "Loan Amount",
        "Interest Rate",
        "Term (Years)",
        "Payment Period",
        "Principal Payment"
    ],
    [
        100000,
        0.06,
        30,
        1,
        "=PPMT(B2/12,D2,C2*12,-A2)"
    ],
    [
        200000,
        0.045,
        15,
        6,
        "=PPMT(B3/12,D3,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        20,
        12,
        "=PPMT(B4/12,D4,C4*12,-A4)"
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
        "Loan Amount",
        "Interest Rate",
        "Term (Years)",
        "Payment Period",
        "Principal Payment"
    ],
    [
        100000,
        0.06,
        30,
        1,
        "=PPMT(B2/12,D2,C2*12,-A2)"
    ],
    [
        200000,
        0.045,
        15,
        6,
        "=PPMT(B3/12,D3,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        20,
        12,
        "=PPMT(B4/12,D4,C4*12,-A4)"
    ]
]
            }]
        });
    }
}
```

