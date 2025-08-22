title: PRICE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PRICE function in Jspreadsheet

# PRICE function

`PRO`{.jtag}

The `PRICE` function in Jspreadsheet Formulas Pro is a tool that calculates the cost of a financial security for every $100 of its face value, considering its annual interest rate or coupon rate. This function is particularly useful when you need to determine the actual cost of investment bonds or similar securities. It essentially helps you understand how much you would need to invest today to gain a particular amount in the future. With this, you can make informed decisions on your investment strategies.

## Documentation

Returns the price per $100 face value of a security with an annual coupon rate.

### Category

Financial

### Syntax

PRICE(settlement, maturity, rate, yld, redemption, [frequency], [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `rate` | The annual coupon rate of the security. |
| `yld` | The annual yield of the security. |
| `redemption` | The redemption value per $100 face value of the security. |
| `[frequency]` | Optional. The number of coupon payments per year. If omitted, defaults to 2 (semi-annual). |
| `[basis]` | Optional. The day count basis to use for calculating bond interest. If omitted, defaults to 0 (US (NASD) 30/360). |


### Behavior

The 'PRICE' function in a spreadsheet is used to calculate the price per $100 face value of a security that pays periodic interest. It requires various parameters such as settlement date, maturity date, rate, yield, redemption, and frequency of payments. 

- If the provided input cells are empty, the 'PRICE' function will return a `#VALUE!` error.
- Text and boolean values are not valid parameters for this function and will result in a `#VALUE!` error.
- If the settlement date is greater than the maturity date, the function will return a `#NUM!` error.
- The 'PRICE' function handles dates according to the 360-day year (12 x 30-day month), which is common in accounting calculations.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when the provided input cells are empty, or the parameters provided are non-numeric (like text or boolean values). |
| `#NUM!` | This error is returned when the settlement date is greater than the maturity date, or if any numeric parameter is less than or equal to zero. |
| `#NAME?` | This error is returned when the spreadsheet does not recognize the 'PRICE' function, possibly due to a typo. |

### Best practices

> - Always ensure that the settlement date is less than the maturity date to avoid a `#NUM!` error.
> - The parameters provided to the 'PRICE' function should be in the correct order. Incorrect ordering of parameters could lead to wrong results or errors.
> - Avoid using text or boolean values as parameters in the 'PRICE' function.
> - Validate that the rate, yield, redemption, and frequency are all greater than zero to avoid a `#NUM!` error.

### Usage

A few examples using the PRICE function.

```
PRICE("1/1/2023","1/1/2043",6%,8%,100)  
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
        "Rate",
        "Yield",
        "Redemption",
        "Price"
    ],
    [
        "1/1/2024",
        "1/1/2034",
        0.05,
        0.06,
        100,
        "=PRICE(A2,B2,C2,D2,E2)"
    ],
    [
        "6/15/2024",
        "6/15/2029",
        0.04,
        0.045,
        100,
        "=PRICE(A3,B3,C3,D3,E3)"
    ],
    [
        "3/1/2024",
        "3/1/2044",
        0.075,
        0.08,
        100,
        "=PRICE(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Redemption",
        "Price"
    ],
    [
        "1/1/2024",
        "1/1/2034",
        0.05,
        0.06,
        100,
        "=PRICE(A2,B2,C2,D2,E2)"
    ],
    [
        "6/15/2024",
        "6/15/2029",
        0.04,
        0.045,
        100,
        "=PRICE(A3,B3,C3,D3,E3)"
    ],
    [
        "3/1/2024",
        "3/1/2044",
        0.075,
        0.08,
        100,
        "=PRICE(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Redemption",
        "Price"
    ],
    [
        "1/1/2024",
        "1/1/2034",
        0.05,
        0.06,
        100,
        "=PRICE(A2,B2,C2,D2,E2)"
    ],
    [
        "6/15/2024",
        "6/15/2029",
        0.04,
        0.045,
        100,
        "=PRICE(A3,B3,C3,D3,E3)"
    ],
    [
        "3/1/2024",
        "3/1/2044",
        0.075,
        0.08,
        100,
        "=PRICE(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Redemption",
        "Price"
    ],
    [
        "1/1/2024",
        "1/1/2034",
        0.05,
        0.06,
        100,
        "=PRICE(A2,B2,C2,D2,E2)"
    ],
    [
        "6/15/2024",
        "6/15/2029",
        0.04,
        0.045,
        100,
        "=PRICE(A3,B3,C3,D3,E3)"
    ],
    [
        "3/1/2024",
        "3/1/2044",
        0.075,
        0.08,
        100,
        "=PRICE(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

