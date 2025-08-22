title: CUMIPMT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUMIPMT function in Jspreadsheet

# CUMIPMT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CUMIPMT` function in Jspreadsheet Formulas Pro is a financial function that calculates the total interest paid on a loan between two specified periods. For instance, if you want to know how much interest you've paid on your mortgage after the first five years, you would use this function. You need to input the interest rate, total number of payment periods, loan amount, start period, end period, and type of payment (start or end of period). It's a useful tool for managing and understanding your loan payments.

## Documentation

Returns the cumulative interest paid on a loan between two periods.

### Category

Financial

### Syntax

CUMIPMT(rate, nper, pv, start_period, end_period, type)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `nper` | The total number of payment periods in the loan. |
| `pv` | The present value (or principal) of the loan. |
| `start_period` | The first payment period for which to calculate the interest. Payment periods are numbered starting with 1. |
| `end_period` | The last payment period for which to calculate the interest. |
| `type` | Optional. The timing of the payments. Use 0 for payments due at the end of the period or 1 for payments due at the beginning of the period. Default is 0. |


### Behavior

The `CUMIPMT` function in spreadsheets calculates the cumulative interest paid on a loan between start and end periods. It requires five parameters: rate, number of periods, present value, start period, and end period. 

1. Empty Cells: If any of the required parameters are left as an empty cell, the function will return an error.

2. Text: The function only accepts numerical inputs. If text is used in any of the parameters, the function will return an error.

3. Booleans: Boolean values are considered as numeric values where TRUE is equivalent to 1 and FALSE is equivalent to 0. However, using Booleans in a financial function like `CUMIPMT` is not recommended because it may not make sense in the context of financial calculations.

4. Errors: If the start period is greater than the end period, or if either is less than 1 or greater than the total number of payment periods, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if either the start period is less than 1, or greater than the total number of periods, or if the end period is less than the start period, or greater than the total number of periods. |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric or if the rate or number of periods is less than 0. |

### Best practices

> - Always ensure that the start period is less than or equal to the end period, and both are within the total number of periods.
> - Validate your inputs to ensure they are numeric and within the acceptable range.
> - Remember that the `CUMIPMT` function returns the cumulative interest paid on a loan between start and end periods, not the total interest over the life of the loan.
> - Use the function carefully within financial models as minor errors in inputs can lead to significant miscalculations.

### Usage

A few examples using the CUMIPMT function.

```
CUMIPMT(0.06/12,24,-5000,1,12,0) returns the cumulative interest paid on a $5,000 loan with a 6% annual interest rate and a 2-year term, where the first payment is due in the first month  
CUMIPMT(0.07/12,36,-10000,13,24,1) returns the cumulative interest paid on a $10,000 loan with a 7% annual interest rate and a 3-year term, where payments are made at the beginning of each month and the interest is calculated between the 13th and 24th payments  
CUMIPMT(0.05/4,8,30000,1,4,0) returns the cumulative interest paid on a $30,000 loan with a 5% quarterly interest rate and a 2-year term, where payments are due at the end of each quarter and the interest is calculated between the 1st and 4th payments  
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
        "Payment Type",
        "Cumulative Interest"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        0,
        "=CUMIPMT(B2/12,C2,-A2,D2,E2,F2)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        1,
        "=CUMIPMT(B3/12,C3,-A3,D3,E3,F3)"
    ],
    [
        30000,
        0.05,
        8,
        1,
        4,
        0,
        "=CUMIPMT(B4/4,C4,-A4,D4,E4,F4)"
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
        "Payment Type",
        "Cumulative Interest"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        0,
        "=CUMIPMT(B2/12,C2,-A2,D2,E2,F2)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        1,
        "=CUMIPMT(B3/12,C3,-A3,D3,E3,F3)"
    ],
    [
        30000,
        0.05,
        8,
        1,
        4,
        0,
        "=CUMIPMT(B4/4,C4,-A4,D4,E4,F4)"
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
        "Payment Type",
        "Cumulative Interest"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        0,
        "=CUMIPMT(B2/12,C2,-A2,D2,E2,F2)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        1,
        "=CUMIPMT(B3/12,C3,-A3,D3,E3,F3)"
    ],
    [
        30000,
        0.05,
        8,
        1,
        4,
        0,
        "=CUMIPMT(B4/4,C4,-A4,D4,E4,F4)"
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
        "Payment Type",
        "Cumulative Interest"
    ],
    [
        5000,
        0.06,
        24,
        1,
        12,
        0,
        "=CUMIPMT(B2/12,C2,-A2,D2,E2,F2)"
    ],
    [
        10000,
        0.07,
        36,
        13,
        24,
        1,
        "=CUMIPMT(B3/12,C3,-A3,D3,E3,F3)"
    ],
    [
        30000,
        0.05,
        8,
        1,
        4,
        0,
        "=CUMIPMT(B4/4,C4,-A4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

