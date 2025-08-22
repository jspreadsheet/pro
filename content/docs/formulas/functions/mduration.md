title: MDURATION function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MDURATION function in Jspreadsheet

# MDURATION function



The `MDURATION` formula in Jspreadsheet Formulas Pro is a tool used to calculate the Macauley duration of a financial security, assuming it has a par value of $100. The Macauley duration is a measure of how long it would take to recoup your investment in a bond or other fixed-income security. This tool is handy for investors who want to understand the risk and potential return of their investments. With the `MDURATION` function, you can easily calculate this value and make informed decisions about your portfolio.

## Documentation

Returns the Macauley duration of a security with an assumed par value of $100.

### Category

Financial

### Syntax

MDURATION(settlement, maturity, coupon, yld, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date, which is the date when the security is traded to the buyer. |
| `maturity` | The security's maturity date, which is the date when the security expires and the issuer must pay the principal to the bondholder. |
| `coupon` | The security's annual coupon rate. |
| `yld` | The security's annual yield. |
| `frequency` | The number of coupon payments per year. Common values are 1 for annually, 2 for semiannually, and 4 for quarterly. |
| `basis` | Optional. The type of day count basis to use. 0 or omitted = US (NASD) 30/360, 1 = actual/actual, 2 = actual/360, 3 = actual/365, 4 = European 30/360. |


### Behavior

The `MDURATION` function in spreadsheets returns the Macaulay duration, a measure of bond price volatility, for a security with an assumed par value of $100. It requires the following inputs: settlement (the security's settlement date), maturity (the security's maturity date), coupon (the security's annual coupon rate), yield (the security's annual yield), frequency (number of coupon payments per year), and basis (the type of day count basis to use).

- In general, `MDURATION` expects numerical values for all its arguments. If any of the arguments are text or booleans, `MDURATION` will return a `#VALUE!` error.

- If the settlement, maturity, coupon, yield, frequency, or basis values are empty cells, `MDURATION` will return a `#NUM!` error.

- If the settlement or maturity dates are not valid dates, `MDURATION` will return a `#VALUE!` error.

- `MDURATION` does not handle errors within its arguments. If any of the arguments contain an error, `MDURATION` will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when one of the arguments is non-numeric, such as text or boolean values, or if the settlement or maturity dates are not valid dates. |
| `#NUM!` | This error occurs if any of the arguments are empty cells, or if the given dates, coupon, yield, frequency, or basis values are not valid within the context of bond pricing. |
| `#DIV/0!` | This error occurs if the yield or frequency is zero, since Macaulay duration involves division by these quantities. |

### Best practices

> - Always ensure that your dates are valid and properly formatted in your spreadsheet to avoid `#VALUE!` errors.
> - Be careful when inputting data into the `MDURATION` function. Incorrect values can result in `#NUM!` or `#DIV/0!` errors.
> - Use caution when interpreting the results of the `MDURATION` function. The Macaulay duration is a measure of bond price volatility and should not be used on its own to make investment decisions.
> - Always cross-check the results of the `MDURATION` function with other relevant financial data to ensure accuracy.

### Usage

A few examples using the MDURATION function.

```
MDURATION("2022-01-01", "2032-12-31", 5.75, 0.06, 2, 0) returns the Macauley duration for a security that pays a 5.75% annual coupon, has a settlement date of January 1, 2022, a maturity date of December 31, 2032, an annual yield of 6%, and pays coupons twice a year (semiannually)  
MDURATION("2022-01-01", "2032-12-31", 5.75, 0.06, 4, 1) returns the Macauley duration for a security that pays a 5.75% annual coupon, has a settlement date of January 1, 2022, a maturity date of December 31, 2032, an annual yield of 6%, and pays coupons four times a year (quarterly)  
MDURATION("2022-01-01", "12/31/2032-12-31", 5.75, 0.06, 1) returns the Macauley duration for a security that pays a 5.75% annual coupon, has a settlement date of January 1, 2022, a maturity date of December 31, 2032, an annual yield of 6%, and pays coupons once a year.  
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
        "Basis",
        "Macauley Duration"
    ],
    [
        "2023-01-15",
        "2033-01-15",
        0.0525,
        0.055,
        2,
        0,
        "=MDURATION(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2023-06-01",
        "2028-06-01",
        0.0475,
        0.04,
        4,
        1,
        "=MDURATION(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2023-03-10",
        "2030-03-10",
        0.06,
        0.065,
        1,
        0,
        "=MDURATION(A4,B4,C4,D4,E4,F4)"
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
        "Basis",
        "Macauley Duration"
    ],
    [
        "2023-01-15",
        "2033-01-15",
        0.0525,
        0.055,
        2,
        0,
        "=MDURATION(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2023-06-01",
        "2028-06-01",
        0.0475,
        0.04,
        4,
        1,
        "=MDURATION(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2023-03-10",
        "2030-03-10",
        0.06,
        0.065,
        1,
        0,
        "=MDURATION(A4,B4,C4,D4,E4,F4)"
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
        "Basis",
        "Macauley Duration"
    ],
    [
        "2023-01-15",
        "2033-01-15",
        0.0525,
        0.055,
        2,
        0,
        "=MDURATION(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2023-06-01",
        "2028-06-01",
        0.0475,
        0.04,
        4,
        1,
        "=MDURATION(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2023-03-10",
        "2030-03-10",
        0.06,
        0.065,
        1,
        0,
        "=MDURATION(A4,B4,C4,D4,E4,F4)"
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
        "Basis",
        "Macauley Duration"
    ],
    [
        "2023-01-15",
        "2033-01-15",
        0.0525,
        0.055,
        2,
        0,
        "=MDURATION(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2023-06-01",
        "2028-06-01",
        0.0475,
        0.04,
        4,
        1,
        "=MDURATION(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2023-03-10",
        "2030-03-10",
        0.06,
        0.065,
        1,
        0,
        "=MDURATION(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

