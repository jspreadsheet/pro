title: DURATION function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DURATION function in Jspreadsheet

# DURATION function



The DURATION function in Jspreadsheet Formulas Pro is a tool used to estimate the duration of a financial security, assuming it has a par value of $100. This function is based on the concept of Macaulay duration, which measures how long it takes for the price of a bond to be repaid by its internal cash flows. Essentially, it helps you understand the sensitivity of a bond's price to changes in interest rates. This function can be extremely useful for risk management in financial analysis.

## Documentation

The DURATION function calculates the Macaulay duration of a security with an assumed par value of $100.

### Category

Financial

### Syntax

DURATION(settlement, maturity, coupon, yld, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer. |
| `maturity` | The security's maturity date. The maturity date is the date when the security expires. |
| `coupon` | The security's annual coupon rate. |
| `yld` | The security's annual yield. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. The type of day count basis to use. |


### Behavior

The `DURATION` function in spreadsheets is used to calculate the duration or Macaulay Duration of a security that pays periodic interest, such as a bond. This function takes in six arguments: the settlement date, the maturity date, the coupon rate, the yield, the frequency of payments per year, and the day count basis to be used. 

- If any of the cells referenced in the arguments contain text, the function will return an error.
- If the cells are empty, the function will also return an error, as all arguments are required.
- Booleans are not applicable in this function, as all arguments need to be in date or numerical format.
- The function will return an error if the settlement date is later than the maturity date, if the yield, coupon rate or frequency is less than zero, or if the basis is anything other than 0, 1, 2, 3 or 4.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the settlement date is later than the maturity date, if the yield, coupon rate or frequency is less than zero, or if the basis is anything other than 0, 1, 2, 3 or 4. |
| #VALUE! | Occurs if any of the cells referenced in the arguments contain text or are empty. |
| #REF! | Occurs if a cell reference is not valid. |

### Best practices

> - Ensure that all cells referenced in the arguments are in the correct format (dates for settlement and maturity dates, and numbers for coupon rate, yield, frequency and basis).
> - Check that all arguments are within the valid ranges to avoid a #NUM! error.
> - Avoid hard coding values into the function to make your spreadsheet more flexible and easier to update. Instead, reference cells where your input values are stored.
> - Always cross-verify the results, especially when dealing with financial calculations, as small errors can lead to significant misinterpretations.

### Usage

A few examples using the DURATION function.

```
DURATION('12/31/2022', '12/31/2025', 0.08, 0.09, 2) returns 2,72170141  
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
        "Coupon",
        "Yield",
        "Frequency",
        "Duration"
    ],
    [
        "2023-01-15",
        "2028-01-15",
        0.065,
        0.075,
        2,
        "=DURATION(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-01",
        "2030-06-01",
        0.08,
        0.09,
        2,
        "=DURATION(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-10",
        "2026-03-10",
        0.055,
        0.06,
        4,
        "=DURATION(A4,B4,C4,D4,E4)"
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
        "Coupon",
        "Yield",
        "Frequency",
        "Duration"
    ],
    [
        "2023-01-15",
        "2028-01-15",
        0.065,
        0.075,
        2,
        "=DURATION(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-01",
        "2030-06-01",
        0.08,
        0.09,
        2,
        "=DURATION(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-10",
        "2026-03-10",
        0.055,
        0.06,
        4,
        "=DURATION(A4,B4,C4,D4,E4)"
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
        "Coupon",
        "Yield",
        "Frequency",
        "Duration"
    ],
    [
        "2023-01-15",
        "2028-01-15",
        0.065,
        0.075,
        2,
        "=DURATION(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-01",
        "2030-06-01",
        0.08,
        0.09,
        2,
        "=DURATION(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-10",
        "2026-03-10",
        0.055,
        0.06,
        4,
        "=DURATION(A4,B4,C4,D4,E4)"
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
        "Coupon",
        "Yield",
        "Frequency",
        "Duration"
    ],
    [
        "2023-01-15",
        "2028-01-15",
        0.065,
        0.075,
        2,
        "=DURATION(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-01",
        "2030-06-01",
        0.08,
        0.09,
        2,
        "=DURATION(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-10",
        "2026-03-10",
        0.055,
        0.06,
        4,
        "=DURATION(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

