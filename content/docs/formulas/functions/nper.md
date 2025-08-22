title: NPER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NPER function in Jspreadsheet

# NPER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NPER` function in Jspreadsheet Formulas Pro allows you to determine the number of payment periods related to an investment. This calculation hinges on a consistent interest rate and regular payments. Essentially, it gives you the total count of payments needed to settle an investment, assuming that both the interest rate and payment amounts remain constant. This is an extremely useful tool in financial planning and understanding how long it will take to fully pay off an investment.

## Documentation

Calculates the number of payment periods for an investment based on a constant interest rate and periodic payments.

### Category

Financial

### Syntax

NPER(rate, payment, present_value, [future_value], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `payment` | The payment made each period and cannot change over the life of the investment. |
| `present_value` | The present value, or the lump-sum amount that a series of future payments is worth right now. |
| `[future_value]` | Optional. The future value, or a cash balance one wants to attain after the last payment is made. If omitted, the future value is assumed to be 0 (the loan will be paid off). |
| `[type]` | Optional. Argument that identifies when payments are due. Set it to 0 or omit it to indicate that payments are due at the end of the period. Set it to 1 to indicate that payments are due at the beginning of the period. |


### Behavior
The 'NPER' function in the spreadsheet calculates the total number of payment periods in an investment or loan. It requires three parameters: rate (the interest rate for the period), payment (the payment made each period), and present value (the total amount of money that a series of future payments is worth now). An optional fourth value can be used for future value (the desired balance after the last payment has been made). 

- For empty cells within the function's parameters, the function will not work and will return an error.
- If the function's parameters contain text, booleans, or non-numeric values, the function will return an error.
- If any of the parameters are zero or negative (except for the payment, which can be negative in the case of a loan where you are making payments), the function will return a #NUM! error.
- If rate is not between -1 and 1, the function will return a #NUM! error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error is returned when one or more of the function's parameters contain non-numeric values. |
| #NUM! | This error is returned when the rate is not between -1 and 1, or if any of the parameters are zero or negative (except for the payment, which can be negative in the case of a loan where you are making payments). |
| #DIV/0! | This error is returned when the payment is zero, causing a division by zero. |
| #NAME? | This error is returned when the function name is misspelled. |

### Best practices

> - Always ensure that the values you input into the 'NPER' function are numeric and appropriate for the calculation. For instance, the rate should be between -1 and 1, and the payment and present value should not be zero or negative (except for payment, which can be negative in the case of a loan where you are making payments).
> - Be aware that the 'NPER' function assumes that payments are made at the end of each period. If payments are made at the beginning of each period, you might want to adjust your calculations accordingly.
> - Make sure to divide your annual interest rate by the number of periods per year to get the period rate. For example, if you have an annual interest rate of 6% and you make monthly payments, your rate in the 'NPER' function should be 6%/12 = 0.005.
> - Use absolute cell references when copying the 'NPER' function across multiple cells to maintain the accuracy of your calculations.

### Usage

A few examples using the NPER function.

```
NPER(0.06/12,-100,4000)  
NPER(0.09/4,-5000,13000,10000)  
NPER(0.1/12,-350,5000,0,1)  
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
        "Monthly Payment",
        "Present Value",
        "Future Value",
        "Type",
        "Number of Periods"
    ],
    [
        0.06,
        -100,
        4000,
        0,
        0,
        "=NPER(A2/12,B2,C2,D2,E2)"
    ],
    [
        0.09,
        -5000,
        13000,
        10000,
        0,
        "=NPER(A3/4,B3,C3,D3,E3)"
    ],
    [
        0.1,
        -350,
        5000,
        0,
        1,
        "=NPER(A4/12,B4,C4,D4,E4)"
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
        "Monthly Payment",
        "Present Value",
        "Future Value",
        "Type",
        "Number of Periods"
    ],
    [
        0.06,
        -100,
        4000,
        0,
        0,
        "=NPER(A2/12,B2,C2,D2,E2)"
    ],
    [
        0.09,
        -5000,
        13000,
        10000,
        0,
        "=NPER(A3/4,B3,C3,D3,E3)"
    ],
    [
        0.1,
        -350,
        5000,
        0,
        1,
        "=NPER(A4/12,B4,C4,D4,E4)"
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
        "Monthly Payment",
        "Present Value",
        "Future Value",
        "Type",
        "Number of Periods"
    ],
    [
        0.06,
        -100,
        4000,
        0,
        0,
        "=NPER(A2/12,B2,C2,D2,E2)"
    ],
    [
        0.09,
        -5000,
        13000,
        10000,
        0,
        "=NPER(A3/4,B3,C3,D3,E3)"
    ],
    [
        0.1,
        -350,
        5000,
        0,
        1,
        "=NPER(A4/12,B4,C4,D4,E4)"
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
        "Monthly Payment",
        "Present Value",
        "Future Value",
        "Type",
        "Number of Periods"
    ],
    [
        0.06,
        -100,
        4000,
        0,
        0,
        "=NPER(A2/12,B2,C2,D2,E2)"
    ],
    [
        0.09,
        -5000,
        13000,
        10000,
        0,
        "=NPER(A3/4,B3,C3,D3,E3)"
    ],
    [
        0.1,
        -350,
        5000,
        0,
        1,
        "=NPER(A4/12,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

