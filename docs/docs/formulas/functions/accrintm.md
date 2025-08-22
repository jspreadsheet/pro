title: ACCRINTM Function - Calculate Accrued Interest at Maturity in Jspreadsheet
keywords: ACCRINTM function, accrued interest calculation, bond interest, maturity date interest, financial formulas, Jspreadsheet financial functions, JavaScript spreadsheet, Excel-compatible formulas, investment calculations, security interest
description: Learn how to calculate accrued interest for securities that pay interest at maturity using the ACCRINTM function in Jspreadsheet. Complete guide with examples and best practices.

# ACCRINTM Function - Calculate Accrued Interest at Maturity



The `ACCRINTM` function in Jspreadsheet Formulas Pro is a financial calculation tool designed for securities that pay interest at maturity. This specialized function is essential for:

Investment Analysis:
- Zero-coupon bond valuation
- Treasury bill calculations
- Commercial paper analysis
- Money market instrument pricing
- Fixed-income portfolio management

Financial Operations:
- Interest accrual tracking
- Investment income forecasting
- Portfolio yield calculations
- Cash flow projections
- Maturity value estimation

Risk Management:
- Interest rate exposure analysis
- Portfolio duration calculations
- Investment timing decisions
- Yield curve analysis
- Risk-return assessment

The function is particularly valuable for:
- Investment bankers pricing new issues
- Portfolio managers tracking accrued interest
- Treasury departments managing cash positions
- Risk analysts evaluating interest rate exposure
- Financial controllers preparing reports
- Auditors verifying interest calculations

Unlike standard interest calculations, ACCRINTM specifically handles securities where interest accumulates and pays out at maturity, making it indispensable for accurate financial analysis and reporting.

## Documentation

Calculates the total accrued interest for a security that pays interest only at its maturity date, based on the issue date, maturity date, annual interest rate, par value, and optional day count basis.

### Category

Financial

### Syntax

ACCRINTM(issue, maturity, rate, par, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `issue` | The security's issue date (when the security was first issued). Must be a valid date. |
| `maturity` | The security's maturity date (when interest is paid and principal is returned). Must be after the issue date. |
| `rate` | The security's annual interest rate (as a decimal, e.g., 0.05 for 5%). Must be non-negative. |
| `par` | The security's face value or par value (the principal amount). Must be non-negative. |
| `[basis]` | Optional. The day count basis: 0=30/360 US (default), 1=Actual/Actual, 2=Actual/360, 3=Actual/365, 4=30/360 European. |


### Behavior

The `ACCRINTM` function calculates the accrued interest for a security that pays interest at maturity. It takes the following parameters: issue, maturity, rate, par, and optional basis. The function expects numerical inputs and dates for issue and maturity. 

- If the cells used in the parameters are empty, the function will treat them as zero. 
- Text entered in cells used as parameters will result in a `#VALUE!` error as the function expects numerical inputs or dates. 
- Boolean values are treated as `1` for `TRUE` and `0` for `FALSE`.
- If the issue date or maturity date is not a valid date, the function will return a `#VALUE!` error.
- If the given rate or par value is less than zero, the function will return a `#NUM!` error.
- If the specified basis is not an integer between 0 and 4, the function will return a `#NUM!` error.
- The maturity date must be after the issue date, otherwise the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned if either the issue date or maturity date is not a valid date, or if any of the input parameters are non-numeric. |
| #NUM! | This error is returned if the given rate or par value is less than zero, if the specified basis is not an integer between 0 and 4, or if the maturity date is before or equal to the issue date. |
| #NAME? | This error is returned if the function name is misspelled or missing. |

### Best practices

> - Always ensure that the issue date and maturity date are valid dates, and that they are entered in the correct format accepted by your spreadsheet software.
> - Verify that the maturity date is after the issue date to avoid calculation errors.
> - Always cross-check to ensure that the rate and par value are non-negative values.
> - Make sure to use the correct basis for your calculation. Remember, it should be an integer between 0 and 4 (0=30/360, 1=Actual/Actual, 2=Actual/360, 3=Actual/365, 4=30/360 European).
> - Be cautious about the cell references you use as parameters for the `ACCRINTM` function to avoid unwanted `#VALUE!` errors due to non-numeric inputs.
> - Consider the day count convention (basis) carefully as it significantly affects the calculation results.

### Usage

Here are practical examples using the ACCRINTM function with different scenarios:

**Example 1: Basic calculation with default basis**
```
=ACCRINTM('1-Jan-2022', '1-Jan-2023', 0.05, 1000)
// Calculates accrued interest for a $1,000 bond at 5% annual rate
// Result: $50.00 (for full year with 30/360 basis)
```

**Example 2: Six-month bond with actual/actual basis**
```
=ACCRINTM('1-Jan-2023', '1-Jul-2023', 0.04, 5000, 1)
// Calculates accrued interest for a $5,000 bond at 4% annual rate
// Using actual/actual day count basis
```

**Example 3: Short-term security with actual/360 basis**
```
=ACCRINTM('15-Mar-2023', '15-Jun-2023', 0.035, 2500, 2)
// 3-month bond calculation with actual/360 day count
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
        "Issue Date",
        "Maturity Date",
        "Rate",
        "Par Value",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        0.045,
        1000,
        0,
        "=ACCRINTM(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        0.038,
        5000,
        1,
        "=ACCRINTM(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-10",
        "2023-12-10",
        0.052,
        2500,
        2,
        "=ACCRINTM(A4,B4,C4,D4,E4)"
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
        "Issue Date",
        "Maturity Date",
        "Rate",
        "Par Value",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        0.045,
        1000,
        0,
        "=ACCRINTM(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        0.038,
        5000,
        1,
        "=ACCRINTM(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-10",
        "2023-12-10",
        0.052,
        2500,
        2,
        "=ACCRINTM(A4,B4,C4,D4,E4)"
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
        "Issue Date",
        "Maturity Date",
        "Rate",
        "Par Value",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        0.045,
        1000,
        0,
        "=ACCRINTM(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        0.038,
        5000,
        1,
        "=ACCRINTM(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-10",
        "2023-12-10",
        0.052,
        2500,
        2,
        "=ACCRINTM(A4,B4,C4,D4,E4)"
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
        "Issue Date",
        "Maturity Date",
        "Rate",
        "Par Value",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        0.045,
        1000,
        0,
        "=ACCRINTM(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        0.038,
        5000,
        1,
        "=ACCRINTM(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-10",
        "2023-12-10",
        0.052,
        2500,
        2,
        "=ACCRINTM(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

