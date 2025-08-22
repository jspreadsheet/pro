title: FV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FV function in Jspreadsheet

# FV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FV` function in Jspreadsheet Formulas Pro is a tool you can use to estimate the future value of an investment, assuming that the interest rate and the payments remain the same over time. This function considers the rate of interest, the total number of payment periods, and the payment made each period to calculate the future value. It's a helpful function when you want to know how much your investment will grow over time, given specific, unchanging conditions.

## Documentation

Calculates the future value of an investment based on a constant interest rate and periodic, constant payments.

### Category

Financial

### Syntax

FV(rate, nper, pmt, [pv], [type])

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The interest rate per period. |
| `nper` | The total number of payment periods in an annuity. |
| `pmt` | The payment made each period. Payments are made at the end of the period by default. Use the optional 'type' parameter to specify payments at the beginning of the period. |
| `pv` | The present value, or the lump-sum amount that a series of future payments is worth right now. |
| `type` | Optional. Argument that specifies when payments are due. Use 0 (or omitted) for payments due at the end of the period, or use 1 for payments due at the beginning of the period. |


### Behavior

The 'FV' function in a spreadsheet is used to calculate the future value of an investment. It takes into account the rate of return, the number of periods, and the payment per period, along with the present value of the investment.

1. The function expects numeric inputs and will return an error if any of the parameters are text or boolean values.

2. If an empty cell is used as a parameter, it will be treated as a zero.

3. If the parameters are arrays or ranges, the function will calculate the future value for each row in the range or array and return an array of results.

4. Any error in the input parameters, such as a non-numeric value or a division by zero, will propagate to the result of the 'FV' function.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when any of the parameters are non-numeric. |
| #DIV/0! | This error is returned when the rate of return is set to zero and the number of periods is also zero. |
| #NUM! | This error is returned when the rate of return is less than -1, or when the number of periods is less than zero.|

### Best practices

> - Always ensure that your input parameters are numeric. If you are unsure, you can use functions like 'ISNUMBER' to check them before inputting them into the 'FV' function.
> - Be aware that 'FV' function treats empty cells as zero. If you don't want this behavior, you should check for empty cells before using them as parameters.
> - Remember that the 'FV' function returns the future value at the end of the investment period. If you want the value at the beginning of the period, you need to adjust your calculations accordingly.
> - Be cautious when using arrays or ranges as parameters, as the function will return an array of results. Make sure that your spreadsheet can handle the returned array properly.

### Usage

A few examples using the FV function.

```
FV(0.05/12, 12*15, -200, 50000, 0)  
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
        "Interest Rate",
        "Periods",
        "Payment",
        "Present Value",
        "Future Value"
    ],
    [
        0.06,
        10,
        -1000,
        0,
        "=FV(A2,B2,C2,D2)"
    ],
    [
        0.04,
        20,
        -500,
        10000,
        "=FV(A3,B3,C3,D3)"
    ],
    [
        0.08,
        5,
        -2000,
        5000,
        "=FV(A4,B4,C4,D4)"
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
        "Interest Rate",
        "Periods",
        "Payment",
        "Present Value",
        "Future Value"
    ],
    [
        0.06,
        10,
        -1000,
        0,
        "=FV(A2,B2,C2,D2)"
    ],
    [
        0.04,
        20,
        -500,
        10000,
        "=FV(A3,B3,C3,D3)"
    ],
    [
        0.08,
        5,
        -2000,
        5000,
        "=FV(A4,B4,C4,D4)"
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
        "Interest Rate",
        "Periods",
        "Payment",
        "Present Value",
        "Future Value"
    ],
    [
        0.06,
        10,
        -1000,
        0,
        "=FV(A2,B2,C2,D2)"
    ],
    [
        0.04,
        20,
        -500,
        10000,
        "=FV(A3,B3,C3,D3)"
    ],
    [
        0.08,
        5,
        -2000,
        5000,
        "=FV(A4,B4,C4,D4)"
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
        "Interest Rate",
        "Periods",
        "Payment",
        "Present Value",
        "Future Value"
    ],
    [
        0.06,
        10,
        -1000,
        0,
        "=FV(A2,B2,C2,D2)"
    ],
    [
        0.04,
        20,
        -500,
        10000,
        "=FV(A3,B3,C3,D3)"
    ],
    [
        0.08,
        5,
        -2000,
        5000,
        "=FV(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

