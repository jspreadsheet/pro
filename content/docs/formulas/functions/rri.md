title: RRI function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RRI function in Jspreadsheet

# RRI function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RRI` function in Jspreadsheet Formulas Pro is used to compute the interest rate of a completely invested security. It requires three inputs: the total number of periods, the starting value, and the final value. Using these, it calculates and returns the equivalent interest rate. This is particularly useful for understanding the rate of return on your investments.

## Documentation

Calculates the interest rate of a fully invested security.

### Category

Financial

### Syntax

RRI(nper, pv, fv)

| Parameter | Description |
| ----------- | ------------- |
| `nper` | The total number of payment periods for the investment. |
| `pv` | The present value, or the lump-sum amount that a series of future payments is worth right now. |
| `fv` | The future value, or a cash balance you want to attain after the last payment is made. |


### Behavior

The 'RRI' function in spreadsheets is used to calculate the equivalent interest rate for a specified number of periods based on a present value, future value, and total number of periods. Here's how it handles different scenarios:

- Empty Cells: If any of the arguments are empty cells, the RRI function will return a #VALUE! error.
- Text: If any of the arguments are text that cannot be converted into a number, the RRI function will return a #VALUE! error.
- Booleans: If any of the arguments are boolean values, the RRI function will treat them as numbers (TRUE as 1 and FALSE as 0).
- Errors: If any of the arguments are error values, the RRI function will return that error value.
- Negative Values: The RRI function can handle negative values. However, the present value and the future value should not be of the same sign. If they are, the function will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error will be returned if any of the arguments are non-numeric values that cannot be converted into numbers, or if any of the arguments are empty cells. |
| #NUM! | This error will be returned if the present value and the future value are of the same sign, or if the number of periods is less than or equal to zero. |
| #DIV/0! | This error will be returned if the present value is zero. |

### Best practices

> - Ensure that all inputs to the 'RRI' function are numeric. If there's a chance an input might be text, consider using a function like 'IFERROR' to handle this scenario.
> - Be aware that 'RRI' cannot handle scenarios where the present value and future value have the same sign. In real-world terms, this means that you can't use 'RRI' to calculate the interest rate if the value of an investment doesn't change or if it moves in the same direction as the initial investment.
> - Keep in mind that the 'RRI' function returns the interest rate per period. If you want to find the annual interest rate, you'll need to adjust the result accordingly.
> - Always cross-verify the results as the function may not yield accurate results for non-periodic or continuous compounding interest scenarios.

### Usage

A few examples using the RRI function.

```
RRI(12, -1000, 2000)  
RRI(36, -10000, 15000)  
RRI(24, -5000, 10000)  
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
        "Present Value",
        "Future Value",
        "Interest Rate"
    ],
    [
        12,
        -1000,
        2000,
        "=RRI(A2,B2,C2)"
    ],
    [
        36,
        -10000,
        15000,
        "=RRI(A3,B3,C3)"
    ],
    [
        24,
        -5000,
        10000,
        "=RRI(A4,B4,C4)"
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
        "Present Value",
        "Future Value",
        "Interest Rate"
    ],
    [
        12,
        -1000,
        2000,
        "=RRI(A2,B2,C2)"
    ],
    [
        36,
        -10000,
        15000,
        "=RRI(A3,B3,C3)"
    ],
    [
        24,
        -5000,
        10000,
        "=RRI(A4,B4,C4)"
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
        "Present Value",
        "Future Value",
        "Interest Rate"
    ],
    [
        12,
        -1000,
        2000,
        "=RRI(A2,B2,C2)"
    ],
    [
        36,
        -10000,
        15000,
        "=RRI(A3,B3,C3)"
    ],
    [
        24,
        -5000,
        10000,
        "=RRI(A4,B4,C4)"
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
        "Present Value",
        "Future Value",
        "Interest Rate"
    ],
    [
        12,
        -1000,
        2000,
        "=RRI(A2,B2,C2)"
    ],
    [
        36,
        -10000,
        15000,
        "=RRI(A3,B3,C3)"
    ],
    [
        24,
        -5000,
        10000,
        "=RRI(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

