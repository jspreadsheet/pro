title: RECEIVED function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RECEIVED function in Jspreadsheet

# RECEIVED function



The `RECEIVED` function in Jspreadsheet Formulas Pro is used to calculate the total amount you receive when a financial security you have invested in fully matures. This could be a bond or any other type of investment that has a maturity date. Essentially, it gives you the future value of your investment, assuming that the full investment amount is held until maturity. This function is especially helpful for financial planning and forecasting.

## Documentation

Returns the amount received at maturity for a fully invested security.

### Category

Financial

### Syntax

RECEIVED(settlement, maturity, investment, discount, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date. |
| `maturity` | The security's maturity date. |
| `investment` | The amount invested in the security. |
| `discount` | The security's discount rate. |
| `[basis]` | The type of day count basis to use: 0 or omitted for US (NASD) 30/360, 1 for actual/actual, 2 for actual/360, 3 for actual/365, 4 for European 30/360. |


### Behavior

The `RECEIVED` function in spreadsheets returns the received amount of a fully invested security. It calculates the amount received at maturity for an investment in fixed-income securities such as bonds. 

- The function takes three mandatory parameters: `settlement`, `maturity`, `investment`, `discount`, and `basis` (optional).
- `settlement` is the date after the issue date when the security is delivered to the buyer. It should be entered as a date.
- `maturity` is the date when the security expires. It should also be entered as a date.
- `investment` is the amount of money that the buyer paid for the security.
- `discount` is the security's annual discount rate.
- `basis` (optional) is the type of day count basis to use. If `basis` is omitted, it is assumed to be 0.

The function will return a `#VALUE!` error if any of the parameters are not numerical values, or if the dates are not valid. If `settlement` is later than `maturity`, it will return a `#NUM!` error. Boolean values are treated as 1 for TRUE and 0 for FALSE.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function will return this error if any of the parameters are not numerical values or if the dates are not valid. |
| #NUM! | This error occurs if the `settlement` date is later than the `maturity` date. |

### Best practices

> - Always make sure that the `settlement` date is earlier than the `maturity` date to avoid a `#NUM!` error.
> - Ensure that the `investment` and `discount` values are numerical. Text or boolean values will result in a `#VALUE!` error.
> - Be careful with the `basis` parameter. Remember that it is optional, and if omitted, it is assumed to be 0. If you use it, make sure you're using the correct type of day count basis.
> - Always check your dates to ensure they are valid to prevent any `#VALUE!` errors.

### Usage

A few examples using the RECEIVED function.

```
RECEIVED("1/1/2023","6/1/2023",1000,10%)  
RECEIVED("1/1/2023","6/1/2023",1000,10%,1)  
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
        "Settlement",
        "Maturity",
        "Investment",
        "Discount",
        "Amount Received"
    ],
    [
        "1/15/2024",
        "7/15/2024",
        10000,
        0.08,
        "=RECEIVED(A2,B2,C2,D2)"
    ],
    [
        "3/1/2024",
        "9/1/2024",
        25000,
        0.065,
        "=RECEIVED(A3,B3,C3,D3)"
    ],
    [
        "6/10/2024",
        "12/10/2024",
        15000,
        0.075,
        "=RECEIVED(A4,B4,C4,D4)"
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
        "Settlement",
        "Maturity",
        "Investment",
        "Discount",
        "Amount Received"
    ],
    [
        "1/15/2024",
        "7/15/2024",
        10000,
        0.08,
        "=RECEIVED(A2,B2,C2,D2)"
    ],
    [
        "3/1/2024",
        "9/1/2024",
        25000,
        0.065,
        "=RECEIVED(A3,B3,C3,D3)"
    ],
    [
        "6/10/2024",
        "12/10/2024",
        15000,
        0.075,
        "=RECEIVED(A4,B4,C4,D4)"
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
        "Settlement",
        "Maturity",
        "Investment",
        "Discount",
        "Amount Received"
    ],
    [
        "1/15/2024",
        "7/15/2024",
        10000,
        0.08,
        "=RECEIVED(A2,B2,C2,D2)"
    ],
    [
        "3/1/2024",
        "9/1/2024",
        25000,
        0.065,
        "=RECEIVED(A3,B3,C3,D3)"
    ],
    [
        "6/10/2024",
        "12/10/2024",
        15000,
        0.075,
        "=RECEIVED(A4,B4,C4,D4)"
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
        "Settlement",
        "Maturity",
        "Investment",
        "Discount",
        "Amount Received"
    ],
    [
        "1/15/2024",
        "7/15/2024",
        10000,
        0.08,
        "=RECEIVED(A2,B2,C2,D2)"
    ],
    [
        "3/1/2024",
        "9/1/2024",
        25000,
        0.065,
        "=RECEIVED(A3,B3,C3,D3)"
    ],
    [
        "6/10/2024",
        "12/10/2024",
        15000,
        0.075,
        "=RECEIVED(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

