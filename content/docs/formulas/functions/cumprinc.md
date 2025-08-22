title: CUMPRINC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUMPRINC function in Jspreadsheet

# CUMPRINC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CUMPRINC` function in Jspreadsheet Formulas Pro is used to calculate the total principal paid on a loan between two specified periods. This means it can show you how much of the actual loan amount (not including interest) you have paid off within a certain time frame. This can be particularly useful for understanding the progress you've made on your loan repayment. The function takes into consideration the interest rate, total number of payment periods, the loan's total value, the start and end periods for which you want to calculate.

## Documentation

Returns the cumulative principal paid on a loan between two periods.

### Category

Financial

### Syntax

CUMPRINC(rate, nper, pv, start_period, end_period, type)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `nper` | The total number of payment periods in the loan. |
| `pv` | The present value (or principal) of the loan. |
| `start_period` | The first payment period for which to calculate the principal. Payment periods are numbered starting with 1. |
| `end_period` | The last payment period for which to calculate the principal. |
| `type` | Optional. The timing of the payments. Use 0 for payments due at the end of the period or 1 for payments due at the beginning of the period. Default is 0. |


### Behavior

The `CUMPRINC` function in spreadsheets is used to calculate the cumulative principal paid on a loan or investment between two specified periods. This function requires five arguments: the interest rate, the total number of periods, the present value of the loan, the start period, and the end period.

- For the interest rate, total number of periods, present value, start period, and end period, the function expects numerical values. Any non-numerical values, including text or boolean values, will result in an error.
- If the start period is less than 1 or the end period is greater than the total number of periods, the function will return an error.
- If any of the cells referred to by the function are empty, the function will treat them as zero. However, this will likely lead to incorrect results or an error, as all arguments are required for the function to work correctly.
- The function handles error values in the same way as other functions. If one of the arguments is an error, the function will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is displayed when one or more of the function's arguments are non-numerical values. |
| #NUM! | This error is shown when the start period is less than 1, the end period is greater than the total number of periods, or if any other numerical argument is less than zero. |
| #DIV/0! | This error is returned when the interest rate is zero, as this would result in division by zero. |

### Best practices

> - Always ensure that all arguments provided to the `CUMPRINC` function are numerical values. Providing non-numerical values will result in an error.
> - Be careful when referring to cells that may be empty. If the function refers to an empty cell, it will treat it as zero, which may lead to incorrect results.
> - Ensure that the start period is not less than 1 and the end period is not greater than the total number of periods to avoid #NUM! errors.
> - While using `CUMPRINC`, make sure to input the interest rate as per period rate. For example, if repayments are monthly, and annual interest rate is 5%, then you should use 5%/12.
> - It's a good practice to check for zero interest rate to avoid #DIV/0! errors.

### Usage

A few examples using the CUMPRINC function.

```
CUMPRINC(0.06/12,24,-5000,1,12,0) returns the cumulative principal paid on a $5,000 loan with a 6% annual interest rate and a 2-year term, where the first payment is due in the first month  
CUMPRINC(0.07/12,36,-10000,13,24,1) returns the cumulative principal paid on a $10,000 loan with a 7% annual interest rate and a 3-year term, where payments are made at the beginning of each month and the principal is calculated between the 13th and 24th payments  
CUMPRINC(0.05/4,8,30000,1,4,0) returns the cumulative principal paid on a $30,000 loan with a 5% quarterly interest rate and a 2-year term, where payments are due at the end of each quarter and the principal is calculated between the 1st and 4th payments  
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
        "Annual Rate",
        "Term (months)",
        "Start Period",
        "End Period",
        "Cumulative Principal"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        "=CUMPRINC(B2/12,C2,-A2,D2,E2,0)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        "=CUMPRINC(B3/12,C3,-A3,D3,E3,0)"
    ],
    [
        30000,
        0.05,
        24,
        1,
        6,
        "=CUMPRINC(B4/12,C4,-A4,D4,E4,0)"
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
        "Annual Rate",
        "Term (months)",
        "Start Period",
        "End Period",
        "Cumulative Principal"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        "=CUMPRINC(B2/12,C2,-A2,D2,E2,0)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        "=CUMPRINC(B3/12,C3,-A3,D3,E3,0)"
    ],
    [
        30000,
        0.05,
        24,
        1,
        6,
        "=CUMPRINC(B4/12,C4,-A4,D4,E4,0)"
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
        "Annual Rate",
        "Term (months)",
        "Start Period",
        "End Period",
        "Cumulative Principal"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        "=CUMPRINC(B2/12,C2,-A2,D2,E2,0)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        "=CUMPRINC(B3/12,C3,-A3,D3,E3,0)"
    ],
    [
        30000,
        0.05,
        24,
        1,
        6,
        "=CUMPRINC(B4/12,C4,-A4,D4,E4,0)"
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
        "Annual Rate",
        "Term (months)",
        "Start Period",
        "End Period",
        "Cumulative Principal"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        "=CUMPRINC(B2/12,C2,-A2,D2,E2,0)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        "=CUMPRINC(B3/12,C3,-A3,D3,E3,0)"
    ],
    [
        30000,
        0.05,
        24,
        1,
        6,
        "=CUMPRINC(B4/12,C4,-A4,D4,E4,0)"
    ]
]
            }]
        });
    }
}
```

