title: PMT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PMT function in Jspreadsheet

# PMT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PMT` function in Jspreadsheet Formulas Pro is a tool that helps you calculate the regular payment amount for a loan or mortgage. It operates on the principle of constant payments and a fixed interest rate. By inputting the interest rate, the total number of payment periods, and the principal loan amount into the `PMT` function, it will return the regular payment amount. This is particularly useful for understanding your financial commitments over the life of a loan.

## Documentation

Calculates the payment for a loan based on constant payments and a constant interest rate.

### Category

Financial

### Syntax

PMT(rate, nper, pv, [fv], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate for the loan. |
| `nper` | The total number of payments (the loan term) for the loan. |
| `pv` | The present value or principal of the loan. |
| `[fv]` | Optional. The future value or cash balance you want to attain after the last payment is made. If omitted, defaults to 0. |
| `[type]` | Optional. When payments are due. 0 or omitted means at the end of the period, 1 means at the beginning of the period. |


### Behavior

The 'PMT' function in spreadsheets calculates the payment for a loan based on constant payments and a constant interest rate. The behavior of the 'PMT' function in various scenarios is as follows:

- Empty cells: If any of the required arguments in the 'PMT' function is an empty cell, the function will return an error.
- Text: If any of the required arguments in the 'PMT' function is text, the function will return an error.
- Booleans: 'PMT' function does not support boolean values. If boolean values are used, the function will return an error.
- Errors: If any of the required arguments in the 'PMT' function is an error, the function will return an error.
- Negative Values: If the rate or number of periods is a negative value, the 'PMT' function will return a '#NUM!' error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #DIV/0! | This error occurs if the interest rate is 0, or if any other argument of the 'PMT' function is a zero. |
| #VALUE! | This error occurs if any of the arguments passed to the 'PMT' function is non-numeric or is a text. |
| #NUM! | This error occurs if the rate or number of periods is a negative value.|

### Best practices
> - Always ensure that all required arguments are provided to the 'PMT' function to prevent errors.
> - Be aware that 'PMT' returns a negative value, as it represents outgoing payments. If you need a positive result, you can adjust it by adding a negative sign before the function.
> - Always check that the rate and number of periods are not negative values as it will return a '#NUM!' error.
> - Consider dividing the interest rate by the number of periods within a year if you're dealing with annual interest rates and monthly payments.

### Usage

A few examples using the PMT function.

```
PMT(0.05/12,12*30,-100000)  
PMT(0.1/12,24,5000,1000,1)  
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
        "Years",
        "Monthly Payment"
    ],
    [
        250000,
        0.045,
        30,
        "=PMT(B2/12,C2*12,-A2)"
    ],
    [
        150000,
        0.035,
        15,
        "=PMT(B3/12,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        10,
        "=PMT(B4/12,C4*12,-A4)"
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
        "Years",
        "Monthly Payment"
    ],
    [
        250000,
        0.045,
        30,
        "=PMT(B2/12,C2*12,-A2)"
    ],
    [
        150000,
        0.035,
        15,
        "=PMT(B3/12,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        10,
        "=PMT(B4/12,C4*12,-A4)"
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
        "Years",
        "Monthly Payment"
    ],
    [
        250000,
        0.045,
        30,
        "=PMT(B2/12,C2*12,-A2)"
    ],
    [
        150000,
        0.035,
        15,
        "=PMT(B3/12,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        10,
        "=PMT(B4/12,C4*12,-A4)"
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
        "Years",
        "Monthly Payment"
    ],
    [
        250000,
        0.045,
        30,
        "=PMT(B2/12,C2*12,-A2)"
    ],
    [
        150000,
        0.035,
        15,
        "=PMT(B3/12,C3*12,-A3)"
    ],
    [
        75000,
        0.055,
        10,
        "=PMT(B4/12,C4*12,-A4)"
    ]
]
            }]
        });
    }
}
```

