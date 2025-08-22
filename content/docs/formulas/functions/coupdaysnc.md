title: COUPDAYSNC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPDAYSNC function in Jspreadsheet

# COUPDAYSNC function

`PRO`{.jtag}

The `COUPDAYSNC` function in Jspreadsheet Formulas Pro is used to compute the number of days from the settlement date to the forthcoming coupon date for a financial security that offers periodic interest. The unique aspect is that this particular security has an irregular first coupon period. In simpler terms, it helps determine the period until the next payout for an investment, especially when the first payout was not standard or regular. This function is highly valuable in financial analysis and investment planning.

## Documentation

Calculates the number of days from the settlement date to the next coupon date for a security that pays periodic interest, but has an irregular first coupon period.

### Category

Financial

### Syntax

COUPDAYSNC(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `date` | The settlement date. |
| `date` | The maturity date. |
| `number` | The number of coupon payments per year. |
| `number` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The 'COUPDAYSNC' function in spreadsheets calculates the number of days from the settlement date until the next coupon date. The function takes four arguments: settlement date, maturity date, frequency of the coupon, and basis (the type of day count to use). 

- If any of the date cells are empty or contain non-date data, the function will return a #VALUE! error.
- If the frequency argument is not one of the accepted values (1, 2, or 4), the function will return a #NUM! error.
- If the basis argument is not one of the accepted values (0, 1, 2, 3, or 4), the function will return a #NUM! error.
- The function does not handle boolean values. If a boolean value is entered, the function will return a #VALUE! error.
- If the settlement date is after the maturity date, the function will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function returns this error when any of the date cells are empty or contain non-date data, or if a boolean value is entered. |
| #NUM! | The function returns this error if the frequency is not one of the accepted values (1, 2, or 4), if the basis is not one of the accepted values (0, 1, 2, 3, or 4), or if the settlement date is after the maturity date. |

### Best practices

> - Always ensure that the settlement and maturity dates are valid dates.
> - Make sure the frequency and basis arguments are within the accepted range of values. Frequency should be 1, 2, or 4 and basis should be 0, 1, 2, 3, or 4.
> - Do not use boolean values as arguments for this function.
> - Always check that the settlement date is not later than the maturity date.

### Usage

A few examples using the COUPDAYSNC function.

```
COUPDAYSNC("2022-01-01", "2022-06-30", 2)  
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Days to Next Coupon"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPDAYSNC(A2,B2,C2)"
    ],
    [
        "2023-07-20",
        "2026-06-30",
        4,
        "=COUPDAYSNC(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2027-03-15",
        1,
        "=COUPDAYSNC(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Days to Next Coupon"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPDAYSNC(A2,B2,C2)"
    ],
    [
        "2023-07-20",
        "2026-06-30",
        4,
        "=COUPDAYSNC(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2027-03-15",
        1,
        "=COUPDAYSNC(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Days to Next Coupon"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPDAYSNC(A2,B2,C2)"
    ],
    [
        "2023-07-20",
        "2026-06-30",
        4,
        "=COUPDAYSNC(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2027-03-15",
        1,
        "=COUPDAYSNC(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Days to Next Coupon"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPDAYSNC(A2,B2,C2)"
    ],
    [
        "2023-07-20",
        "2026-06-30",
        4,
        "=COUPDAYSNC(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2027-03-15",
        1,
        "=COUPDAYSNC(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

