title: ISPMT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISPMT function in Jspreadsheet

# ISPMT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISPMT` function in Jspreadheet Formulas Pro is a tool for calculating the interest payment during a specified period of an investment, assuming a constant rate of interest. Utilizing this function, you can accurately determine the total interest you would pay on an investment within a defined timeframe. It requires you to input the interest rate, the period for which the interest is to be calculated, and the total number of payment periods. This function is particularly useful for understanding the financial implications of an investment over time.

## Documentation

Calculates the interest payment for a given period of an investment based on a constant interest rate.

### Category

Financial

### Syntax

ISPMT(rate, period, periods, principal)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `period` | The period for which you want to calculate the interest payment. |
| `periods` | The total number of payment periods in the investment. |
| `principal` | The amount of the investment. |


### Behavior

The `ISPMT` function in spreadsheets calculates the interest paid during a specific period of an investment. This function takes four arguments: the interest rate, the period for which the interest is to be calculated, the total number of periods and the present value.

- If any of the arguments is an empty cell, the function returns a `#VALUE!` error.
- If the interest rate or the total number of periods is non-numeric, the function returns a `#VALUE!` error.
- If the period for which the interest is to be calculated exceeds the total number of periods, the function returns a `#NUM!` error.
- If the present value is less than or equal to zero, the function returns a `#NUM!` error.
- The function does not handle text or booleans, it expects numeric values as input. If one of the arguments is text or boolean, the function returns a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when one or more of the arguments to the function are non-numeric or empty cells. |
| `#NUM!` | This error occurs when the period for which the interest is to be calculated exceeds the total number of periods or when the present value is less than or equal to zero. |

### Best Practices

> - Always ensure that the values you input are numeric. Text or boolean values will result in a `#VALUE!` error.
> - Make certain that the period for which you are calculating interest does not exceed the total number of periods. This will avoid a `#NUM!` error.
> - Ensure the present value is greater than zero to avoid a `#NUM!` error.
> - Remember that the interest rate argument is for a single period. If you have an annual rate and are calculating interest for monthly periods, you need to divide the annual rate by 12.

### Usage

A few examples using the ISPMT function.

```
ISPMT(0.08/12, 4, 36, 10000) returns the interest payment for month 4 of a 3-year loan with a 8% annual interest rate and a principal of $10,000  
ISPMT(B2/12, C3, D4, A1) returns the interest payment for a specific period in an investment based on variable inputs  
ISPMT(0.06/12, 1, 60, 200000) returns the interest payment for the first month of a 5-year loan with a 6% annual interest rate and a principal of $200,000.  
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
        "Principal",
        "Annual Rate",
        "Periods",
        "Period",
        "Interest Payment"
    ],
    [
        50000,
        0.06,
        60,
        1,
        "=ISPMT(B2/12,D2,C2,A2)"
    ],
    [
        75000,
        0.075,
        48,
        12,
        "=ISPMT(B3/12,D3,C3,A3)"
    ],
    [
        100000,
        0.08,
        36,
        24,
        "=ISPMT(B4/12,D4,C4,A4)"
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
        "Principal",
        "Annual Rate",
        "Periods",
        "Period",
        "Interest Payment"
    ],
    [
        50000,
        0.06,
        60,
        1,
        "=ISPMT(B2/12,D2,C2,A2)"
    ],
    [
        75000,
        0.075,
        48,
        12,
        "=ISPMT(B3/12,D3,C3,A3)"
    ],
    [
        100000,
        0.08,
        36,
        24,
        "=ISPMT(B4/12,D4,C4,A4)"
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
        "Principal",
        "Annual Rate",
        "Periods",
        "Period",
        "Interest Payment"
    ],
    [
        50000,
        0.06,
        60,
        1,
        "=ISPMT(B2/12,D2,C2,A2)"
    ],
    [
        75000,
        0.075,
        48,
        12,
        "=ISPMT(B3/12,D3,C3,A3)"
    ],
    [
        100000,
        0.08,
        36,
        24,
        "=ISPMT(B4/12,D4,C4,A4)"
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
        "Principal",
        "Annual Rate",
        "Periods",
        "Period",
        "Interest Payment"
    ],
    [
        50000,
        0.06,
        60,
        1,
        "=ISPMT(B2/12,D2,C2,A2)"
    ],
    [
        75000,
        0.075,
        48,
        12,
        "=ISPMT(B3/12,D3,C3,A3)"
    ],
    [
        100000,
        0.08,
        36,
        24,
        "=ISPMT(B4/12,D4,C4,A4)"
    ]
]
            }]
        });
    }
}
```

